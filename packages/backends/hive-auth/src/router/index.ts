import assert from 'assert'
import express from 'express'
import path from 'path';
import bodyParser from 'body-parser';
import { Provider } from 'oidc-provider';
import { Account } from '../Account';

export default (oidc: Provider) => {

    const expressApp = express();
    expressApp.set('trust proxy', true);
    expressApp.set('view engine', 'ejs');
    expressApp.set('views', path.resolve(__dirname, '../views'));

    const parse = bodyParser.urlencoded({ extended: false });

    function setNoCache(req: any, res: any, next: any) {
        res.set('Pragma', 'no-cache');
        res.set('Cache-Control', 'no-cache, no-store');
        next();
    }

    expressApp.get('/interaction/:uid', setNoCache, async (req, res, next) => {
        try {
            const details = await oidc.interactionDetails(req, res);
            console.log('see what else is available to you for interaction views', details);
            const {
                uid, prompt, params,
            } = details;

            const client = await oidc.Client.find(params.client_id as string);

            if (prompt.name === 'login') {
                return res.render('login', {
                    client,
                    uid,
                    details: prompt.details,
                    params,
                    title: 'Sign-in',
                    flash: undefined,
                });
            }

            return res.render('interaction', {
                client,
                uid,
                details: prompt.details,
                params,
                title: 'Authorize',
            });
        } catch (err) {
            return next(err);
        }
    });

    expressApp.post('/interaction/:uid/login', setNoCache, parse, async (req, res, next) => {
        try {
            const { uid, prompt, params } = await oidc.interactionDetails(req, res);
            assert.strictEqual(prompt.name, 'login');
            const client = await oidc.Client.find(params.client_id as string);

            const accountId = await Account.authenticate(req.body.email, req.body.password);
            console.log(accountId)
            if (!accountId) {
                res.render('login', {
                    client,
                    uid,
                    details: prompt.details,
                    params: {
                        ...params,
                        login_hint: req.body.email,
                    },
                    title: 'Sign-in',
                    flash: 'Invalid email or password.',
                });
                return;
            }

            const result = {
                login: { accountId },
            };

            await oidc.interactionFinished(req, res, result, { mergeWithLastSubmission: false });
        } catch (err) {
            next(err);
        }
    });

    expressApp.post('/interaction/:uid/confirm', setNoCache, parse, async (req, res, next) => {
        try {
            const interactionDetails: any = await oidc.interactionDetails(req, res);
            const { prompt: { name, details }, params, session: { accountId } } = interactionDetails;
            assert.strictEqual(name, 'consent');

            let { grantId } = interactionDetails;
            let grant: any;

            if (grantId) {
                // we'll be modifying existing grant in existing session
                grant = await oidc.Grant.find(grantId);
            } else {
                // we're establishing a new grant
                grant = new oidc.Grant({
                    accountId,
                    clientId: params.client_id as string,
                });
            }

            if (details.missingOIDCScope) {
                grant?.addOIDCScope((details.missingOIDCScope as any[]).join(' '));
                // use grant.rejectOIDCScope to reject a subset or the whole thing
            }
            if (details.missingOIDCClaims) {
                grant?.addOIDCClaims(details.missingOIDCClaims);
                // use grant.rejectOIDCClaims to reject a subset or the whole thing
            }
            if (details.missingResourceScopes) {
                // eslint-disable-next-line no-restricted-syntax
                for (const [indicator, scopes] of Object.entries(details.missingResourceScopes as object)) {
                    grant?.addResourceScope(indicator, scopes.join(' '));
                    // use grant.rejectResourceScope to reject a subset or the whole thing
                }
            }

            grantId = await grant?.save();

            const consent : any = {};
            if (!interactionDetails.grantId) {
                // we don't have to pass grantId to consent, we're just modifying existing one
                consent.grantId = grantId;
            }

            const result = { consent };
            await oidc.interactionFinished(req, res, result, { mergeWithLastSubmission: true });
        } catch (err) {
            next(err);
        }
    });

    expressApp.get('/interaction/:uid/abort', setNoCache, async (req, res, next) => {
        try {
            const result = {
                error: 'access_denied',
                error_description: 'End-User aborted interaction',
            };
            await oidc.interactionFinished(req, res, result, { mergeWithLastSubmission: false });
        } catch (err) {
            next(err);
        }
    });

    expressApp.use(oidc.callback())

    return expressApp
}