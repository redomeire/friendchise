import Typography from "@/components/typography/Typography";
import { BiCheckDouble } from "react-icons/bi";

interface Props {
    text: string,
    sent_by_franchise: boolean
}

const ChatBubble = ({ text, sent_by_franchise }: Props) => {
    return (
        <div className={`w-full flex ${sent_by_franchise ? 'justify-start' : 'justify-end'}`}>
            <div className={`rounded-xl ${sent_by_franchise ? 'rounded-bl-none' : 'rounded-br-none'} bg-[#D3F8DF] p-2 my-2  min-w-[150px] max-w-[280px] break-words`}>
                <Typography className="text-sm">
                    {text}
                </Typography>
                <div className="w-full flex justify-end">
                    <BiCheckDouble size={20} />
                </div>
            </div>
        </div>
    );
}

export default ChatBubble;
