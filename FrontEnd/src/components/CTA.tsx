import { ReactNode } from "react";


type CTAProps = {
    children: ReactNode;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    main?: boolean;
    danger?: boolean;
    onClick?: () => void;
}

/**
* A reusable button component with customizable content and styling.
*
* @param children - The main content of the button.
* @param iconLeft - An optional icon to display on the left side of the button.
* @param iconRight - An optional icon to display on the right side of the button.
* @param main - An optional flag to indicate if the button should have a main style.
* @returns A button element with the specified content and styling.
*/
export const CTA = ({children, iconLeft, iconRight, main, danger, onClick}:CTAProps) => {

    const handleStyle = () => {
        if (danger) {
            return "danger";
        }
        return "";
    }

    return (
        <button onClick={onClick} className={main ? `main ${handleStyle()}` : `${handleStyle()}`}>
        {iconLeft}
        <div>{children}</div>
        {iconRight}
        </button>
    );
};
