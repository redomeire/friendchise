import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

const RegisterForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    return (
        <div className="md:w-[40%]">
            <div className="flex items-center mb-10">
                <BsArrowLeft size={23} />
                <Typography className="ml-5 text-2xl" thickness="bold">
                    Daftar
                </Typography>
            </div>
            <form>
                <div className="my-5">
                    <Typography className="text-[15px]" thickness="bold">
                        Nama Lengkap
                    </Typography>
                    <Input
                        type="text"
                        placeholder="Masukkan nama lengkap sesuai identitas"
                        className="mt-5 w-full rounded-full"
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
                    />
                </div>
                <div className="my-5">
                    <Typography className="text-[15px]" thickness="bold">
                        Password
                    </Typography>
                    <div className="w-">
                        <Input
                            type="password"
                            placeholder="Minimal 8 karakter"
                            className="mt-5 w-full rounded-full"
                            endIcon={
                                passwordVisible ?
                                    <AiOutlineEye
                                        className="mt-4"
                                        onClick={() => {
                                            setPasswordVisible(prev => !prev)
                                        }}
                                        size={25}
                                    />
                                    :
                                    <AiOutlineEyeInvisible
                                        className="mt-4"
                                        onClick={() => {
                                            setPasswordVisible(prev => !prev)
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
                            type="password"
                            placeholder="Masukkan kembali password"
                            className="mt-5 w-full rounded-full"
                            endIcon={
                                passwordVisible ?
                                    <AiOutlineEye
                                        className="mt-4"
                                        onClick={() => {
                                            setPasswordVisible(prev => !prev)
                                        }}
                                        size={25}
                                    />
                                    :
                                    <AiOutlineEyeInvisible
                                        className="mt-4"
                                        onClick={() => {
                                            setPasswordVisible(prev => !prev)
                                        }}
                                        size={25}
                                    />
                            }
                        />
                    </div>
                </div>
                <div className="mt-10 w-full">
                    <Button className="w-full bg-primary text-white font-semibold p-3">Daftar</Button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
