# Get Started

```typescript
import express from 'express';

import graphqlHTTP from 'graphql-http';


const app = express()


app.use('/graphql', {
    schema: GraphQLSchema
})

app.listen(PORT)

```

config.hexhive.js
```
{
    graph: "/graphql" | {
        "Name": "/route/name"
    }
}
```