import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowLeft, BsFillCheckCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { payment } from "../utils/dummy";
import StepOne from "./PaymentStep/StepOne";
import StepThree from "./PaymentStep/StepThree";
import StepTwo from "./PaymentStep/StepTwo";

interface Props {
    visiblePayment: boolean,
    setVisiblePayment: React.Dispatch<React.SetStateAction<boolean>>
}

const PaymentForm = ({ visiblePayment, setVisiblePayment }: Props) => {
    const [tab, setTab] = useState<number>(1)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [forms, setForms] = useState({
        email: '',
        password: ''
    })

    return (
        <AnimatePresence>
            {
                visiblePayment &&
                <div className="w-full z-40 fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center">
                    <div onClick={() => { setVisiblePayment(false) }} className=" bg-[#00000031] absolute top-0 left-0 right-0 bottom-0" />
                    <motion.form
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl min-h-[300px] md:min-w-[400px] shadow-xl z-50 md:max-w-[60vw] ">

                        <div className="p-7 bg-primary rounded-t-xl text-white flex items-center">
                            <BsArrowLeft />
                            <div className="flex items-center">
                                {
                                    payment.map((item, index) => {
                                        return (
                                            <>
                                                <Button type="button" onClick={() => { setTab(item.tab) }} className={`  ${item.tab < tab ? 'bg-white text-primary ' : 'border-white border-[1.5px] text-white'} ${index === 0 && 'ml-5'}`}>
                                                    {
                                                        item.tab < tab &&
                                                        <BsFillCheckCircleFill size={20} />
                                                    }
                                                    <Typography className="text-sm ml-2 font-semibold">
                                                        {item.name}
                                                    </Typography>
                                                </Button>
                                                {
                                                    item.tab !== 3 &&
                                                    <hr className="border-t-[1.5px] border-white min-w-[50px] border-dashed" />
                                                }
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="p-10 max-h-[70vh] overflow-auto">
                            {
                                tab === 1 ?
                                    <StepOne
                                        setTab={setTab}
                                    /> :
                                    tab === 2 ?
                                        <StepTwo
                                            setTab={setTab}
                                        />
                                        :
                                        tab === 3 ?
                                            <StepThree
                                                setTab={setTab}
                                            />
                                            :
                                            <></>
                            }
                        </div>
                    </motion.form>
                </div>
            }
        </AnimatePresence>
    );
}

export default PaymentForm;
