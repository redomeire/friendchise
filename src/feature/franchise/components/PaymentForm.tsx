import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useContext } from "react";
import { BsArrowLeft, BsFillCheckCircleFill } from "react-icons/bs";
import { payment } from "../utils/dummy";
import StepOne from "./PaymentStep/StepOne";
import StepThree from "./PaymentStep/StepThree";
import StepTwo from "./PaymentStep/StepTwo";

import scrollbar from "@/components/styles/scrollbar.module.css";
import { payment as pay } from "@/feature/payment/service/payment";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useNavigate, useParams } from "react-router-dom";
import { TransactionContext } from "@/context/TransactionContext";

interface Props {
    visiblePayment: boolean,
    setVisiblePayment: React.Dispatch<React.SetStateAction<boolean>>,
    total_price?: string
}

const PaymentForm = ({ visiblePayment, setVisiblePayment, total_price }: Props) => {
    const [tab, setTab] = useState<number>(1)
    const [token] = useLocalStorage('token', '')
    const { franchiseId } = useParams();
    const { transaction } = useContext(TransactionContext)
    const navigate = useNavigate()

    const handlePayment = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        try {
            const result = await pay(token.token,
                {
                    ...transaction,
                    total_price: total_price!,
                    company_id: franchiseId,
                    service_price: '5000'
                })

            console.log(result);

            setTimeout(() => {
                navigate('/history')
            }, 1200);

        } catch (error) {
            console.error(error);
        }
    }

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
                        onSubmit={handlePayment}
                        className="bg-white rounded-xl min-h-[300px] md:min-w-[400px] shadow-xl z-50 md:max-w-[60vw] w-[90%]">

                        <div className="p-7 bg-primary rounded-t-xl text-white flex items-center">
                            <BsArrowLeft className="md:w-[25px] w-[50px]" />
                            <div className={`flex items-center overflow-auto ${scrollbar.scrollbar_hide}`}>
                                {
                                    payment.map((item, index) => {
                                        return (
                                            <>
                                                <Button type="button" onClick={() => { setTab(item.tab) }} className={`  ${item.tab < tab ? 'bg-white text-primary ' : 'border-white border-[1.5px] text-white'} ${index === 0 && 'ml-5'}`}>
                                                    {
                                                        item.tab < tab &&
                                                        <BsFillCheckCircleFill size={20} />
                                                    }
                                                    <Typography className="text-sm ml-2 font-semibold whitespace-nowrap">
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
                        <div className="md:p-10 p-5 max-h-[70vh] overflow-auto">
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
