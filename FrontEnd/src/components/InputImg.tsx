import { useState } from "react";
import { Add } from "./icons/add";

type InputProps = {
  placeholder: string;
  onChange: (imgURL: string) => void;
}

export const InputImg = ({ placeholder, onChange }: InputProps) => {
  const [img, setImg] = useState(placeholder);

  // Fonction pour gérer la sélection de l'image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]; // Sélectionne le premier fichier
      const imageUrl = URL.createObjectURL(file); // Crée une URL temporaire pour l'image
      setImg(imageUrl); // Met à jour l'état avec l'URL de l'image
      onChange(imageUrl); // Appelle la fonction onChange avec l'URL de l'image
    }
  };

  return (
    <div className="file__input">
      <img src={img} alt="Selected" />
      <label>
        <span>
          <Add />
        </span>
        <input
          type="file"
          onChange={handleImageChange} // Appelle la fonction quand un fichier est sélectionné
        />
      </label>
    </div>
  );
};
