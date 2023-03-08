import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";

import { AiOutlineSearch } from "react-icons/ai";
import Button from "@/components/button/Button";
import { useNavigate } from "react-router-dom";
import React from "react";

import Hero from "@/assets/home/hero.png";

import Testimony from "@/components/pages/home/Testimony";
import AppLayout from "@/components/partials/layout/AppLayout";
import "@/components/styles/swiper.css";

import Home1 from "@/assets/home-1.png"
import Home2 from "@/assets/home-2.png"
import Home3 from "@/assets/home-3.png"

const Home = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('');

    return (
        <AppLayout style={{ paddingTop: '80px' }}>
            <div className="md:px-20 px-8 p-5 min-h-[80vh] flex items-center lg:flex-row flex-col-reverse justify-between">
                <div className="md:w-[45%]">
                    <Typography className="capitalize leading-[50px] md:text-[36px] text-[32px] md:font-[700] font-[600]">
                        mulai bisnis anda dengan cepat dan mudah
                    </Typography>
                    <p className="text-md mt-5">
                        Memulai bisnis dengan manajemen yang sudah teruji. Didukung penuh oleh partner profesional dengan modal terjangkau
                    </p>
                    <div className="mt-10 w-full flex items-center md:flex-row flex-col">
                        <Input
                            beginningIcon={<AiOutlineSearch size={20} />}
                            type={'text'}
                            className="w-full"
                            placeholder="cari waralaba"
                            onChange={e => { setValue(e.target.value) }}
                        />
                        <Button
                            onClick={() => { navigate(`/waralaba?name=${value}&city_id=`) }}
                            className="md:ml-5 bg-primary md:min-w-[150px] font-semibold text-white md:mt-0 mt-5 min-w-full">
                            <Typography className="p-1">
                                Cari
                            </Typography>
                        </Button>
                    </div>
                </div>
                <div className="lg:w-[40%] w-[70%] lg:mb-0 mb-10">
                    <img src={Hero} className="w-full" />
                </div>
            </div>
            <main className="p-10 pb-28 md:px-32 px-10 bg-primary mt-20 w-full text-white rounded-tl-3xl rounded-br-3xl">
                <Typography className="text-center md:text-3xl text-2xl font-semibold capitalize md:w-[50%] mx-auto leading-10">portal kemitraan waralaba terbaik untuk anda</Typography>
                <div className="flex items-stretch flex-wrap justify-center mt-10">
                    <div className="cursor-pointer m-3 rounded-xl p-5 min-w-[300px] lg:w-[300px] sm:w-full w-[300px] min-h-[300px] flex flex-col items-center hover:shadow-xl transition duration-200 bg-[#3EC87E]">
                        <img src={Home1} className="h-[150px] md:mb-0 mb-10 bg-cover bg-center rounded-xl" />
                        <Typography className="text-[15px] capitalize font-semibold my-4 text-center">
                            Berbagai pilihan waralaba terbaik di seluruh indonesia
                        </Typography>
                        <Typography className="text-sm text-center">
                            Temukan berbagai waralaba potensial yang telah melalui proses kurasi secara ketat
                        </Typography>
                    </div>
                    <div className="cursor-pointer m-3 rounded-xl p-5 hover:shadow-xl transition duration-200 min-w-[300px] lg:w-[300px] sm:w-full w-[300px] min-h-[300px] flex flex-col items-center bg-[#3EC87E]">
                        <img src={Home2} className="h-[150px] md:mb-0 mb-10 bg-cover bg-center rounded-xl" />
                        <Typography className="text-[15px] capitalize font-semibold my-4 text-center">
                            Proses Klaim Waralaba yang Mudah dan Cepat
                        </Typography>
                        <Typography className="text-sm text-center">
                            Sesuaikan modal dan dapatkan aset bisnis waralaba Anda
                        </Typography>
                    </div>
                    <div className="cursor-pointer m-3 rounded-xl p-5 hover:shadow-xl transition duration-200 min-w-[300px] lg:w-[300px] sm:w-full w-[300px] min-h-[300px] flex flex-col items-center bg-[#3EC87E]">
                        <img src={Home3} className="h-[150px] md:mb-0 mb-10 bg-cover bg-center rounded-xl" />
                        <Typography className="text-[15px] capitalize font-semibold my-4 text-center">
                            Diskusi Langsung kepada Perusahaan yang Anda Minati
                        </Typography>
                        <Typography className="text-sm text-center">
                            Temukan berbagai waralaba potensial yang telah melalui proses kurasi secara ketat
                        </Typography>
                    </div>
                </div>
            </main>
            <Testimony />
        </AppLayout>
    );
}

export default Home;
