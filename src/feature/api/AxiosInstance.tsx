import axios from "axios"

const createAxiosInstance = () => {
    const res = axios.create({ 
        baseURL: import.meta.env.VITE_APP_API_BASEURL
     })

     return res
}

export { createAxiosInstance }
