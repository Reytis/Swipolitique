import './Chat.css'
import { ChatUnit } from './components/ChatUnit'
import { Match } from './type'

type ChatProps = {
    MatchList: Match[],
}

/**
* This component renders a list of chats.
*
* @param MatchList - An array of chat objects to be displayed.
* @returns A section element containing a list of chat units. If the MatchList is empty, it displays a message indicating no chat yet.
*/
export const ChatPage = ({MatchList}:ChatProps) => {
    const chatList = MatchList.filter(match => match.chat !== undefined)
    return <section className="chat">
        <article className="chat__list">
            {chatList.length > 0 ? 
                chatList.map((c) => c.chat && <ChatUnit key={c.id} img={c.mainImg} name={c.name} lastMessage={c.chat[c.chat.length - 1].message} newMSG={!c.chat[c.chat.length - 1].isRead} match={c} />) : 
                <p>No messages yet...</p>
            }
        </article>
    </section>
}