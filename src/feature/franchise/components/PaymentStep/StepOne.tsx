import { useContext } from "react"
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { BsCalendar3 } from "react-icons/bs";

import { TransactionContext } from "@/context/TransactionContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { dateFormatter } from "@/utils/dateFormatter";

interface Props {
    setTab: React.Dispatch<React.SetStateAction<number>>
}

const StepOne = ({ setTab }: Props) => {
    const { transaction, setTransaction } = useContext(TransactionContext)
    const [profile] = useLocalStorage('profile', '')

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
                    defaultValue={profile.name}
                />
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Nomor Telepon</Typography>
                <Input
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="border-primary rounded-full w-full"
                    defaultValue={profile.phone_number}
                />
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Tanggal Lahir</Typography>
                <Input
                    beginningIcon={<BsCalendar3 />}
                    type="date"
                    placeholder="Masukkan nama lengkap"
                    className="border-primary rounded-full w-full"
                    defaultValue={dateFormatter(profile.birth_date)}
                />
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Pekerjaan</Typography>
                <Input
                    type="text"
                    placeholder="pekerjaan anda"
                    className="border-primary rounded-full w-full"
                    defaultValue={profile.job}
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
                    defaultValue={profile.address}
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
                <Typography className="mb-2">Tipe Usaha</Typography>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                            name="tipe_usaha"
                            defaultValue={'milik sendiri'}
                            onChange={e => {
                                setTransaction(prev => {
                                    return { ...prev, tipe_usaha: e.target.value }
                                })
                            }}
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
                            name="tipe_usaha"
                            defaultValue={'sewa'}
                            onChange={e => {
                                setTransaction(prev => {
                                    return { ...prev, tipe_usaha: e.target.value }
                                })
                            }}
                        />
                    </div>
                    <Typography className="ml-2">Sewa</Typography>
                </div>
            </div>
            <div className="mt-5">
                <Typography className="mb-2">Planning Operation</Typography>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            name="planning_operation"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                            defaultValue={'dikelola sendiri'}
                            onChange={e => {
                                setTransaction(prev => {
                                    return { ...prev, planning_operation: e.target.value }
                                })
                            }}
                        />
                    </div>
                    <Typography className="ml-2">Dikelola sendiri</Typography>
                </div>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            name="planning_operation"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                            defaultValue={'dikelola orang lain'}
                            onChange={e => {
                                setTransaction(prev => {
                                    return { ...prev, planning_operation: e.target.value }
                                })
                            }}
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
                            name="pengalaman_usaha"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                            defaultValue={'1'}
                            onChange={e => {
                                setTransaction(prev => {
                                    return { ...prev, pengalaman_usaha: e.target.value }
                                })
                            }}
                        />
                    </div>
                    <Typography className="ml-2">Iya</Typography>
                </div>
                <div className="flex items-center justify-start ml-3">
                    <div>
                        <Input
                            type="radio"
                            name="pengalaman_usaha"
                            placeholder="Masukkan provinsi"
                            className="border-primary rounded-full"
                            defaultValue={'0'}
                            onChange={e => {
                                setTransaction(prev => {
                                    return { ...prev, pengalaman_usaha: e.target.value }
                                })
                            }}
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
                        onChange={e => {
                            setTransaction(prev => {
                                return { ...prev, lokasi_usaha: e.target.value }
                            })
                        }}
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
