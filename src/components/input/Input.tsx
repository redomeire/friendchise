import { ChangeEventHandler, ReactNode } from "react";

interface Props {
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>,
    type: 'text' | 'email' | 'password' | 'checkbox' | 'date' | 'radio',
    beginningIcon?: ReactNode,
    endIcon?: ReactNode,
    className?: string,
    name?: string,
    disabled?: boolean,
    required?: boolean,
    defaultValue?: any
}

const Input = ({ 
    placeholder, 
    onChange, 
    type, 
    beginningIcon, 
    endIcon, 
    className,
    name,
    disabled,
    required,
    defaultValue
}: Props) => {
    return (
        <div className="relative flex items-center w-full">
            <div className="absolute left-3">
                {beginningIcon}
            </div>
            <input 
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                name={name}
                disabled={disabled}
                required={required}
                defaultValue={defaultValue}
                className={`rounded-full disabled:cursor-not-allowed ${type !== 'radio' ? 'focus:shadow-md' : '' } outline-none border-[1.5px] p-3 text-sm transition duration-200 ${beginningIcon !== undefined ? 'pl-10' : ''} ${endIcon !== undefined ? 'pr-10' : ''} ${className}`}
            />
            <div className="absolute right-3">
                {endIcon}
            </div>
        </div>
    );
}

export default Input;
