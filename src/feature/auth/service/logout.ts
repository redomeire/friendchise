import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const logout = (token: string) => {
    try {
        const result = axiosInstance.post('/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error);
    }
}

export { logout }
