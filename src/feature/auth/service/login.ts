import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const login = async (email: string, password: string) => {
    try {
        const result = await axiosInstance.post('/auth/login', {
            email,
            password
        })
        .then((result) => {
            return result
        }).catch((err) => {
            return err 
        });        

        return result
    } catch (error) {
        console.error(error);
    }
}

export { login }
