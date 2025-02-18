import { useState } from "react"
import { genderState, verfiState } from "../type"
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { handleVerifState, handleGender } from "../functions";

type ProfileSlideProps = {
    imgs: string[],
    name: string,
    age: number,
    gender: genderState,
    verif: verfiState,
    onDrag: () => void
}

/**
* A component that displays a profile slide with an image carousel, swipe gestures, and profile information.
*
* @param imgs - An array of image URLs representing the profile's pictures.
* @param name - The profile's name.
* @param age - The profile's age.
* @param gender - The profile's gender, represented by a custom enum `genderState`.
* @param verif - The profile's verification status, represented by a custom enum `verfiState`.
* @param onDrag - A callback function that is triggered when a profile is swiped.
*
* @returns A React component that renders the profile slide.
*/
export const ProfileSlide = ({imgs, name, age, gender, verif, onDrag}: ProfileSlideProps) => {
    const [currentImg, setImg] = useState(0)
    
    const [{ x, y, rot, scale }, api] = useSpring(() => ({
        x: 0,
        y: 0,
        rot: 0,
        scale: 1,
        config: { tension: 300, friction: 30 }, // adjust speed of animation
    }));
    
    const handleSwipe = (direction: string) => {
        console.log(`Swiped: ${direction}`);
        onDrag(); // Appelle onDrag pour changer de profil
        setImg(0); // reset carousel img for next profile
    };
    
    // Config useDrag to handle swipe gestures
    const bind = useDrag(
        ({ active, movement: [mx, my], direction: [dx, dy], velocity }) => {
            const speed = Math.sqrt(velocity[0] ** 2 + velocity[1] ** 2);
            const trigger = speed > 0.2; // Handle swipe sensibility
            const verticalTolerance = 0.5;
            
            // Verify if swipe is more horizontal than vertical
            const isHorizontalSwipe = Math.abs(mx) > Math.abs(my) * verticalTolerance;
            
            if (!active && trigger) {
                let xOffset = 0;
                let yOffset = 0;
                let rotOffset = 0;
                
                if (my > 0 && !isHorizontalSwipe) {
                    // down swipe are not accepted
                    api.start({
                        x: 0,
                        y: 0,
                        rot: 0,
                        scale: 1,
                        immediate: false,
                    });
                } else if (dx > 0.5) {
                    xOffset = window.innerWidth * 1.5; // Swipe right
                    rotOffset = 15;
                    handleSwipe("Right")
                } else if (dx < -0.5) {
                    xOffset = -window.innerWidth * 1.5; // Swipe left
                    rotOffset = -15;
                    handleSwipe("Left")
                } else if (dy < -0.5 && !isHorizontalSwipe) {
                    yOffset = -window.innerHeight * 1.5; // Swipe up
                    handleSwipe("Up")
                }
                
                // Animate swipe
                api.start({
                    x: xOffset,
                    y: yOffset,
                    rot: rotOffset,
                    scale: 1,
                    immediate: true, // instant animation
                    onRest: () => {
                        api.start({ x: 0, y: 0, rot: 0, scale: 1, immediate: true }); // reset position
                    },
                });
            } else {
                // Animation while swiping
                api.start({
                    x: active ? mx : 0,
                    y: active ? my : 0,
                    rot: active ? mx / 100 : 0,
                    scale: active ? 1.1 : 1,
                });
            }
        },
        {
            filterTaps: true,
            preventDefault: true,
        }
    );
    
    /*
    * Handles the change of the current image to the next one in the profile's image carousel.
    */
    const handleChangeImageRight = () => {
        if (currentImg + 1 < imgs.length) {
            setImg(currentImg + 1)
        }
    }
    
    /**
    * Handles the change of the current image to the previous one in the profile's image carousel.
    */
    const handleChangeImageLeft = () => {
        if (currentImg > 0) {
            setImg(currentImg - 1)
        }
    }
    
    return <article className="profile__slide" >
        <animated.div className='img__carousel' style={{ x, y, rotate: rot, scale }}
        {...bind()} >
            <div className="left" onClick={handleChangeImageLeft}></div>
            <div className="right" onClick={handleChangeImageRight}></div>
            <img src={imgs[currentImg]} alt={`pictures profile number: ${currentImg}`} />
            <div className="indicator">
                {imgs.map((_, index) => (
                    <span key={index} className={`segment ${index === currentImg ? 'active' : ''}`}></span>
                ))}
            </div>
        </animated.div>
        <div className="profile__slide__infos">
            <div className="profile__slide__infos__header">
                <p className="name">{name}</p>
                {handleVerifState(verif)}
            </div>
            <div className="profile__slide__infos__datas">
                <p className="datas age">{age} ans</p>
                <p className="datas gender">{handleGender(gender)}</p>
            </div>
        </div>
    </article>
}

