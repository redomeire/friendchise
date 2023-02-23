import React from "react";

interface Props {
    variant?: 'display1' | 'display2' | 'heading1' | 'heading2' | 'heading3' | 'paragraph1' | 'paragraph2',
    thickness?: 'normal' | 'bold' | 'extra-bold',
    className?: string,
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLParagraphElement>
}

const Typography = ({ 
    variant, 
    thickness, 
    className, 
    children,
    onClick
}: Props) => {
    return (
        <p
        onClick={onClick}
            className={`
                ${  variant === 'display1' ? 'text-[80px]' : 
                    variant === 'display2' ? 'text-[70px]' :
                    variant === 'heading1' ? 'text-[60px]' :
                    variant === 'heading2' ? 'text-[50px]' :
                    variant === 'heading3' ? 'text-[40px]' :
                    variant === 'paragraph1' ? 'text-[18px]' :
                    variant === 'paragraph2' ? 'text-[16px]' :
                ''}

                ${
                    thickness === 'normal' ? 'font-[400]' : 
                    thickness === 'bold' ? 'font-[600]' : 
                    thickness === 'extra-bold' ? 'font-[700]' : 
                    ''
                }

                ${ className }
            `}
        >{children}</p>
    );
}

export default Typography;
