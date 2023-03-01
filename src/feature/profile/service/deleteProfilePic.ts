import { createAxiosInstance } from "@/feature/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const deleteProfilePic = (token: string) => {
    try {
        const result = axiosInstance.delete('/user/profile/image/delete', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        return result
    } catch (error) {
        console.error(error)
    }
}

export { deleteProfilePic }
