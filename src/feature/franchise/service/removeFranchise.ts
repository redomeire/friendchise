import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const removeFranchise = (token: string, id: string | number) => {
    try {
        const result = axiosInstance.delete(`/company/remove`, {
            data: {
                id
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error);
    }
}

export { removeFranchise }
