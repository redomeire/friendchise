import { useContext, useState, useEffect } from "react"
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import ProfileSidebar from "@/feature/profile/components/ProfileSidebar";
import { BiArrowBack } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "@/context/ProfileContext";
import { editProfile } from "@/feature/profile/service/editProfile";
import useLocalStorage from "@/hooks/useLocalStorage";

import { user as pengguna } from "@/models/defaultValue/user";

const EditProfile = () => {
    const navigate = useNavigate();
    const { user } = useContext(ProfileContext);
    const [token] = useLocalStorage('token', '');
    const [forms, setForms] = useState(pengguna)

    const handleUpdate = async () => {
        try {
            const result = await editProfile(token.token, forms)

            console.log(result);

            window.localStorage.setItem('profile', JSON.stringify(result?.data.data))

            setTimeout(() => {
                window.location.reload()
            }, 1000);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const val = window.localStorage.getItem('profile')

        if (val !== null)
            setForms(JSON.parse(val!))
    }, [])
    
    return (
        <AppLayout>
            <div className="md:px-32 px-20">
                <Button onClick={() => { navigate('/profile') }} className="flex items-center text-primary mb-5">
                    <BiArrowBack />
                    <Typography className="ml-3">
                        Kembali ke Profil
                    </Typography>
                </Button>
                <div className="flex items-start w-full justify-between">
                    <ProfileSidebar />
                    <div className="md:w-[70%] bg-white shadow-lg p-10 min-h-[400px] mt-5 ml-5">
                        <div className="profile-pic flex items-center mb-5 ">
                            {
                                user.profile_img ?
                                    <div className="bg-cover bg-center rounded-full w-[90px] h-[90px]" style={{ backgroundImage: `url(${'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/857f1570-d743-4d1a-9f45-7ef2b1797686_restaurant-image_1619947508391.jpg'})` }} />
                                    :
                                    <Button className="bg-primary w-[90px] h-[90px] md:text-2xl text-white">
                                        {
                                            user.username &&
                                            <Typography className="font-semibold">{user.username[0]?.toUpperCase()}</Typography>
                                        }
                                    </Button>
                            }
                            <Button className="border-[2px] border-primary-dark text-primary-dark font-semibold hover:bg-primary-dark hover:text-white ml-7">
                                <Typography className="text-sm">
                                    Unggah foto baru
                                </Typography>
                            </Button>
                            <Typography className="ml-7 text-sm text-primary-dark font-semibold hover:border-b-primary-dark border-b-[2px] border-b-transparent cursor-pointer">
                                Hapus Foto
                            </Typography>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="md:w-[47%]">
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Nama Lengkap</Typography>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan nama lengkap"
                                        className="rounded-full w-full"
                                        defaultValue={user.name}
                                        onChange={(e) => {
                                            setForms(prev => {
                                                return { ...prev, name: e.target.value }
                                            })
                                        }}
                                    />
                                </div>
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Alamat</Typography>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan alamat"
                                        className="rounded-full w-full"
                                        defaultValue={user.address}
                                        onChange={(e) => {
                                            setForms(prev => {
                                                return { ...prev, address: e.target.value }
                                            })
                                        }}
                                    />
                                </div>
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Tanggal Lahir</Typography>
                                    <Input
                                        beginningIcon={<BsCalendar3 />}
                                        type="date"
                                        placeholder="Masukkan tanggal lahir"
                                        className="rounded-full w-full"
                                        defaultValue={user.birth_date}
                                        onChange={(e) => {
                                            setForms(prev => {
                                                return { ...prev, birth_date: e.target.value }
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="md:w-[47%]">
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Jenis Kelamin</Typography>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan jenis kelamin"
                                        className="rounded-full w-full"
                                        defaultValue={user.gender}
                                        onChange={(e) => {
                                            setForms(prev => {
                                                return { ...prev, gender: e.target.value }
                                            })
                                        }}
                                    />
                                </div>
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Pekerjaan</Typography>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan pekerjaan"
                                        className="rounded-full w-full"
                                        defaultValue={user.job}
                                        onChange={(e) => {
                                            setForms(prev => {
                                                return { ...prev, job: e.target.value }
                                            })
                                        }}
                                    />
                                </div>
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Pekerjaan</Typography>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan pekerjaan"
                                        className="rounded-full w-full"
                                        defaultValue={user.job}
                                        onChange={(e) => {
                                            setForms(prev => {
                                                return { ...prev, job: e.target.value }
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Bio</Typography>
                            <Input
                                type="text"
                                placeholder="Masukkan bio"
                                className="rounded-full w-full"
                            />
                        </div>
                        <div className="w-full items-center justify-center mt-10">
                            <Button onClick={handleUpdate} className="mx-auto bg-primary-dark text-white text-sm">
                                <Typography className="p-1">
                                    Simpan perubahan
                                </Typography>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default EditProfile;
