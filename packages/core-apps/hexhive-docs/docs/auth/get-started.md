# Get Started

```bash

yarn add @hexhive/auth-ui

```


## Usage

App.tsx
```typescript

import React from 'react';
import { AuthProvider } from '@hexhive/auth-ui';
export const App = () => {

    return (
        <AuthProvider   
            authorizationServer={"https://api.hexhive.io"}
            clientId={CLIENT_ID}
            clientSecret={CLIENT_SECRET} //needs to be removed
            redirectUri={REDIRECT_URI}>
                <Body />
        </AuthProvider>
    )
}
```

Body.tsx
```typescript

export const Body = () => {
    const { token, user } = useAuth();
    
    return (
        <div>

        </div>
    )
}
```