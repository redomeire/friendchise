import { user } from "@/models/defaultValue/user";
import { User } from "@/models/dto/user";
import { createContext, useState } from "react"

const defaultValue = {
    user: user,
    setUser: () => { }
}

export const ProfileContext = createContext<User>(defaultValue)

const ProfileCtx = ({ children }: { children: React.ReactNode }) => {
    const token = window.localStorage.getItem('profile');
    const [user, setUser] = useState(token !== 'undefined' ? JSON.parse(token!) : defaultValue.user)
    
    return (
        <ProfileContext.Provider value={{ user, setUser }}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileCtx;
