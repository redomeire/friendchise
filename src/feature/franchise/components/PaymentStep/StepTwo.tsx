import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { BsCalendar3 } from "react-icons/bs";
import { useState } from "react";
import { paymentMethod } from "../../utils/dummy";

interface Props {
    setTab: React.Dispatch<React.SetStateAction<number>>
}

const StepTwo = ({ setTab }: Props) => {
    const [selectedPayment, setSelectedPayment] = useState('')

    return (
        <div>
            <Typography thickness="bold" className="text-2xl">
                Pilih Metode Pembayaran
            </Typography>
                <div className="mt-10 flex justify-start flex-wrap w-full ">
                    {
                        paymentMethod.map((item, index) => {
                            return (
                                <div onClick={() => { setSelectedPayment(item.name) }} key={index} className={`cursor-pointer m-6 w-fit flex items-center justify-center min-w-[80px] min-h-[80px] p-2 rounded-xl ${selectedPayment !== item.name ? 'border-gray-300 border-[1.5px]' : 'border-primary border-[2px]'}`}>
                                    <img src={item.logo} className="w-[50px]" />
                                </div>
                            )
                        })
                    }
                </div>
            <div className="w-full flex justify-between mt-10">
                <Button onClick={() => { setTab(prev => prev - 1) }} className="bg-transparent border-[1.5px] text-primary border-primary min-w-[150px]">
                    Sebelumnya
                </Button>
                <Button onClick={() => { setTab(prev => prev + 1) }} className="bg-primary-darker text-white min-w-[150px]">
                    Selanjutnya
                </Button>
            </div>
        </div>
    );
}

export default StepTwo;
