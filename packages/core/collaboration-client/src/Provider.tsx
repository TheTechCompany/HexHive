import React from 'react';
import { useContext } from 'react';
import { AutomergeClient } from './client';

export const AutomergeClientContext = React.createContext<{isReady?: boolean, client?: AutomergeClient}>({})

export const useAutomergeContext = () => useContext(AutomergeClientContext)

export const AutomergeClientProvider : React.FC<any> = (props) => {
    
    return (
        <AutomergeClientContext.Provider
            value={{
                isReady: props.isReady,
                client: props.client
            }}>
            {props.children}
        </AutomergeClientContext.Provider>
    )
}