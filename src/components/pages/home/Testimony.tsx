import React from "react"

import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import 'swiper/css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "@/components/styles/swiper.css";
// import "swiper/css/navigation";

const Testimony = () => {
    const sliderRef = React.useRef<any>();

    const handlePrev = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className="md:px-40 px-10">
            <div className="flex items-center justify-between mt-20">
                <Typography className="font-semibold text-3xl">
                    kata mereka
                </Typography>

            </div>
            <div className="mt-10 flex justify-between items-start">
                <Swiper
                    ref={sliderRef}
                    modules={[Navigation]}
                    breakpoints={{
                        700: {
                            slidesPerView: 1
                        },
                        1000: {
                            slidesPerView: 2
                        }
                    }}
                    spaceBetween={70}
                    className="p-10 mySwiper"
                >
                    <SwiperSlide>
                        <div className="rounded-xl p-7 md:w-[450px] shadow-lg w-fit !h-full">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Tuti Setiawati</Typography>
                                    <Typography className="text-gray-400 text-sm">Ibu Rumah Tangga</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Saya sangat senang bergabung dengan Friendchise. Sistem kerja sama yang diberikan sangat transparan dan mudah dipahami. Saya bisa mengembangkan bisnis saya sendiri. Waralaba yang ditawarkan juga memiliki kualitas yang baik dan diminati oleh pelanggan.
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="rounded-xl p-7 md:w-[450px] shadow-lg w-fit !h-full">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Gilang Khrismahaq</Typography>
                                    <Typography className="text-gray-400 text-sm">Mahasiswa</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Saya dan teman-teman saya memutuskan untuk menjalin kerja sama waralaba dengan perusahaan franchise di Indonesia bersama Friendchise karena mereka memberikan fasilitas yang lengkap untuk memulai bisnis kami. Kami juga mendapatkan waralaba yang terbukti laris di pasaran dan dukungan pemasaran yang efektif.
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="rounded-xl p-7 md:w-[450px] shadow-lg w-fit">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Redomeire</Typography>
                                    <Typography className="text-gray-400 text-sm">Mahasiswa</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Saya merasa sangat terbantu dengan adanya kerja sama waralaba bersama Friendchise. Saya bisa memulai bisnis sendiri tanpa harus memikirkan produk dan branding karena semuanya sudah disiapkan oleh perusahaan franchisenya. Dukungan dari tim Friendchise juga sangat membantu dalam mengembangkan bisnis.
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="rounded-xl shadow-lg p-7 md:w-[450px] w-fit">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1617791636474-cad64fefa7f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=454&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Naufal Ammar Rauf</Typography>
                                    <Typography className="text-gray-400 text-sm">Freelancer</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Saya bergabung dengan Friendchise untuk menjalin kerja sama waralaba dengan perusahaan franchise di Indonesia karena ingin memulai bisnis tanpa harus ribet mencari waralaba di berbagai platform. Friendchise sangat memudahkan saya dalam menjalankan bisnis dan mendapatkan penghasilan tambahan. Waralaba yang ditawarkan juga sangat diminati oleh pelanggan
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="rounded-xl shadow-lg p-7 md:w-[450px] w-fit">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Joko Santoso</Typography>
                                    <Typography className="text-gray-400 text-sm">Pedagang</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Saya sangat senang bisa menjalin kerja sama waralaba dengan perusahaan franchise di Indonesia bersama Friendchise. Saya bisa memulai bisnis saya dengan menawarkan produk baru yang berkualitas tinggi dan diminati oleh pelanggan. Sistem kerja sama yang disediakan oleh Friendchise sangat transparan dan mudah dipahami, serta dukungan dari tim Friendchise sangat membantu dalam mengembangkan bisnis saya
                            </Typography>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full mt-8">
                <div className="items-center flex justify-center mb-10">
                    <Button className="border-primary border-[2px] text-primary rounded-full" onClick={handlePrev}>
                        <BsChevronLeft size={25} />
                    </Button>
                    <Button className="border-primary border-[2px] text-primary rounded-full ml-3" onClick={handleNext}>
                        <BsChevronRight size={25} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Testimony;
