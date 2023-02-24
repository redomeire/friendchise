import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Button from "@/components/button/Button";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import { BiPackage, BiStore } from "react-icons/bi";
import { BsBookmark, BsShareFill } from "react-icons/bs";

import { MdLocationOn } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";

import { RiShoppingBasketLine } from "react-icons/ri";
import AboutCompany from "@/feature/franchise/components/AboutCompany";

const DetailWaralaba = () => {
    const links = [
        {
            name: 'Waralaba',
            url: '/waralaba'
        },
        {
            name: 'Lokasi',
            url: '/lokasi'
        },
        {
            name: 'Jawa Tengah',
            url: '/waralaba'
        },
        {
            name: 'Outlet / Restoran',
            url: '/waralaba'
        },
    ]

    return (
        <AppLayout>
            <BreadCrumbs
                links={links}
            />
            <main className="px-20 mt-20">
                <div className="flex items-stretch justify-between">
                    <div className="md:w-[70%] bg-cover bg-center min-h-[400px] rounded-xl" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'})` }} />
                    <div className="md:w-[30%] flex flex-col justify-between md:ml-5">
                        <div className="bg-cover bg-center w-full min-h-[200px] rounded-xl mb-5" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'})` }} />
                        <div className="bg-cover bg-center w-full min-h-[200px] rounded-xl" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'})` }} />
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <Typography className="text-3xl my-3" thickness="bold">
                            Ropi: Roti Bikin Hepi
                        </Typography>
                        <Typography className="text-xl" thickness="bold">
                            PT Juara Roti Indonesia
                        </Typography>
                        <Typography className="mt-3"><span className="font-semibold">Gerai</span> 1000 | <MdLocationOn className="inline" size={20} /> Sukabumi, Jawa Barat</Typography>
                        <Typography thickness="bold" variant="heading3" className="mt-7">
                            Rp 8.976.500
                        </Typography>
                        <Typography thickness="bold" className="my-7">
                            Fasilitas
                        </Typography>
                        <div className="flex flex-wrap">
                            <div>
                                <Button className="my-4 min-w-[100px]">
                                    <BiStore size={25} />
                                    <Typography className="ml-3">
                                        Booth
                                    </Typography>
                                </Button>
                                <Button className="my-4 min-w-[100px]">
                                    <BiPackage size={25} />
                                    <Typography className="ml-3">
                                        Peralatan Kerja
                                    </Typography>
                                </Button>
                            </div>
                            <div className="ml-5">
                                <Button className="my-4 min-w-[100px]">
                                    <RiShoppingBasketLine size={25} />
                                    <Typography className="ml-3">
                                        Bahan Baku
                                    </Typography>
                                </Button>
                                <Button className="my-4 min-w-[100px]">
                                    <CiCoffeeCup size={25} />
                                    <Typography className="ml-3">
                                        500 cup
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                        <AboutCompany/>
                    </div>
                    <div className="md:min-w-[330px] mt-5">
                        <Button className="border-[1.5px] border-primary w-full text-primary">Hubungi Perusahaan</Button>
                        <Button className="border-[1.5px] border-primary bg-primary w-full text-white mt-3">Daftar Waralaba</Button>
                        <div className="flex items-center justify-between mt-3">
                            <Button className="w-[47%] border-[1.5px] border-gray-500 text-gray-500 flex items-center">
                                <BsBookmark />
                                <Typography className="ml-2">Simpan</Typography>
                            </Button>
                            <Button className="w-[47%] border-[1.5px] border-gray-500 text-gray-500 flex items-center">
                                <BsShareFill />
                                <Typography className="ml-2">Bagikan</Typography>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </AppLayout>
    );
}

export default DetailWaralaba;
