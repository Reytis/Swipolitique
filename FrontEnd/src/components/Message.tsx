import { ChatContent } from "../type";

type MessageProps = {
    chatMessage: ChatContent,
    avatar: string,
}

export const Message = ({ chatMessage, avatar }:MessageProps) => {
    return <div className="conversation__cell">
        <div className={chatMessage.isMine ? "message message__mine" : "message"}>
            <div className="message__picture">
                <img src={`../${avatar}`} alt="User avatar" />
            </div>
            <div className="message__bulle">
                <p>{chatMessage.message}</p>
            </div>
        </div>
        <div className="message__datas">
            <p className={chatMessage.isMine ? "message__date mine" : "message__date"}>{chatMessage.createdAt.toDateString()}</p>
        </div>    
    </div>
};