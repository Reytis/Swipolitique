import { useNavigate, useParams } from "react-router-dom"
import { pages } from "../App"
import { Bulle } from "./icons/bulle"
import { Left } from "./icons/chevron"
import { Home } from "./icons/home"
import { Profile } from "./icons/profil"
import { Settings } from "./icons/settings"
import { Star } from "./icons/star"

type HeaderProps = {
    currentPage: string,
}
/**
* A functional component that renders the header of the application based on the current page.//+
*
* @param currentPage - The current page of the application. It should match one of the values in the `pages` array.//+
* @returns A React element representing the header with the appropriate icon and title based on the current page.//+
*/
export const Header = ({currentPage}:HeaderProps) => {
    const navigate = useNavigate();
    const { userId } = useParams<{ userId: string }>();

    const handleClick = () => {
        navigate(`/user/${userId}`);
    }
    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleHeader = () => {
        switch (currentPage) {
            case pages[0]:
                return <h1>
                    <Profile />
                    Profil
                </h1>

            case pages[1]:
                return <h1>
                    <Home />
                    Acceuil   
                </h1>

            case pages[2]:
                return <h1>
                    <Star />
                    Match
                </h1>

            case pages[3]:
                return <h1>
                    <Bulle />
                    Chat
                </h1>

            case pages[4]:
                return <h1>
                    <Settings />
                    Paramètres
                </h1>

            default:
                return <h1 className="dynamic__header"><p className="back" onClick={handleGoBack}><Left /></p> <p className="dynamic__header__profile" onClick={handleClick}>{currentPage}</p> <p className="dynamic__header__profile" onClick={handleClick}><Profile /></p></h1>
        }
    }

    return <header>
        {handleHeader()}
    </header>
}
