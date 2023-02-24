import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import ProfileSidebar from "@/feature/profile/components/ProfileSidebar";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();

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
                            <div className="bg-cover bg-center rounded-full w-[90px] h-[90px]" style={{ backgroundImage: `url(${'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/857f1570-d743-4d1a-9f45-7ef2b1797686_restaurant-image_1619947508391.jpg'})` }} />
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
                                    />
                                </div>
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Alamat</Typography>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan alamat"
                                        className="rounded-full w-full"
                                    />
                                </div>
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Tanggal Lahir</Typography>
                                    <Input
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
                                        type="text"
                                        placeholder="Masukkan jenis kelamin"
                                        className="rounded-full w-full"
                                    />
                                </div>
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Pekerjaan</Typography>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan pekerjaan"
                                        className="rounded-full w-full"
                                    />
                                </div>
                                <div className="mt-5">
                                    <Typography className="mb-2 text-sm font-semibold">Pekerjaan</Typography>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan pekerjaan"
                                        className="rounded-full w-full"
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
                            <Button className="mx-auto bg-primary-dark text-white text-sm">
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
