import { createAxiosInstance } from "@/feature/api/AxiosInstance"
import { Register } from "@/models/dto/auth"


const axiosInstance = createAxiosInstance()

const register = async ({ email, password, name, phone, repeat_password, username }: Register) => {
    try {
        const result = await axiosInstance.post('auth/register', {
            email,
            password,
            name,
            phone,
            repeat_password,
            username
        })

        return result
    } catch (error) {
        console.error(error);
    }
}

export { register }
