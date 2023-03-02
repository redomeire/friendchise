import { createAxiosInstance } from "@/feature/api/AxiosInstance"
import { user } from "@/models/defaultValue/user";

const axiosInstance = createAxiosInstance()

const editProfile = (token: string, data: typeof user) => {
    try {
        const result = axiosInstance.put('/user/profile/update', {
            address: data.address,
            phone_number: data.phone_number,
            birth_date: data.birth_date,
            job: data.job,
            bio: data.bio,
            gender: data.gender,
            profile_img: data.profile_img
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error)
    }
}

export { editProfile }
