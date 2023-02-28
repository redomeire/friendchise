import { SetStateAction } from "react"

type user = {
    email: string,
    username: string,
    profile_img: string,
    address: string,
    birth_date: string,
    gender: string,
    job: string,
    name: string,
    phone_number: string,
}

export interface User {
    user: user,
    setUser: React.Dispatch<SetStateAction<user>>
}
