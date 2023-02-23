import React, { createContext, SetStateAction, useState } from "react";

type Ctx = {
    visible: boolean,
    setVisible: React.Dispatch<SetStateAction<boolean>>,
}

export const LoginContext = createContext<Ctx>({
    visible: false,
    setVisible: () => {},
});

const LoginCtx = ({ children }: { children: React.ReactNode }) => {
    const [visible, setVisible] = useState(false)
    
    return(
        <LoginContext.Provider value={{ visible, setVisible }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginCtx
