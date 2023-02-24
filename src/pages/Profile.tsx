import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()

    return (
        <AppLayout>
            <Button onClick={() => { navigate(-1) }} className="md:px-32 px-20 flex items-center text-primary">
                <BiArrowBack />
                <Typography className="ml-3">
                    Kembali
                </Typography>
            </Button>
            <div className="md:w-[800px] bg-white shadow-lg p-10 mx-auto min-h-[400px] mt-5">
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
                    <div className="bg-cover bg-center rounded-full w-[130px] h-[130px]" style={{ backgroundImage: `url(${'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/857f1570-d743-4d1a-9f45-7ef2b1797686_restaurant-image_1619947508391.jpg'})` }} />
                    <Typography thickness="bold" className="text-xl mt-5">
                        Redomeire
                    </Typography>
                    <Typography>
                        Bio
                    </Typography>
                </div>
                <div className="flex items-center justify-between">
                    <div className="md:w-[47%]">
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Nama Lengkap</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan nama lengkap"
                                className="rounded-full w-full"
                            />
                        </div>
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Alamat</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan alamat"
                                className="rounded-full w-full"
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
                            />
                        </div>
                    </div>
                    <div className="md:w-[47%]">
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Jenis Kelamin</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan jenis kelamin"
                                className="rounded-full w-full"
                            />
                        </div>
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Pekerjaan</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan pekerjaan"
                                className="rounded-full w-full"
                            />
                        </div>
                        <div className="mt-5">
                            <Typography className="mb-2 text-sm font-semibold">Pekerjaan</Typography>
                            <Input
                                disabled
                                type="text"
                                placeholder="Masukkan pekerjaan"
                                className="rounded-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Profile;
