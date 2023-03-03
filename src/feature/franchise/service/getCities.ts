import { createAxiosInstance } from "@/feature/api/AxiosInstance";

const axiosInstance = createAxiosInstance()

const getCities = (token: string) => {
    try {
        const result = axiosInstance.get('/city/all', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        return result;
    } catch (error) {
        console.error(error);
    }
}
 
export { getCities };
