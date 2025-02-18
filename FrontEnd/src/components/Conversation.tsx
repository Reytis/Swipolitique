import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { matchList } from "../App";
import { Match, ChatContent } from "../type"; // Import du type ChatContent
import { Message } from "./Message";
import { Header } from "./Header";
import { ChatInput } from "./ChatInput";

export const Conversation = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<Match | null>(null);
  const [chat, setChat] = useState<ChatContent[]>([]); // Gérer l'état du chat séparément

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userIndex = Number(userId) - 1;
    if (userIndex >= 0 && userIndex < matchList.length) {
      setUser(matchList[userIndex]);
      setChat(matchList[userIndex].chat || []); // Initialise le chat
    } else {
      setUser(null);
    }
  }, [userId]);

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollToBottom();
  }, [chat]);

  if (!user) {
    return <div>404 User not found</div>;
  }

  const { name, mainImg } = user;
  const meAvatar = "favicon.jpg";
  const userAvatar = mainImg;

  // Fonction pour ajouter un message au chat
  const handleSendMessage = (message: string) => {
    const newMessage: ChatContent = {
      user: "Me",
      userID: undefined,
      message,
      createdAt: new Date(),
      isRead: true,
      isMine: true,
    };

    setChat((prevChat) => [...prevChat, newMessage]); // Ajoute le nouveau message
  };

  return (
    <section className="conversations">
      <Header currentPage={name} />
      <div className="messages">
        {chat.map((message, index) => (
          <Message
            key={index}
            chatMessage={message}
            avatar={message.isMine ? meAvatar : userAvatar}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} /> {/* Passe la fonction en props */}
    </section>
  );
};
