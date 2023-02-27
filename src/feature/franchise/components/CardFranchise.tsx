import Typography from "@/components/typography/Typography";
import { BiDollar } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { useState } from "react";

// animation
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CardFranchise = () => {
    const [saved, setSaved] = useState(false);
    const navigate = useNavigate()

    return (
        <div className="md:mx-3 md:mb-7 mb-3 hover:shadow-md cursor-pointer transition duration-200 p-5 rounded-xl border border-gray-400 bg-white md:min-w-[350px] min-w-[250px] min-h-[300px] md:w-[300px] w-full">
            <div onClick={() => { navigate('/waralaba/1') }} className="bg-cover bg-center min-h-[150px] w-full rounded-xl hover:opacity-80 transition duration-200" style={{ backgroundImage: `url(${'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/857f1570-d743-4d1a-9f45-7ef2b1797686_restaurant-image_1619947508391.jpg'})` }} />
            <div className="flex items-start mt-3 justify-between">
                <div>
                    <Typography onClick={() => { navigate('/waralaba/1') }} thickness="bold" className="text-lg hover:underline">
                        Wisco Chocolate
                    </Typography>
                    <Typography thickness="bold" className="text-md text-gray-600">
                        PT Gunung Selamat
                    </Typography>
                    <div className="flex items-center mt-5">
                        <HiLocationMarker size={22} />
                        <Typography className="ml-2 text-sm">Solo, Jawa Tengah</Typography>
                    </div>
                    <div className="flex items-center mt-2">
                        <BiDollar size={22} />
                        <Typography className="ml-2 text-sm">Rp5.000.000</Typography>
                    </div>
                </div>
                <AnimatePresence>
                    <div className="mt-2">
                        {
                            saved ?
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}  
                                    exit={{ y: 30 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <BsFillBookmarkFill className="fill-primary" onClick={() => { setSaved(false) }} size={23} />
                                </motion.div>
                                :
                                <div>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ y: 30 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <BsBookmark onClick={() => { setSaved(true) }} size={23} />
                                    </motion.div>
                                </div>
                        }
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default CardFranchise;
