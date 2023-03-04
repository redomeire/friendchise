import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const createRoom = (token: string, company_id: string | number) => {
    try {
        const result = axiosInstance.post('/chat/chatroom/create', {
            company_id
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

export { createRoom }
