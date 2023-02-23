import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const register = async () => {
    try {
        const result = await axiosInstance.post('/api/v1/auth/register')

        return result
    } catch (error) {
        console.error(error);
    }
}

export { register }
