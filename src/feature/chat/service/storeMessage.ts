import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const storeMessage = (token: string, chat: { chat_id: string | number, text_message: string, sent_by_user: boolean }) => {
    try {
        const result = axiosInstance.post('/chat/chatroom/store', {
            ...chat
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error);
    }
}

export { storeMessage }
