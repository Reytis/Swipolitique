import { handleGender, handleVerifState } from "../functions";
import { CTA } from "./CTA";
import { Block } from "./icons/block";
import { Bulle } from "./icons/bulle";
import { Warning } from "./icons/warning";
import { SwipePrecision } from "./SwipePrecisions";
import '../Profile.css'
import { useNavigate, useParams } from "react-router-dom";
import { matchList } from "../App";
import { Match } from "../type";
import { useState, useEffect } from "react";
import { Header } from "./Header";



export const OtherUserProfile = () => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<Match | null>(null);
  
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/chat/${user?.id}`);
    }

    useEffect(() => {
      const userIndex = Number(userId) - 1;
      if (userIndex >= 0 && userIndex < matchList.length) {
        setUser(matchList[userIndex]);
      } else {
        setUser(null);
      }
    }, [userId]); // Dépendance sur userId

    if (!user) {
        return <div>404 User not found</div>; // Add a fallback component when user is not found
    }

    const { name, mainImg, imgs, age, gender, side, verification, swipePrecision } = user;
    
    return <section className="profile">
        <Header currentPage={name} />
    <article>
    <div className="main__img">
    <img src={`../${mainImg}`} alt="profile img 1" />
    </div>
    <div className="datas">
    <div className="datas__primary">
    <div className="datas__primary__name">
    <p className="name">{name}</p>
    {handleVerifState(verification)}
    </div>
    <p className="side">{side}</p>
    <div className="datas__secondary">
    <div className="gender">{handleGender(gender)}</div>
    <p className="age">{age} ans</p>
    </div>
    </div>
    
    <CTA danger iconRight={<Block />}>Bloquer</CTA>
    <CTA danger iconRight={<Warning />}>Signaler</CTA>
    </div>
    </article>
    <div className="secondary__imgs">
    <img src={imgs[0] ? `../${imgs[0]}` : '../favicon.png'} alt="profile img 2" />
    <img src={imgs[1] ? `../${imgs[1]}` : '../favicon.png'} alt="profile img 3" />
    <img src={imgs[2] ? `../${imgs[2]}` : '../favicon.png'} alt="profile img 4" />
    </div>
    <CTA onClick={handleClick} iconRight={<Bulle />}>Messages</CTA>
    <SwipePrecision title={`Précision des swipe de ${name}`} total={swipePrecision.total} accuracy={swipePrecision.accuracy} />
    </section>
};