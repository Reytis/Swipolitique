import { Match } from "./type"
import { MatchUnit } from "./components/MatchUnit" 
import "./Match.css"

type MatchProps = {
    matchList: Match[] | []
}

/**
* This component renders a list of matches.
*
* @param matchList - An array of match objects to be displayed.
* @returns A section element containing a list of match units. If the matchList is empty, it displays a message indicating no matches yet.
*/
export const MatchPage = ({matchList}:MatchProps) => {
    return <section className="match">
        <article className="match__list">
            {matchList.length > 0 ? 
                matchList.map((match) => <MatchUnit match={match} key={match.id} />) : 
                <p>No matches yet...</p>
            }
        </article>
    </section>
}
