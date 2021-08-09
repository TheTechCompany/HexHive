import { introspectSchema } from '@graphql-tools/wrap';
import { fetch } from 'cross-fetch';
import { print } from 'graphql';

 const remoteExecutor = (url: string) => {
    return async ({ document, variables, context }: any) => {
        console.log(context)
        const query = print(document);

        const fetchResult = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables, context: {user: context?.user} }),
        });
    
        return fetchResult.json();
 

    }
 }

export default async (remotes: string[]) => {
    return await Promise.all(remotes.map( async (x) => ({
        schema: await introspectSchema(remoteExecutor(x)),
        executor: remoteExecutor(x)
    })))
}