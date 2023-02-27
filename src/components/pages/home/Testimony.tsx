import React from "react"

import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import 'swiper/css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
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
                <div className="items-center mr-5 md:flex hidden">
                    <Button className="text-white bg-primary rounded-full" onClick={handlePrev}>
                        <BsChevronLeft size={25} />
                    </Button>
                    <Button className="text-white bg-primary rounded-full ml-3" onClick={handleNext}>
                        <BsChevronRight size={25} />
                    </Button>
                </div>
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
                        <div className="rounded-xl p-7 md:w-[450px] shadow-lg w-fit">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Sulistini</Typography>
                                    <Typography className="text-gray-400 text-sm">Irfan</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In obcaecati voluptatibus, ea nihil eius blanditiis. Consequuntur autem ad provident exercitationem temporibus earum velit magni delectus iste! Sapiente error deserunt illo necessitatibus nisi magni, fugit odio voluptatum aspernatur corrupti corporis facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aliquid!
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="rounded-xl p-7 md:w-[450px] shadow-lg w-fit">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Sulistianto</Typography>
                                    <Typography className="text-gray-400 text-sm">Mahasiswa</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel accusantium suscipit quod praesentium perspiciatis tempore molestiae, cum, vero nam excepturi alias facere, nesciunt officia animi corporis temporibus ex? Repellendus voluptates repellat aut temporibus hic perspiciatis vero quaerat fugit labore voluptate?
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="rounded-xl p-7 md:w-[450px] shadow-lg w-fit">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Sulistianto</Typography>
                                    <Typography className="text-gray-400 text-sm">Mahasiswa</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel accusantium suscipit quod praesentium perspiciatis tempore molestiae, cum, vero nam excepturi alias facere, nesciunt officia animi corporis temporibus ex? Repellendus voluptates repellat aut temporibus hic perspiciatis vero quaerat fugit labore voluptate?
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="rounded-xl shadow-lg p-7 md:w-[450px] w-fit">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Sulistianto</Typography>
                                    <Typography className="text-gray-400 text-sm">Mahasiswa</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel accusantium suscipit quod praesentium perspiciatis tempore molestiae, cum, vero nam excepturi alias facere, nesciunt officia animi corporis temporibus ex? Repellendus voluptates repellat aut temporibus hic perspiciatis vero quaerat fugit labore voluptate?
                            </Typography>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full md:mt-10">
                <div className="items-center md:hidden flex justify-center mb-10">
                    <Button className="border-primary border-[2px] text-primary rounded-full" onClick={handlePrev}>
                        <BsChevronLeft size={25} />
                    </Button>
                    <Button className="border-primary border-[2px] text-primary rounded-full ml-3" onClick={handleNext}>
                        <BsChevronRight size={25} />
                    </Button>
                </div>
                <Button className="bg-primary font-semibold text-white mx-auto px-10">Mulai Berbisnis</Button>
            </div>
        </div>
    );
}

export default Testimony;
