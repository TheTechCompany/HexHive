import qs from 'qs';
import React from 'react';

export const ConsentScreen = () => {
    return (
            <div className="login-card">
              <h1>Authorize</h1>
              <div className="login-client-image">
                
              </div>
  
                {/* 
                      
              <ul>
                <% if ([details.missingOIDCScope, details.missingOIDCClaims, details.missingResourceScopes].filter(Boolean).length === 0) { %>
                  <li>the client is asking you to confirm previously given authorization</li>
                <% } %>
        
                <% missingOIDCScope = new Set(details.missingOIDCScope); missingOIDCScope.delete('openid'); missingOIDCScope.delete('offline_access') %>
                <% if (missingOIDCScope.size) { %>
                  <li>scopes:</li>
                  <ul>
                    <% missingOIDCScope.forEach((scope) => { %>
                      <li><%= scope %></li>
                    <% }) %>
                  </ul>
                <% } %>
        
                <% missingOIDCClaims = new Set(details.missingOIDCClaims); ['sub', 'sid', 'auth_time', 'acr', 'amr', 'iss'].forEach(Set.prototype.delete.bind(missingOIDCClaims)) %>
                <% if (missingOIDCClaims.size) { %>
                  <li>claims:</li>
                  <ul>
                    <% missingOIDCClaims.forEach((claim) => { %>
                      <li><%= claim %></li>
                    <% }) %>
                  </ul>
                <% } %>
        
                <% missingResourceScopes = details.missingResourceScopes %>
                <% if (missingResourceScopes) { %>
                  <% for (const [indicator, scopes] of Object.entries(details.missingResourceScopes)) { %>
                    <li><%= indicator %>:</li>
                    <ul>
                      <% scopes.forEach((scope) => { %>
                        <li><%= scope %></li>
                      <% }) %>
                    </ul>
                  <% } %>
                <% } %>
        
                <% if (params.scope && params.scope.includes('offline_access')) { %>
                  <li>
                  the client is asking to have offline access to this authorization
                    <% if ((!details.missingOIDCScope) || !details.missingOIDCScope.includes('offline_access')) { %>
                      (which you've previously granted)
                    <% } %>
                  </li>
                <% } %>
        
                </ul> */}
        
              <form autoComplete="off" action={`${process.env.REACT_APP_API || 'https://staging-api.hexhive.io'}/interaction/${qs.parse(window.location.search, {ignoreQueryPrefix: true}).token}/confirm`} method="post">
                <button autoFocus type="submit" className="login login-submit">Continue</button>
              </form>
              <div className="login-help">
                <a href={`${process.env.REACT_APP_API || 'https://staging-api.hexhive.io'}/interaction/${qs.parse(window.location.search, {ignoreQueryPrefix: true}).token}/abort`}>[ Cancel ]</a>
           
                <a href="/tos">[ Terms of Service ]</a>

                <a href="privacy-policy">[ Privacy Policy ]</a>
              </div>
        </div>
    );
}