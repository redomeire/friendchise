import Typography from "@/components/typography/Typography";

interface Props {
    text: string,
    className?: string
}

const Badge = ({ text, className }: Props) => {
    return ( 
        <div className={`p-2 rounded-lg bg-[#D3F8DF] text-primary-dark w-fit ${className}`}>
            <Typography thickness="bold" className="text-[12px]">
                {text}
            </Typography>
        </div>
     );
}
 
export default Badge;
