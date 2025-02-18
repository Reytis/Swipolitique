
import { pages } from "../App"
import { Bulle } from "./icons/bulle"
import { Home } from "./icons/home"
import { Profile } from "./icons/profil"
import { Settings } from "./icons/settings"
import { Star } from "./icons/star"


type NavProps = {
    currentPage: string,
    onClick: (str: string) => void,
    chatNotif?: number,
    matchNotif?: number
}

/**
 * A navigation component that renders a list of icons and labels.
 * It highlights the current page and displays notification badges for chat and match.
 *
 * @param currentPage - The current page name.
 * @param onClick - A callback function that is called when a list item is clicked.
 * @param chatNotif - An optional number representing the chat notification count.
 * @param matchNotif - An optional number representing the match notification count.
 *
 * @returns A React component for the navigation.
 */
export const Nav = ({currentPage, onClick, chatNotif, matchNotif}:NavProps) => {

    return <nav>
        <ul>
            <li onClick={() => onClick(pages[0])} className={currentPage === pages[0] ? 'active' : ''}>
                <Profile />
                Profil
            </li>
            <li onClick={() => onClick(pages[1])} className={currentPage === pages[1] ? 'active' : ''}>
                <Home />
                Acceuil   
            </li>
            <li onClick={() => onClick(pages[2])} className={currentPage === pages[2] ? 'active' : ''}>
                <Star />
                Match
                {matchNotif && <span className="notif">{matchNotif}</span>}
            </li>
            <li onClick={() => onClick(pages[3])} className={currentPage === pages[3] ? 'active' : ''}>
                <Bulle />
                Chat
                {chatNotif && <span className="notif">{chatNotif}</span>}
            </li>
            <li onClick={() => onClick(pages[4])} className={currentPage === pages[4] ? 'active' : ''}>
                <Settings />
                Paramètres
            </li>
        </ul>
    </nav>
}