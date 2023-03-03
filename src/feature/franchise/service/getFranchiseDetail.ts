import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const getFranchiseDetail = (token: string, id: string | number) => {
    try {
        const result = axiosInstance.get(`/company/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error)
    }
}

export { getFranchiseDetail }
