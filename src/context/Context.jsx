import { createContext, useState, useContext } from 'react';

const loginContext = createContext();

export const useLoginContext = ()=> useContext(loginContext);

export function LoginContextProvider ({children}) {

    const [loggedIn, setLoggedIn] = useState(false)
    
    const handleLoggedIn = (bool) => {
        return setLoggedIn(bool)
    }

    return (
        <>
            <loginContext.Provider value={{
                loggedIn,
                handleLoggedIn,
            }}>
                {children}
            </loginContext.Provider>
        </>
    )
}