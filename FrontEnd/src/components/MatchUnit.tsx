import { useNavigate } from "react-router-dom";
import { Match } from "../type";

type MatchUnitProps = {
    match: Match
}

/**
* This function renders a match unit with profile picture and name.
*
* @param match - The match object containing information to be displayed.
* @returns A React component displaying the match unit.
*
* @example
*/
export const MatchUnit = ({match}:MatchUnitProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/user/${match.id}`);
    }

    return <div className="match__profile" onClick={handleClick}>
        {match.new && <span className="new__match"></span>}
        <div className={match.new ? "profile__pictures new__match__profile" : "profile__pictures"}>
            <img src={match.mainImg} alt="profile pictures" />
        </div>
        <p>{match.name}</p>
    </div>;
};
