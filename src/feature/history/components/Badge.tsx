import Typography from "@/components/typography/Typography";

interface Props {
    text: string,
    className?: string
}

const Badge = ({ text, className }: Props) => {
    return ( 
        <div className={`p-2 rounded-lg bg-[#D3F8DF] ${text.toLowerCase() === 'berlangsung' ? 'bg-[#FEF0C7] text-[#F79009]' : text.toLowerCase() === 'berhasil' ? 'bg-[#D3F8DF] text-primary-dark' : 'bg-[#FECDCA] text-[#F04438]'} w-fit ${className}`}>
            <Typography thickness="bold" className="text-[15px] capitalize">
                {text}
            </Typography>
        </div>
     );
}
 
export default Badge;
