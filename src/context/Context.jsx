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
/* 
    useEffect(() => {
        setTimeout(() => {
           
            console.log(powerstats)  
            console.log(bestPowerstat) //va atrasado 1
        }, 2000);
        
    }, [powerstats]) */
    
    const handlePowerstats = (ps, added) => {
        if (added) {
            setPowerstats([
                {powerstat: "intelligence", value: powerstats[0].value + parseInt(ps.intelligence)},
                {powerstat: "strength", value:  powerstats[1].value + parseInt(ps.strength)},
                {powerstat: "speed", value:  powerstats[2].value + parseInt(ps.speed)},
                {powerstat: "durability", value:  powerstats[3].value + parseInt(ps.durability)}, 
                {powerstat: "power", value:  powerstats[4].value + parseInt(ps.power)},
                {powerstat: "combat", value:  powerstats[5].value + parseInt(ps.combat)},
            ])
        }else {
            setPowerstats([
                {powerstat: "intelligence", value: powerstats[0].value - parseInt(ps.intelligence)},
                {powerstat: "strength", value:  powerstats[1].value - parseInt(ps.strength)},
                {powerstat: "speed", value:  powerstats[2].value - parseInt(ps.speed)},
                {powerstat: "durability", value:  powerstats[3].value - parseInt(ps.durability)}, 
                {powerstat: "power", value:  powerstats[4].value - parseInt(ps.power)},
                {powerstat: "combat", value:  powerstats[5].value - parseInt(ps.combat)},
            ])
        }
        setTimeout(() => {
            checkBestPowerstat()      
            console.log(bestPowerstat)
        }, 2000);
        
    }
    const checkBestPowerstat = () => {
        const values = powerstats.map(v=> v.value)
        let maxValue = Math.max.apply(null, values) 
        const bestPs = powerstats.filter(it=> it.value === maxValue && it.powerstat)
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
                }else {
                    setError("You already have three heroes. Delete one before adding a new one.")
                }
            }else if (villains < 3) {
                setTeam([...team, hero])
                setVillains(villains + 1)
                handlePowerstats(hero.powerstats, true)
            }else {
                setError("You already have three villains. Delete one before adding a new one.")
            }
        }else {
            setError("Your team is complete!")
        }
    }else {
        setError("That hero is already on your team")
    }
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


