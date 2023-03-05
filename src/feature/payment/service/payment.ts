import { createAxiosInstance } from "@/feature/api/AxiosInstance"
// import { transaction } from "@/models/defaultValue/transaction"
import { Transaction } from "@/models/dto/transaction"

const axiosInstance = createAxiosInstance()

const payment = (token: string, data: Transaction) => {
    try {
        const result = axiosInstance.post('/pembelian/create', {
            ...data,
            status: 'berlangsung',
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

export { payment }
