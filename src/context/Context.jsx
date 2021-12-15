import { createContext, useState, useContext } from 'react';

const appContext = createContext();

export const useAppContext = ()=> useContext(appContext);

export function ContextProvider ({children}) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [team, setTeam] = useState([])


    return (
        <>
            <appContext.Provider value={{
                loggedIn,
                setLoggedIn,
            }}>
                {children}
            </appContext.Provider>
        </>
    )
}


