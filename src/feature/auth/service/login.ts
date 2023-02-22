import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const login = async (email: string, password: string) => {
    try {
        const result = await axiosInstance.post('/api/v1/auth/login', {
            email,
            password
        })

        return result
    } catch (error) {
        console.error(error);
    }
}

export { login }
