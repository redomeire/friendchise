import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import scrollbar from "@/components/styles/scrollbar.module.css";

// assets for parallax
import Layer1 from "@/assets/parallax/layer 1.png";
import Layer2 from "@/assets/parallax/layer 2.png";
import Layer3 from "@/assets/parallax/layer 3.png";
import Layer4 from "@/assets/parallax/layer 4.png";
import Layer5 from "@/assets/parallax/layer 5.png";
import Layer6 from "@/assets/parallax/layer 6.png";

import Home1 from "@/assets/home-1.png"
import Home2 from "@/assets/home-2.png"
import Home3 from "@/assets/home-3.png"
import Footer from "@/components/partials/footer/Footer";

import Testimony from "@/components/pages/home/Testimony";
import Input from "@/components/input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "@/components/button/Button";
import { useNavigate } from "react-router-dom";

const HomeParallax = () => {
    const parallax = useRef<IParallax>(null)
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    return (
        <div className="lg:block hidden">
            <AppLayout>
                <Parallax
                    onScroll={() => { console.log('scrolled') }} ref={parallax} pages={1} style={{ top: '40px', left: '0', scrollbarWidth: 'none' }} className={scrollbar.scrollbar_hide} innerStyle={{ overflow: 'unset', scrollbarWidth: 'none' }}>
                    <div className="overflow-auto">
                        <ParallaxLayer offset={0} speed={3} className="z-50" style={{ top: '70px' }}>
                            <div className="px-20 md:w-[60%] absolute z-50">
                                <div className="relative top-[70px] bg-gray-50 p-7 rounded-2xl bg-opacity-60 backdrop-blur-sm">
                                    <Typography className="font-semibold capitalize leading-[50px] mb-7" variant="heading3">Mulai bisnis anda dengan cepat dan mudah</Typography>
                                    <Typography>
                                        Memulai bisnis dengan manajemen yang sudah teruji. Didukung penuh oleh partner profesional dengan modal terjangkau
                                    </Typography>
                                    <div className="flex items-center mt-10 lg:flex-row flex-col">
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
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer></ParallaxLayer>
                        <ParallaxLayer offset={0} speed={3} className="z-40 md:block hidden" style={{ top: '100px' }}>
                            <img src={Layer1} className="w-full"></img>
                            <div className="w-full min-h-[500px]">
                                <main className="p-10 pb-28 md:px-32 px-10 bg-primary w-full text-white rounded-b-[50px]">
                                    <Typography className="text-center md:text-3xl text-2xl font-semibold capitalize md:w-[50%] mx-auto leading-10">portal kemitraan waralaba terbaik untuk anda</Typography>
                                    <div className="flex items-stretch flex-wrap justify-center mt-10">
                                        <motion.div
                                            initial={{ y: 100 }}
                                            whileHover={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px', transition: { duration: 0.3 } }}
                                            whileInView={{ y: 0, transition: { duration: 0.6, ease: 'easeInOut', } }}
                                            className="cursor-pointer m-3 rounded-xl p-5 min-w-[300px] lg:w-[300px] sm:w-full w-[300px] min-h-[300px] flex flex-col items-center bg-[#3EC87E]">
                                            <img src={Home1} className="h-[150px] md:mb-0 mb-10 bg-cover bg-center rounded-xl" />
                                            <Typography className="text-[15px] capitalize font-semibold my-4 text-center">
                                                Berbagai pilihan waralaba terbaik di seluruh indonesia
                                            </Typography>
                                            <Typography className="text-sm text-center">
                                                Temukan berbagai waralaba potensial yang telah melalui proses kurasi secara ketat
                                            </Typography>
                                        </motion.div>
                                        <motion.div
                                            initial={{ y: 100 }}
                                            whileHover={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px', transition: { duration: 0.3 } }}
                                            whileInView={{ y: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
                                            className="cursor-pointer m-3 rounded-xl p-5 min-w-[300px] lg:w-[300px] sm:w-full w-[300px] min-h-[300px] flex flex-col items-center bg-[#3EC87E]">
                                            <img src={Home2} className="h-[150px] md:mb-0 mb-10 bg-cover bg-center rounded-xl" />
                                            <Typography className="text-[15px] capitalize font-semibold my-4 text-center">
                                                Proses Klaim Waralaba yang Mudah dan Cepat
                                            </Typography>
                                            <Typography className="text-sm text-center">
                                                Sesuaikan modal dan dapatkan aset bisnis waralaba Anda
                                            </Typography>
                                        </motion.div>
                                        <motion.div
                                            initial={{ y: 100 }}
                                            whileHover={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px', transition: { duration: 0.3 } }}
                                            whileInView={{ y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
                                            className="cursor-pointer m-3 rounded-xl p-5 min-w-[300px] lg:w-[300px] sm:w-full w-[300px] min-h-[300px] flex flex-col items-center bg-[#3EC87E]">
                                            <img src={Home3} className="h-[150px] md:mb-0 mb-10 bg-cover bg-center rounded-xl" />
                                            <Typography className="text-[15px] capitalize font-semibold my-4 text-center">
                                                Diskusi Langsung kepada Perusahaan yang Anda Minati
                                            </Typography>
                                            <Typography className="text-sm text-center">
                                                Temukan berbagai waralaba potensial yang telah melalui proses kurasi secara ketat
                                            </Typography>
                                        </motion.div>
                                    </div>
                                </main>
                                <Testimony />
                                <Footer />
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={2.7} className="z-30 opacity-80" style={{ top: '180px' }}>
                            <img src={Layer2} className="w-full"></img>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={2.3} className="z-20" style={{ top: '250px' }}>
                            <img src={Layer3} className="w-full"></img>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={2} className="z-10" style={{ top: '230px' }}>
                            <img src={Layer4} className="w-full"></img>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={1.7} className="z-0" style={{ top: '130px' }}>
                            <img src={Layer5} className="w-full"></img>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={1.3} className="z-0" style={{ top: '30px' }}>
                            <img src={Layer6} className="w-full"></img>
                        </ParallaxLayer>
                    </div>
                </Parallax>
                {/* <div className="w-full bg-primary h-[500px]">

            </div> */}
            </AppLayout>
        </div>
    );
}

export default HomeParallax;
