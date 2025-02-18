import { useState } from "react"
import { ProfileSlide } from "./components/ProfileSlide"
import './Home.css'
import { genderState, Side, verfiState } from "./type"

const profiles = [
    {
        id: 1,
        name: "Sophie",
        mainImg: "PictureSlide.png",
        imgs: ["PictureSlide2.png", "PictureSlide3.png"],
        age: 28,
        gender: genderState.female,
        side: Side.right,
        verification: verfiState.verified
    },
    {
        id: 2,
        name: "Alex",
        mainImg: "Jack_Sparrow.jpg",
        imgs: ["Snapchat-1679208253.jpg", "Snapchat-766486486.jpg"],
        age: 32,
        gender: genderState.male,
        side: Side.left,
        verification: verfiState.verified
    },
    {
        id: 3,
        name: "Taylor",
        mainImg: "Capture décran 2024-07-25 165030.png",
        imgs: ["IMG_20240630_103355_328.jpg", "intro-1654979525.jpg"],
        age: 25,
        gender: genderState.nonBinary,
        side: Side.center,
        verification: verfiState.noVerif
    },
    {
        id: 4,
        name: "Emma",
        mainImg: "Designer.jpeg",
        imgs: ["Designer (1).jpeg", "Designer (2).jpeg"],
        age: 27,
        gender: genderState.female,
        side: Side.left,
        verification: verfiState.waitingFor
    },
    {
        id: 5,
        name: "Jordan",
        mainImg: "IMG_20240915_153836.jpg",
        imgs: ["IMG_0418.jpeg"],
        age: 29,
        gender: genderState.male,
        side: Side.right,
        verification: verfiState.verified
    }
];

export const HomePage = () => {
    const [currentProfile, setCurrentProfile] = useState(0)
    const [isProfile, setIsProfile] = useState(true)

    /*
    * Handles the drag event and updates the current profile or sets the isProfile state to false.
    */
    const handleDrag = () => {

        if (currentProfile + 1 < profiles.length) {
            setCurrentProfile(currentProfile + 1);
        } else {
            setIsProfile(false);
            setCurrentProfile(0);
        }
    };

    const { mainImg, imgs, name, age, gender, verification } = profiles[currentProfile];
    return <section className="home__page">
    {isProfile ?
        <ProfileSlide 
            imgs={[mainImg, ...imgs]} 
            name={name} 
            age={age} 
            gender={gender} 
            verif={verification} 
            onDrag={handleDrag} 
        /> :
        <p>
        There is no more profiles to swipe.
        </p> 
    } 
    </section>
}
