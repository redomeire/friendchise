import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const saveFranchise = (token: string, company_id: number | string) => {
    try {
        const result = axiosInstance.post(`/company/save`, {
            company_id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error);
    }
}

export { saveFranchise }
