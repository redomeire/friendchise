import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

const Testimony = () => {
    return (
        <div className="px-40">
            <Typography className="mt-20 font-semibold text-3xl">
                kata mereka
            </Typography>
            <div className="mt-10 flex justify-between items-start">
                <Swiper 
                slidesPerView={2}
                spaceBetween={2}
                className="p-10"
                >
                    <SwiperSlide>
                        <div className="rounded-xl shadow-lg p-7 md:w-[450px] w-fit">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Sulistini</Typography>
                                    <Typography className="text-gray-400">Sulistini</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In obcaecati voluptatibus, ea nihil eius blanditiis. Consequuntur autem ad provident exercitationem temporibus earum velit magni delectus iste! Sapiente error deserunt illo necessitatibus nisi magni, fugit odio voluptatum aspernatur corrupti corporis facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aliquid!
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="rounded-xl shadow-lg p-7 md:w-[450px] w-fit">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-cover bg-center bg-gray-400 w-[60px] h-[60px] bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80')]`} />
                                <div className="ml-5">
                                    <Typography className="font-bold">Sulistianto</Typography>
                                    <Typography className="text-gray-400">Mahasiswa</Typography>
                                </div>
                            </div>
                            <Typography className="text-sm mt-5">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel accusantium suscipit quod praesentium perspiciatis tempore molestiae, cum, vero nam excepturi alias facere, nesciunt officia animi corporis temporibus ex? Repellendus voluptates repellat aut temporibus hic perspiciatis vero quaerat fugit labore voluptate?
                            </Typography>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full mt-10">
                <Button className="bg-primary font-semibold text-white mx-auto px-10">Mulai Berbisnis</Button>
            </div>
        </div>
    );
}

export default Testimony;
