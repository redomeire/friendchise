import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";

import { BiArrowBack } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { useState, useContext } from "react";
import { login } from "../service/login";
import { LoginContext } from "@/context/LoginContext";

import { AnimatePresence, motion } from "framer-motion";

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [forms, setForms] = useState({
        email: '',
        password: ''
    })

    const { setVisible, visible } = useContext(LoginContext)

    const handleLogin = async () => {
        const { email, password } = forms

        try {
            const result = await login(email, password)

            console.log(result);

            window.localStorage.setItem('token', result?.data.token)

            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AnimatePresence>
            {
                visible &&
                <div className="w-full z-40 fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center">
                    <div onClick={() => { setVisible(false) }} className=" bg-[#00000031] absolute top-0 left-0 right-0 bottom-0" />
                    <motion.form
                        initial={{ y: -200 }}
                        animate={{ y: 0 }}
                        exit={{ y: -200 }}
                        transition={{ duration: 0.3 }}
                        onSubmit={handleLogin} className="bg-white p-7 rounded-xl min-h-[300px] md:min-w-[400px] shadow-xl z-50 ">
                        <div className="flex items-center">
                            <Button>
                                <BiArrowBack
                                    onClick={() => { setVisible(prev => !prev) }}
                                    size={25}
                                    overlineThickness={20}
                                />
                            </Button>
                            <Typography
                                className="text-2xl font-semibold"
                            >
                                Masuk
                            </Typography>
                        </div>
                        <Button type="button" className="border-[1.5px] border-gray-400 p-2 w-full mt-5 ">
                            <FcGoogle size={30} />
                            <Typography className="ml-4">Masuk dengan google</Typography>
                        </Button>
                        <Typography className="mt-5 mb-4" thickness="bold">Email</Typography>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="rounded-full focus:shadow-md w-full border-gray-400"
                            onChange={e => {
                                setForms(prev => {
                                    return { ...prev, email: e.target.value }
                                })
                            }}
                        />
                        <Typography className="mt-5 mb-4" thickness="bold">Kata Sandi</Typography>
                        <Input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Password"
                            className="rounded-full focus:shadow-md w-full border-gray-400"
                            onChange={e => {
                                setForms(prev => {
                                    return { ...prev, password: e.target.value }
                                })
                            }}
                            endIcon={
                                passwordVisible ?
                                    <AiOutlineEye
                                        onClick={() => {
                                            setPasswordVisible(prev => !prev)
                                        }}
                                        size={25}
                                    />
                                    :
                                    <AiOutlineEyeInvisible
                                        onClick={() => {
                                            setPasswordVisible(prev => !prev)
                                        }}
                                        size={25}
                                    />
                            }
                        />
                        <Button
                            type="submit"
                            className="w-full bg-primary text-white mt-7"
                        >Masuk</Button>
                        <Typography className="mt-5">
                            Belum punya akun? <Link to="/register" className="font-semibold mt-5">Daftar Sekarang</Link>
                        </Typography>
                    </motion.form>
                </div>
            }
        </AnimatePresence>
    );
}

export default LoginForm;
