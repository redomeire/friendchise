import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { BsArrowLeft } from "react-icons/bs";
import ChatBubble from "./ChatBuble";

import scrollbar from "@/components/styles/scrollbar.module.css"
import Button from "@/components/button/Button";
import { FaTelegramPlane } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

import { Socket } from "socket.io-client"
import { useEffect, useState, useRef } from "react";
import { storeMessage } from "@/feature/chat/service/storeMessage";
import useLocalStorage from "@/hooks/useLocalStorage";
import { getMessages } from "@/feature/chat/service/getMessages";
import { Message } from "@/models/dto/message";

interface Props {
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    socket: Socket,
    chatData: { id: string | number },
    setChatData: React.Dispatch<React.SetStateAction<{ id: number }>>
}

const ChatDrawer = ({ visible, setVisible, socket, chatData, setChatData }: Props) => {
    const [messages, setMessages] = useState<Message>([])
    const [value, setValue] = useState('')
    const [token] = useLocalStorage('token', '')
    const lastMessageRef = useRef<any>(null);

    useEffect(() => {
        socket.on(`client:room:${chatData.id}`, (data) => {
            setChatData(data)
        })

        socket.on(`client:chat:${chatData.id}`, (data) => {
            setMessages((prev) => [...prev, data])
        })
    }, [socket, chatData.id])

    useEffect(() => {
        const getAllMessages = async () => {
            try {
                const result = await getMessages(token.token, chatData.id)

                console.log(result);
                
                setMessages(result?.data.data)
            } catch (error) {
                console.error(error);
            }
        }

        getAllMessages()
    }, [chatData.id])


    const message = async () => {
        const chat = {
            chat_id: chatData.id,
            text_message: value,
            sent_by_user: true
        }

        try {
            const result = await storeMessage(token.token, chat)

            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (lastMessageRef.current !== null)
            lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight
    }, [messages])

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
                            <div className={`relative h-[58vh] overflow-y-auto scrollbar ${scrollbar.scrollbar_hide}`} ref={lastMessageRef}>
                                {
                                    messages.map((message, index) => {
                                        return (
                                            <ChatBubble
                                                key={index}
                                                sent_by_user={message.sent_by_user}
                                                text={message.text_message}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 flex items-center">
                                <Input
                                    onChange={e => { setValue(e.target.value) }}
                                    type="text"
                                    className="w-full border border-gray-400"
                                    placeholder="chat here..."
                                />
                                <Button onClick={message} className="bg-primary text-white ml-2">
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
