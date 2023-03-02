import { useContext } from "react";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "@/context/ProfileContext";
import { dateFormatter } from "@/utils/dateFormatter";

const Profile = () => {
    const navigate = useNavigate()
    const { user } = useContext(ProfileContext);

    return (
        <AppLayout>
            <Button onClick={() => { navigate(-1) }} className="md:px-32 px-10 flex items-center text-primary">
                <BiArrowBack size={15} />
                <Typography className="ml-3 text-[15px]">
                    Kembali
                </Typography>
            </Button>
            <div className="md:w-[800px] bg-white md:shadow-lg p-10 mx-auto min-h-[400px] mt-5">
                <div className="w-full flex justify-end">
                    <Button
                        onClick={() => { navigate('/profile/edit') }}
                    >
                        <AiTwotoneSetting
                            size={30}
                            className="text-gray-500"
                        />
                    </Button>
                </div>
                <div className="profile-pic flex flex-col justify-center items-center mb-5 ">
                    {
                        user.profile_img ?
                            <div className="bg-cover bg-center rounded-full w-[130px] h-[130px]" style={{ backgroundImage: `url(${user.profile_img})` }} />
                            :
                            <Button className="bg-primary w-[100px] h-[100px] md:text-4xl text-white">
                                <Typography className="font-semibold">{user.username[0].toUpperCase()}</Typography>
                            </Button>
                    }
                    <Typography thickness="bold" className="text-xl mt-5">
                        {user.name}
                    </Typography>
                    <Typography>
                        Bio
                    </Typography>
                </div>
                <div className="flex items-center md:flex-row flex-col justify-between">
                    <div className="md:w-[47%] w-full">
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Nama Lengkap</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan nama lengkap"
                                className="rounded-full w-full"
                                defaultValue={user.name}
                            />
                        </div>
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Alamat</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan alamat"
                                className="rounded-full w-full"
                                defaultValue={user.address}
                            />
                        </div>
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Tanggal Lahir</Typography>
                            <Input
                                disabled
                                beginningIcon={<BsCalendar3 />}
                                type="date"
                                placeholder="Masukkan tanggal lahir"
                                className="rounded-full w-full"
                                defaultValue={dateFormatter(user.birth_date)}
                            />
                        </div>
                    </div>
                    <div className="md:w-[47%] w-full">
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Jenis Kelamin</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan jenis kelamin"
                                className="rounded-full w-full"
                                defaultValue={user.gender}
                            />
                        </div>
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Pekerjaan</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan pekerjaan"
                                className="rounded-full w-full"
                                defaultValue={user.job}
                            />
                        </div>
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Phone number</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan pekerjaan"
                                className="rounded-full w-full"
                                defaultValue={user.job}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Profile;
