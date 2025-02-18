import { useState } from "react";
import { CTA } from "./components/CTA";
import { Edit } from "./components/icons/edit.tsx";
import { Valid } from "./components/icons/validation.tsx";
import { SwipePrecision } from "./components/SwipePrecisions.tsx";
import { handleGender } from "./functions.tsx";
import './Profile.css'
import { Side, USER } from "./type.ts";
import { InputNumber, InputText } from "./components/InputText.tsx";
import { SwitchSideSelector } from "./components/SwitchSelector.tsx";
import { InputImg } from "./components/InputImg.tsx";

type ProfilePageProps = {
  user: USER;
};

export const ProfilePage = ({ user }: ProfilePageProps) => {
  const [editing, setEditing] = useState(false);

  // État local pour stocker les valeurs modifiables pendant l'édition
  const [profileData, setProfileData] = useState({
    name: user.name,
    age: user.age,
    gender: user.gender,
    side: user.side,
    mainImg: user.mainImg,
    imgs: user.imgs,
  });

  const { name, age, gender, side, mainImg, imgs } = profileData;
  const { swipePrecision, userSwipePrecision } = user;

  // Fonction pour gérer les modifications des inputs texte et numérique
  const handleInputChange = (field: string, value: any) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Fonction pour gérer la validation des modifications
  const handleValidation = () => {
    setEditing(false);
    // Ici, tu peux appeler une fonction pour sauvegarder les modifications, par exemple via une API
  };

  return (
    <section className="profile">
      <article>
        <div className="main__img">
          {editing ? (
            <InputImg
              placeholder={mainImg}
              onChange={(newImg) => handleInputChange("mainImg", newImg)}
            />
          ) : (
            <img src={mainImg} alt="profile img 1" />
          )}
        </div>
        <div className="datas">
          <div className="datas__primary">
            <div className="name">
              {editing ? (
                <InputText
                  placeholder={name}
                  onChange={(newName) => handleInputChange("name", newName)}
                />
              ) : (
                name
              )}
            </div>
            <p className="side">
              {editing ? (
                <SwitchSideSelector
                  current={side}
                  handleSideChange={(newSide: Side) => handleInputChange("side", newSide)}
                />
              ) : (
                side
              )}
            </p>
            <div className="datas__secondary">
              <div className="gender">{handleGender(gender)}</div>
              <p className="age">
                {editing ? (
                  <InputNumber
                    placeholder={age.toString()}
                    onChange={(newAge) => handleInputChange("age", Number(newAge))}
                  />
                ) : (
                  age + " ans"
                )}
              </p>
            </div>
          </div>

          {!editing ? (
            <CTA iconRight={<Edit />} onClick={() => setEditing(true)}>
              Modifier
            </CTA>
          ) : (
            <CTA iconRight={<Valid />} onClick={handleValidation}>
              Valider
            </CTA>
          )}
        </div>
      </article>

      {editing ? (
        <div className="secondary__imgs_file">
          <InputImg
            placeholder={imgs[0] ? imgs[0] : "favicon.png"}
            // Fix for the error on line 113
            onChange={(newImg: string) => handleInputChange("imgs", [newImg, imgs[1], imgs[2]])}
          />
          <InputImg
            placeholder={imgs[1] ? imgs[1] : "favicon.png"}
            onChange={(newImg) => handleInputChange("imgs", [imgs[0], newImg, imgs[2]])}
          />
          <InputImg
            placeholder={imgs[2] ? imgs[2] : "favicon.png"}
            onChange={(newImg) => handleInputChange("imgs", [imgs[0], imgs[1], newImg])}
          />
        </div>
      ) : (
        <div className="secondary__imgs">
          <img src={imgs[0] ? imgs[0] : "favicon.png"} alt="profile img 2" />
          <img src={imgs[1] ? imgs[1] : "favicon.png"} alt="profile img 3" />
          <img src={imgs[2] ? imgs[2] : "favicon.png"} alt="profile img 4" />
        </div>
      )}

      <CTA main iconRight={<Valid />}>Devenir Vérifier</CTA>
      <SwipePrecision
        title={"Précision de tes swipes"}
        total={swipePrecision.total}
        accuracy={swipePrecision.accuracy}
      />
      <SwipePrecision
        title={"Précision des utilisateurs à ton sujet"}
        total={userSwipePrecision.total}
        accuracy={userSwipePrecision.accuracy}
      />
    </section>
  );
};
