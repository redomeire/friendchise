import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const searchFranchise = (token: string, name: string, city_id: string | number) => {
    try {
        const result = axiosInstance.get(`/company/search?name=${name}&city_id=${city_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result;
    } catch (error) {
        console.error(error)
    }
}

export { searchFranchise }
