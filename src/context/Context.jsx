import { createContext, useState, useContext } from 'react';

const appContext = createContext();

export const useAppContext = ()=> useContext(appContext);

export function ContextProvider ({children}) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [team, setTeam] = useState([{}])
    const [heroes, setHeroes] = useState(0)
    const [villains, setVillains] = useState(0)
    const [error, setError] = useState("")
    
    const addToTeam = (hero) => { 
        if (!isInTeam(hero.id)) {
        if (team.length < 6) {
            if (hero.biography.alignment === "good" ){
                if(heroes < 2) {
                    setTeam([...team, hero])
                    setHeroes(heroes + 1)
                    
                }else {
                    setError("You already have three heroes. Delete one before adding a new one.")
                }
            }else if (villains < 2) {
                setTeam([...team, hero])
                setVillains(villains + 1)
            }else {
                setError("You already have three villains. Delete one before adding a new one.")
            }
        }else {
            setError("Your team is complete!")
        }
        console.log("TEAM " + team.map(team=>team.id) + " heroes:  " + heroes)
    }else {
        setError("That hero is already on your team")
    }
    }

    const isInTeam = (id) => {
        if (team.find(h=> h.id === id)) {
            return true
        }else {
            return false
        }
    }

    return (
        <>
            <appContext.Provider value={{
                loggedIn,
                team,
                setLoggedIn,
                addToTeam,
            }}>
                {children}
            </appContext.Provider>
        </>
    )
}


