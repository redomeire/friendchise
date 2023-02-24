import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { BsArrowLeft } from "react-icons/bs";
import ChatBubble from "./ChatBuble";

import scrollbar from "@/components/styles/scrollbar.module.css"
import Button from "@/components/button/Button";
import { FaTelegramPlane } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ChatDrawer = ({ visible, setVisible }: Props) => {
    return (
        <AnimatePresence>
            {
                visible &&
                <>
                    <div onClick={() => { setVisible(false) }} className=" bg-[#00000031] fixed top-0 left-0 right-0 bottom-0 z-40" />
                    <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ x: 200, opacity: 0 }}
                    className="p-4 min-h-screen fixed top-0 md:w-[400px] z-50 bg-white right-0">
                        <div className="relative h-[95vh]">
                            <div className="flex items-center">
                                <BsArrowLeft onClick={() => { setVisible(false) }} size={25} />
                                <div className="flex items-center ml-3">
                                    <div className="bg-cover bg-center w-[45px] h-[45px] rounded-full" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'})` }} />
                                    <div className="ml-5">
                                        <Typography thickness="bold" className="text-[17px]">Ropi</Typography>
                                        <Typography className="text-[15px]">Online</Typography>
                                    </div>
                                </div>
                            </div>
                            <hr className="border border-gray-200 w-full my-3" />
                            <div className="bg-[#FEF0C7] p-2 text-sm mb-5">
                                Friendchise menjaga keamanan transaksi Anda. Gunakan pesan dan pembayaran di portal Friendchise. <a href="/" className="text-blue-600 hover:underline">Baca Selengkapnya</a>
                            </div>
                            <div className={`relative h-[58vh] overflow-y-auto scrollbar ${scrollbar.scrollbar_hide}`}>
                                <ChatBubble
                                    sent_by_franchise={false}
                                    text="To eres el mejor portero del mundo"
                                />
                                <ChatBubble
                                    sent_by_franchise
                                    text="Artinya apa bang messi Artinya apa bang messi"
                                />

                            </div>
                            <div className="absolute bottom-0 left-0 right-0 flex items-center">
                                <Input
                                    type="text"
                                    className="w-full border border-gray-400"
                                    placeholder="chat here..."
                                />
                                <Button className="bg-primary text-white ml-2">
                                    <Typography className="text-sm p-1">
                                        <FaTelegramPlane size={20} />
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            }
        </AnimatePresence>
    );
}

export default ChatDrawer;
