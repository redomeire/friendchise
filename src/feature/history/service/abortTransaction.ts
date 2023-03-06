import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const abortTransaction = (token: string, id: number | string ) => {
    try {
        const result = axiosInstance.put('/pembelian/status/update', {
            id,
            status: 'gagal'
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

export { abortTransaction }
