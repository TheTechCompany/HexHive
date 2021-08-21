import { Router } from 'express'
import { CentralAuthServer } from '@hexhive/auth';
import { User } from '@hexhive/types';
import crypto from 'crypto'
import { Provider } from 'oidc-provider';
import bodyParser from 'body-parser';
import { Account } from '../../Account';
import assert from 'assert';

export const AuthRouter = (oidc: Provider) : Router => {
    const router = Router();

    router.post('/matrix_directory', async (req, res) => {
      let search = {
        term: req.body.search_term
      }
      let query : any = {$text: {$search: search.term}}

      // query[search.by == 'name' ? 'name' : 'username'] = search.term
      const users = await User.find(query)
      return res.send({
        limited: false,
        results: users.map((x: any) => ({
          display_name: x.name,
          user_id: x.id
        }))
      })
    })
    
    router.post('/matrix_auth', async (req, res, next) => {
      let auth = {
        mxid: req.body.auth.mxid,
        localpart: req.body.auth.localpart,
        domain: req.body.auth.domain,
        password: req.body.auth.password
      }

      const pwd_hash = crypto.createHash('sha256').update(auth.password).digest('hex')

      console.log("matrix auth", auth, pwd_hash)
      const user = await User.findOne({_id: auth.localpart, password: pwd_hash})

      if(!user) return res.send({auth: {success: false}})

      res.send({
        auth: {
          success: true,
          id: {
            type: 'localpart',
            value: auth.localpart
          },
          profile: {
            display_name: user.name,
            three_pids: [
              {
                medium: 'email',
                address: user.username
              }
            ]
          }
        }
      })
      console.log("Matrix auth request", {
        auth: {
          success: true,
          id: {
            type: 'localpart',
            value: auth.localpart
          },
          profile: {
            display_name: user.name,
            three_pids: [
              {
                medium: 'email',
                address: user.username
              }
            ]
          }
        }
      })
    })

    router.post('/matrix_ident', async (req, res) => {
      const user = await User.findOne({username: req.body.lookup.address})
      
      const users = await User.find()
      console.log(users, req.body)

      if(!user){
        return res.send({})
      }else{
        res.send({
          lookup: {
            medium: 'email',
            address: req.body.lookup.address,
            id: {
              type: 'mxid',
              value: `@${user.id}:matrix.hexhive.io`
            }
          }
        })  
      }
      console.log("IDENT", req.body)
    })


    router.get('/matrix_profile/:type', async (req, res) => {
      console.log("PROFILE", req.params.type, req.query)

      let localPart = req.params.type.split(':')[0].replace('@', '')

      const user = await User.findOne({_id: localPart}) //.populate('organisation')
      if(!user) return res.send({profile: {}})

      res.send({displayname: user.name, display_name: user.name + '_'})
      // let returnValue : any = {
      //   profile: {

      //   }
      // }

      // switch(req.params.type){
      //   case 'display_name':
      //     returnValue.profile.display_name = user.name;
      //     break;
      //   case 'threepids':
      //     returnValue.profile.threepids = [{medium: 'email', address: user.username}]
      //     break;
      //   case 'roles':
      //     returnValue.profile.roles = ["DomainUsers", "HexHive"]
      //     break;
      //   default:
      //     break;
      // }
      // console.log(returnValue)
      // return res.send(returnValue)
    })

    router.post('/matrix_profile/:type', async (req, res) => {
      console.log("PROFILE", req.params.type, req.query)

      const user = await User.findOne({_id: req.body.localpart}) //.populate('organisation')
      if(!user) return res.send({profile: {}})

      let returnValue : any = {
        profile: {

        }
      }

          returnValue.profile.display_name = user.name;
          returnValue.profile.threepids = [{medium: 'email', address: user.username}]
          returnValue.profile.roles = ["DomainUsers", "HexHive"]
  
      console.log(returnValue)
      return res.send(returnValue)
    })

    // router.post('/authorize', async (req, res, next) => {
    //     const user = await methods.findUser(req.body)

    //     // let cookieToken = req.cookies['token'];

    //      if(user){
    //          req.body.user = {user: user._id}
    //     //     let decoded = cas.decodeToken(cookieToken)
    //         return next() //User = id?
    //      }

    //     const params = [ // Send params back down
    //         'client_id',
    //         'redirect_uri',
    //         'response_type',
    //         'grant_type',
    //         'state',
    //       ]
    //         .map(a => `${a}=${req.body[a]}`)
    //         .join('&')
    //       return res.redirect(`${req.headers.referer || `/oauth`}?success=false&${params}`)
    //     }, cas.oauthServer.authorize({
    //       authenticateHandler: {
    //         handle: async (req: { body: { [x: string]: any; user?: any } }) => {
    //             return await methods.findUser(req.body.user)
    //         //   console.log('Authenticate Handler')
    //         //   console.log(Object.keys(req.body).map(k => ({name: k, value: req.body[k]})))
    //         //   return req.body.user
    //         }
    //       }
    //     }), (req, res) => {
    //         res.send((res as any).locals.oauth)   
    //     })

    // router.post('/token', (req: any,res: any,next: () => void) => {
    //     console.log('Token')
    //     next()
    //   }, cas.oauthServer.token({
    //     requireClientAuthentication: { // whether client needs to provide client_secret for specific grants
    //       // 'authorization_code': false,
    //     },
    //   }), (req, res) => {
    //     let oauth = res.locals.oauth.token
    //     let signed_jwt = cas.signToken({user: {_id: oauth.client}, token: oauth.refreshToken})

    //     res.cookie('refresh-token', signed_jwt, {
    //       domain: process.env.NODE_ENV == 'production' ?( cas.issuer || 'hexhive.io') : 'localhost',
    //       expires: oauth.refreshTokenExpiresAt
    //     })

    //     console.log("Sending toke")

    //     res.status(200)
    //     res.send({
    //       accessToken: oauth.accessToken,
    //       expiresAt: oauth.accessTokenExpiresAt
    //     })
    //   })



    const parse = bodyParser.urlencoded({ extended: false });

    function setNoCache(req: any, res: any, next: any) {
        res.set('Pragma', 'no-cache');
        res.set('Cache-Control', 'no-cache, no-store');
        next();
    }

    router.get('/interaction/:uid', setNoCache, async (req, res, next) => {
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

    router.post('/interaction/:uid/login', setNoCache, parse, async (req, res, next) => {
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

    router.post('/interaction/:uid/confirm', setNoCache, parse, async (req, res, next) => {
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

    router.get('/interaction/:uid/abort', setNoCache, async (req, res, next) => {
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

      return router;
}