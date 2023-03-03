import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

type Data = {
    chat_id: number | string,
    text_message: string,
    sent_by_user: boolean
}

const storeMessage = (data: Data, token: string) => {
    const { chat_id, text_message, sent_by_user } = data;

    try {
        const result = axiosInstance.post('/chat/chatroom/store', {
            chat_id,
            text_message,
            sent_by_user
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error)   
    }
}

export { storeMessage }
