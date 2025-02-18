import { useState } from "react";
import { Img } from "./icons/img";
import { Send } from "./icons/send";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  // Fonction pour envoyer le message
  const handleSendMessage = () => {
    if (message.trim() === "") return; // N'envoie pas de message vide
    onSendMessage(message); // Appelle la fonction passée en props
    setMessage(""); // Réinitialise l'input après envoi
  };

  // Gestion de la touche "Entrée"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat__input">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown} // Appelle handleSendMessage si "Entrée" est pressée
      />
      <button className="chatInput__btn">
        <Img />
      </button>
      <button className="chatInput__btn" onClick={handleSendMessage}>
        <Send />
      </button>
    </div>
  );
};
