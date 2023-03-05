import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const getHistory = (token: string, status?: string) => {
    try {
        const result = axiosInstance.get(`/pembelian/all?status=${status || ''}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error);
    }
}

export { getHistory }
