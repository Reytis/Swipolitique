import { useState } from "react";
type ToggleProps = {
    children: React.ReactNode,
    current: boolean;
}

export const Toggle = ({ children, current }: ToggleProps) => {
    const [isToggled, setIsToggled] = useState(current);
    
    const toggle = () => setIsToggled(!isToggled);
    
    return <div className="toggle__button">
        {children}
        <div className={`toggle ${isToggled ? 'active' : ''}`} onClick={toggle}>
            <span className="toggle__circle"></span>
        </div>
    </div>
};
