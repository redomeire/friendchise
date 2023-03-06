import Button from "@/components/button/Button";
import ErrorText from "@/components/error/ErrorText";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { register } from "../service/register";

const RegisterForm = () => {
    const [passwordVisible1, setPasswordVisible1] = useState(false)
    const [passwordVisible2, setPasswordVisible2] = useState(false)
    const [forms, setForms] = useState({
        name: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        repeat_password: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>()
    const navigate = useNavigate();

    const handleRegister = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const result = await register(forms)

            if(result?.response?.data) {
                setError(result?.response?.data)
                return
            }

            setTimeout(() => {
               navigate('/') 
            }, 1000);
        } catch (error) {
            setIsLoading(false)
            console.error(error)
        }
    }

    return (
        <div className="md:w-[40%] w-full">
            {
                error && <ErrorText>{error.message}</ErrorText>
            }
            <form onSubmit={handleRegister}>
                <div className="my-5">
                    <Typography className="text-[15px]" thickness="bold">
                        Nama Lengkap
                    </Typography>
                    <Input
                        type="text"
                        placeholder="Masukkan nama lengkap sesuai identitas"
                        className="mt-5 w-full rounded-full"
                        onChange={(e) => {
                            setForms(prev => {
                                return { ...prev, name: e.target.value }
                            })
                        }}
                        required
                    />
                </div>
                <div className="my-5">
                    <Typography className="text-[15px]" thickness="bold">
                        Username
                    </Typography>
                    <Input
                        type="text"
                        placeholder="Masukkan nama lengkap sesuai identitas"
                        className="mt-5 w-full rounded-full"
                        onChange={(e) => {
                            setForms(prev => {
                                return { ...prev, username: e.target.value }
                            })
                        }}
                        required
                    />
                </div>
                <div className="my-5">
                    <Typography className="text-[15px]" thickness="bold">
                        Nomor Handphone
                    </Typography>
                    <Input
                        type="text"
                        placeholder="Isi dengan nomor handphone aktif"
                        className="mt-5 w-full rounded-full"
                        onChange={(e) => {
                            setForms(prev => {
                                return { ...prev, phone: e.target.value }
                            })
                        }}
                        required
                    />
                </div>
                <div className="my-5">
                    <Typography className="text-[15px]" thickness="bold">
                        Email
                    </Typography>
                    <Input
                        type="email"
                        placeholder="Masukkan email"
                        className="mt-5 w-full rounded-full"
                        onChange={(e) => {
                            setForms(prev => {
                                return { ...prev, email: e.target.value }
                            })
                        }}
                        required
                    />
                </div>
                <div className="my-5">
                    <Typography className="text-[15px]" thickness="bold">
                        Password
                    </Typography>
                    <div className="w-">
                        <Input
                            type={passwordVisible1 ? 'text' : 'password'}
                            placeholder="Minimal 8 karakter"
                            className="mt-5 w-full rounded-full"
                            onChange={(e) => {
                                setForms(prev => {
                                    return { ...prev, password: e.target.value }
                                })
                            }}
                            required
                            endIcon={
                                passwordVisible1 ?
                                    <AiOutlineEye
                                        className="mt-4"
                                        onClick={() => {
                                            setPasswordVisible1(prev => !prev)
                                        }}
                                        size={25}
                                    />
                                    :
                                    <AiOutlineEyeInvisible
                                        className="mt-4"
                                        onClick={() => {
                                            setPasswordVisible1(prev => !prev)
                                        }}
                                        size={25}
                                    />
                            }
                        />
                    </div>
                </div>
                <div className="my-5">
                    <Typography className="text-[15px]" thickness="bold">
                        Ulangi Password
                    </Typography>
                    <div className="w-">
                        <Input
                            type={passwordVisible2 ? 'text' : 'password'}
                            placeholder="Masukkan kembali password"
                            className="mt-5 w-full rounded-full"
                            onChange={(e) => {
                                setForms(prev => {
                                    return { ...prev, repeat_password: e.target.value }
                                })
                            }}
                            required
                            endIcon={
                                passwordVisible2 ?
                                    <AiOutlineEye
                                        className="mt-4"
                                        onClick={() => {
                                            setPasswordVisible2(prev => !prev)
                                        }}
                                        size={25}
                                    />
                                    :
                                    <AiOutlineEyeInvisible
                                        className="mt-4"
                                        onClick={() => {
                                            setPasswordVisible2(prev => !prev)
                                        }}
                                        size={25}
                                    />
                            }
                        />
                    </div>
                </div>
                <div className="mt-10 w-full">
                    <Button
                    loading={isLoading}
                    className="w-full bg-primary text-white font-semibold p-3">Daftar</Button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
