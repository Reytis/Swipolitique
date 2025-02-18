import { useState } from "react";

interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

export const InputText = ({ placeholder, onChange }: InputProps) => {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="text__input">
      <input
        type="text"
        placeholder={placeholder}
        value={message}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export const InputNumber = ({ placeholder, onChange }: InputProps) => {
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
      onChange(e.target.value);
    };
  
    return (
      <div className="number__input">
        <input
          type="number"
          min={18}
          placeholder={placeholder}
          value={message}
          onChange={(e) => handleChange(e)}
        />
      </div>
    );
  };