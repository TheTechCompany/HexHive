import React from 'react';

export interface LoginFormProps {
    authorizationUri: string;
    clientId: string;
    redirectUri: string;
    grant?: string;
    responseType?: string;
}

export const LoginForm : React.FC<LoginFormProps> = (props) => {
    return (
        <form 
            action={props.authorizationUri}
            method={"post"}
            className="hexhive__login-form">
            <input type="hidden" name="client_id" value={props.clientId} />
            <input type="hidden" name="grant_type" value={props.grant || "authorization_code"} />
            <input type="hidden" name="response_type" value={props.responseType || 'code'} />
            <input type="hidden" name="redirect_uri" value={props.redirectUri} />
            <input type="hidden" name="state" value={"myState"} />
            {props.children}
        </form>
    );
}