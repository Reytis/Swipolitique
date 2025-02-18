import { useState } from 'react';
import { genderState, Side } from '../type';
import { handleGender } from '../functions';

type SwitchSelectorProps = {
    current: genderState[];
}
export const SwitchSelector = ({ current }: SwitchSelectorProps) => {
    const [activeOptions, setActiveOptions] = useState<string[]>(current);
    const options = [genderState.female, genderState.male, genderState.nonBinary];

    const handleOptionClick = (option: string) => {
        const newActiveOptions = [...activeOptions];
        const optionIndex = newActiveOptions.indexOf(option);
        
        if (optionIndex === -1) {
            newActiveOptions.push(option);
        } else {
            newActiveOptions.splice(optionIndex, 1);
        }
        
        setActiveOptions(newActiveOptions);
    };
    
    return (
        <div className='switch__selector'>
        <p>Intéressé par</p>
        <div className="options">
        {options.map((option) => (
            <div
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`option ${activeOptions.find(o => o === option) ? 'active' : ''}`}
            >
            {handleGender(option)}
            </div>
        ))}
        </div>
        </div>
    );
};


type SwitchSideSelectorProps = {
    current: Side;
    handleSideChange: (side: Side) => void;
}
export const SwitchSideSelector = ({current, handleSideChange}: SwitchSideSelectorProps) => {
    const [activeOptions, setActiveOptions] = useState<string>(current);
    const options = [Side.left, Side.center, Side.right];
    
    const handleOptionClick = (option: Side) => {      
        setActiveOptions(option);
        handleSideChange(option)
    };
    
    return (
        <div className='switch__selector__side'>
        <div className="options">
        {options.map((option) => (
            <div
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`option ${activeOptions === option ? 'active' : ''}`}
            >
            {option}
            </div>
        ))}
        </div>
        </div>
    );
};

