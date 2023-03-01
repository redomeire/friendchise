import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance();

const updateProfilePage = (file: File, token: string) => {

    try {
        const result = axiosInstance.put('user/profile/image/update', {
            file
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
            }
        })

        return result
    } catch (error) {
        console.error(error)
    }
}

export { updateProfilePage }
