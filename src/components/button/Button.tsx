import { MouseEventHandler } from "react";
import Snake from "@/assets/snake.gif";
import ButtonLoader from "../loader/ButtonLoader";

interface Props {
    children: React.ReactNode,
    className?: string,
    outlined?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: 'button' | 'submit',
    loading?: boolean
}

const Button = ({ 
    children, 
    outlined, 
    onClick, 
    className,
    type,
    loading
}: Props) => {
    return (
        <button
        type={type}
            onClick={onClick}
            className={`rounded-full flex items-center justify-center p-2 hover:opacity-70 transition duration-200
            ${outlined ? 'bg-transparent border-[1.5px]' : ''}
            ${className}
        `}
        >{loading ? <ButtonLoader/> : children}</button>
    );
}

export default Button;
