import Typography from "@/components/typography/Typography";
import { BiCheckDouble } from "react-icons/bi";
import { motion } from "framer-motion";

interface Props {
    text: string,
    sent_by_user: boolean
}

const ChatBubble = ({ text, sent_by_user }: Props) => {
    return (
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full flex ${!sent_by_user ? 'justify-start' : 'justify-end'}`}>
            <div className={`rounded-xl ${!sent_by_user ? 'rounded-bl-none' : 'rounded-br-none'} bg-[#D3F8DF] p-2 my-2  min-w-[150px] max-w-[280px] break-words`}>
                <Typography className="text-sm">
                    {text}
                </Typography>
                <div className="w-full flex justify-end">
                    <BiCheckDouble size={20} />
                </div>
            </div>
        </motion.div>
    );
}

export default ChatBubble;
