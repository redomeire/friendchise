import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

const RegisterForm = () => {
    const [passwordVisible1, setPasswordVisible1] = useState(false)
    const [passwordVisible2, setPasswordVisible2] = useState(false)

    return (
        <div className="md:w-[40%] w-full">
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
                            type="password"
                            placeholder="Masukkan kembali password"
                            className="mt-5 w-full rounded-full"
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
                    <Button className="w-full bg-primary text-white font-semibold p-3">Daftar</Button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
