import { createContext, useState, useContext, useEffect } from 'react';

const appContext = createContext();

export const useAppContext = ()=> useContext(appContext);

export function ContextProvider ({children}) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [team, setTeam] = useState([]);
    const [heroes, setHeroes] = useState(0);
    const [villains, setVillains] = useState(0);
    const [error, setError] = useState("");
    const [bestPowerstat, setBestPowerstat] = useState([])

    const [powerstats, setPowerstats] = useState([
        {powerstat: "intelligence", value: 0},
        {powerstat: "strength", value: 0},
        {powerstat: "speed", value: 0},
        {powerstat: "durability", value: 0}, 
        {powerstat: "power", value: 0},
        {powerstat: "combat", value: 0},
    ])

    
    const handlePowerstats =  (ps, added) => {
            if (added) {
                setPowerstats([
                    {powerstat: "intelligence", value: (ps.intelligence !== "null" ? powerstats[0].value + parseInt(ps.intelligence) : powerstats[0].value) },
                    {powerstat: "strength", value: ps.strength !== "null" ? powerstats[1].value +  parseInt(ps.strength) : powerstats[1].value},
                    {powerstat: "speed", value:  ps.speed !== "null" ? powerstats[2].value + parseInt(ps.speed): powerstats[2].value},
                    {powerstat: "durability", value:  ps.durability !== "null" ? powerstats[3].value + parseInt(ps.durability): powerstats[3].value}, 
                    {powerstat: "power", value: ps.power !== "null" ? powerstats[4].value +  parseInt(ps.power) : powerstats[4].value},
                    {powerstat: "combat", value:  ps.combat !== "null" ? powerstats[5].value +   parseInt(ps.combat): powerstats[5].value },
                ]) 
                /* console.log("SE EJECUTO SETPOWERSTATS")
             */
            }else {
                setPowerstats([
                    {powerstat: "intelligence", value: ps.intelligence !== "null"  ? powerstats[0].value - parseInt(ps.intelligence) : powerstats[0].value},
                    {powerstat: "strength", value: ps.strength !== "null" ? powerstats[1].value -  parseInt(ps.strength): powerstats[1].value},
                    {powerstat: "speed", value: ps.speed !== "null" ? powerstats[2].value - parseInt(ps.speed): powerstats[2].value},
                    {powerstat: "durability", value: ps.durability !== "null" ? powerstats[3].value - parseInt(ps.durability): powerstats[3].value}, 
                    {powerstat: "power", value:  ps.power !== "null" ? powerstats[4].value -  parseInt(ps.power): powerstats[4].value},
                    {powerstat: "combat", value: ps.combat !== "null" ? powerstats[5].value -   parseInt(ps.combat): powerstats[5].value},
                ])
                    
            } 
            return powerstats
            
    } 
    useEffect(() => {
        checkBestPowerstat(powerstats)
    }, [powerstats])
    
    const checkBestPowerstat = (ps) => {
        console.log("SE EJECUTO CHECKBESTPOWERSTAT") 
        console.log(ps)
        const values = ps.map(v=> v.value)
        let maxValue = Math.max.apply(null, values) 
        const bestPs = ps.filter(it=> it.value === maxValue && it.powerstat)
        setBestPowerstat(bestPs.map(it=> it.powerstat))
        return bestPowerstat
    } 


    const addToTeam = (hero) => { 
        if (!isInTeam(hero.id)) {
        if (team.length < 6) {
            if (hero.biography.alignment === "good" ){
                if(heroes < 3) {
                    setTeam([...team, hero])
                    setHeroes(heroes + 1)
                    handlePowerstats(hero.powerstats, true)
                    console.log("HERO ADDED") 
                   /*  console.log(team) */
                    console.log(hero)
                }else {
                    setError("You already have three heroes. Delete one before adding a new one.")
                }
            }else if (villains < 3) {
                setTeam([...team, hero])
                setVillains(villains + 1)
                handlePowerstats(hero.powerstats, true)
                 console.log("VILAIN ADDED")    
                 console.log(team)
            }else {
                setError("You already have three villains. Delete one before adding a new one.")
            }
        }else {
            setError("Your team is complete!")
        }
    }else {
        setError("That hero is already on your team")
    }
     console.log(error) 
     

    }
    const isItGood = (id) => {
        const hero = team.filter(h=> h.id === id)
        if (hero[0].biography.alignment === "good") {
            return true
        } else {
            return false
        }
    }

    const removeFromTeam = (id, ps) => {
        const remove = team.filter(it=> it.id !== id)
        setTeam(remove)
        handlePowerstats(ps, false)
            if (isItGood(id)) {
                setHeroes(heroes-1)
            }else {
                setVillains(villains - 1)
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
                error,
                bestPowerstat, 
                powerstats,
                setLoggedIn,
                addToTeam,
                isItGood,
                removeFromTeam,
            }}>
                {children}
            </appContext.Provider>
        </>
    )
}


