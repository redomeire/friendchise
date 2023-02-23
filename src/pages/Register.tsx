import Input from "@/components/input/Input";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import { BiChevronLeft } from "react-icons/bi";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "@/components/button/Button";
import { BsArrowLeft } from "react-icons/bs";

// image
import Image from "@/assets/register.png";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    return (
        <AppLayout>
            <div className="flex items-start justify-between px-20">
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
                <div className="md:w-[45%] sticky top-48">
                    <img src={Image} className="w-full"/>
                </div>
            </div>
        </AppLayout>
    );
}

export default Register;
