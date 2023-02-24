import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { BsCalendar3 } from "react-icons/bs";

interface Props {
    setTab: React.Dispatch<React.SetStateAction<number>>
}

const StepOne = ({ setTab }: Props) => {
    return (
        <div>
            <Typography thickness="bold" className="text-2xl">
                Data Diri
            </Typography>
            <div className="mt-10">
                <Typography className="mb-2">Nama Lengkap</Typography>
                <Input
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="border-primary rounded-full w-full"
                />
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Nomor Telepon</Typography>
                <Input
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="border-primary rounded-full w-full"
                />
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Tanggal Lahir</Typography>
                <Input
                    beginningIcon={<BsCalendar3 />}
                    type="date"
                    placeholder="Masukkan nama lengkap"
                    className="border-primary rounded-full w-full"
                />
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Pekerjaan</Typography>
                <Input
                    type="text"
                    placeholder="pekerjaan anda"
                    className="border-primary rounded-full w-full"
                />
            </div>
            <Typography thickness="bold" className="text-2xl my-8">
                Alamat
            </Typography>
            <div className="mt-10">
                <Typography className="mb-2">Alamat</Typography>
                <Input
                    type="text"
                    placeholder="alamat"
                    className="border-primary rounded-full w-full"
                />
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Provinsi</Typography>
                <Input
                    type="text"
                    placeholder="Masukkan provinsi"
                    className="border-primary rounded-full w-full"
                />
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Kota</Typography>
                <Input
                    type="text"
                    placeholder="Masukkan provinsi"
                    className="border-primary rounded-full w-full"
                />
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Lokasi Usaha</Typography>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                        />
                    </div>
                    <Typography className="ml-2">Milik sendiri</Typography>
                </div>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                        />
                    </div>
                    <Typography className="ml-2">Milik sendiri</Typography>
                </div>
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Planning Operation</Typography>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                        />
                    </div>
                    <Typography className="ml-2">Dikelola sendiri</Typography>
                </div>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                        />
                    </div>
                    <Typography className="ml-2">Dikelola orang lain</Typography>
                </div>
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Apakah anda memiliki pengalaman usaha</Typography>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                        />
                    </div>
                    <Typography className="ml-2">Iya</Typography>
                </div>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                        />
                    </div>
                    <Typography className="ml-2">Tidak</Typography>
                </div>
                <div className="mt-5">
                    <Typography className="mb-2">Lokasi Usaha</Typography>
                    <Input
                        type="text"
                        placeholder="Masukkan provinsi"
                        className="border-primary rounded-full w-full"
                    />
                </div>
            </div>
            <div className="w-full flex justify-end mt-10">
                <Button onClick={() => { setTab(prev => prev + 1) }} className="bg-primary-darker text-white min-w-[150px]">
                    Selanjutnya
                </Button>
            </div>
        </div>
    );
}

export default StepOne;
