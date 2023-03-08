import Typography from "@/components/typography/Typography";
import { BiDollar } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { useState } from "react";

// animation
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Franchise } from "@/models/dto/franchise";
import { rupiahFormatter } from "@/utils/rupiahFormatter";
import { saveFranchise } from "@/feature/franchise/service/saveFranchise";
import useLocalStorage from "@/hooks/useLocalStorage";
import { removeFranchise } from "@/feature/franchise/service/removeFranchise";

const CardFranchise = ({ franchise }: { franchise: Franchise }) => {
    const [saved, setSaved] = useState(franchise.saved === 1);
    const navigate = useNavigate()
    const [token] = useLocalStorage('token', '')

    const save = async () => {
        try {
            const result = await saveFranchise(token.token, franchise?.id!);

            console.log(result);

            setSaved(true)
        } catch (error) {
            console.error(error)
        }
    }

    const removeFromSaved = async () => {
        try {
            const result = await removeFranchise(token.token, franchise?.savedCompanyId!)

            console.log(result);

            setSaved(false);
        
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="lg:mx-3 md:mb-7 mb-3 hover:shadow-md cursor-pointer transition duration-200 p-5 rounded-xl border border-gray-400 bg-white lg:min-w-[350px] min-w-[250px] min-h-[300px] lg:w-[300px] w-full hover:-translate-y-2">
            <div onClick={() => { navigate(`/waralaba/${franchise.id}`) }} className="bg-cover bg-center min-h-[150px] w-full rounded-xl hover:opacity-80 transition duration-200" style={{ backgroundImage: `url(${franchise.image_thumbnail})` }} />
            <div className="flex items-start mt-3 justify-between">
                <div>
                    <Typography onClick={() => { navigate(`/waralaba/${franchise.id}`) }} thickness="bold" className="text-lg hover:underline">
                        {franchise.outlet_name}
                    </Typography>
                    <Typography thickness="bold" className="text-md text-gray-600">
                        {franchise.name}
                    </Typography>
                    <div className="flex items-center mt-5">
                        <HiLocationMarker size={22} />
                        <Typography className="ml-2 text-sm">{franchise.address?.substring(0, 50)}...</Typography>
                    </div>
                    <div className="flex items-center mt-2">
                        <BiDollar size={22} />
                        <Typography className="ml-2 text-sm">{rupiahFormatter(franchise?.price!)}</Typography>
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
                                    <BsFillBookmarkFill onClick={removeFromSaved} className="fill-primary" size={23} />
                                </motion.div>
                                :
                                <div>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ y: 30 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <BsBookmark onClick={save} size={23} />
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
