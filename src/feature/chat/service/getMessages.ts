import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const getMessages = (token: string, chat_id: number | string) => {
    try {
        const result = axiosInstance.get(`/chat/chatroom/getAll/${chat_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error);
    }
}

export { getMessages }
