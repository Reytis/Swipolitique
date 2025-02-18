import { useNavigate } from "react-router-dom";
import { Match } from "../type";

type ChatUnitProps = {
    img: string,
    name: string,
    lastMessage: string,
    newMSG?: boolean,
    match: Match
}

/**
* A functional component that represents a single chat unit in a chat list.
*
* @param img - The URL of the profile picture to be displayed.
* @param name - The name of the chat user.
* @param lastMessage - The last message exchanged with the chat user.
* @param newMSG - An optional boolean indicating whether there are new messages.
*
* @returns A React element representing a chat unit.
*/
export const ChatUnit = ({img, name, lastMessage, newMSG, match}:ChatUnitProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/chat/${match.id}`);
    }
    
    return <div className="chat__unit" onClick={handleClick}>
    <div className="chat__picture">
    <img src={img} alt="profile pictures" />
    </div>
    <div className="chat__content">
    <p className="chat__name">{name}</p>
    <p className={newMSG ? "chat__message__new" : "chat__message"}>{lastMessage}</p>
    </div>
    {newMSG && <div className="chat__new-msg"></div>  }
    </div>;
};
