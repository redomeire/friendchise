import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const getSavedFranchise = (token: string) => {
    try {
        const result = axiosInstance.get(`/company/saved/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error)
    }
}

export { getSavedFranchise }
