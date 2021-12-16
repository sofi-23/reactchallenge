import { useAppContext } from "../../context/Context"

export default function Team () {
    const { team } = useAppContext()
    return (
        <>
        {team.length > 0 && 
        team.map(heroe=> <span>{heroe.name}</span>)}
        </>
    )
}