import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { dateFormatter } from "@/utils/dateFormatter";
import { rupiahFormatter } from "@/utils/rupiahFormatter";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Badge from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import CardBatalkan from "./CardBatalkan";
import { History } from "@/models/dto/history";

interface Props {
    outlet_name?: string,
    company_name?: string,
    created_at?: string,
    status?: string,
    img_url?: string,
    total_price?: string,
    company_id?: string | number,
    history: History
}

const CardHistory = ({ outlet_name, company_name, created_at, status, img_url, total_price, company_id, history }: Props) => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [declinePayment, setDeclinePayment] = useState(false);

    return (
        <div className="p-5 rounded-xl border-[1.5px] border-gray-300 my-3 cursor-pointer hover:shadow-lg transition duration-200">
            {
                visible && <div onClick={() => { setVisible(false) }} className="absolute top-0 left-0 right-0 bottom-0" />
            }
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Typography className="text-sm">
                        {dateFormatter(created_at!)} WIB
                    </Typography>
                    <Badge
                        className="ml-2"
                        text={status!}
                    />
                </div>
                <div className="relative">
                    <Button onClick={() => { setVisible(true) }}>
                        <BsThreeDots size={25} />
                    </Button>
                    <AnimatePresence>
                        {
                            visible &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-5 right-0 bg-white rounded-xl p-3 min-w-[200px] min-h-[100px] z-10 shadow-lg">
                                <Button>
                                    <Typography className="font-semibold text-gray-600 text-[15px]">Bantuan</Typography>
                                </Button>
                                <Button onClick={() => { setDeclinePayment(true) }}>
                                    <Typography className="font-semibold text-gray-600 text-[15px]">Batalkan pesanan</Typography>
                                </Button>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </div>
            <div onClick={() => { navigate(`/waralaba/${company_id}`) }} className="w-full mt-5 flex items-stretch md:flex-row flex-col justify-between">
                <div className="flex items-center">
                    <div className="bg-cover bg-center rounded-xl w-[70px] h-[70px]" style={{ backgroundImage: `url(${img_url})` }} />
                    <div className="ml-5">
                        <Typography thickness="bold" className="text-[19px]">
                            {outlet_name}
                        </Typography>
                        <Typography className="text-sm text-[18px]">
                            {company_name}
                        </Typography>
                    </div>
                </div>
                <div className="md:mt-0 mt-5">
                    <Typography>
                        Subtotal
                    </Typography>
                    <Typography thickness="bold">
                        {rupiahFormatter(total_price!)}
                    </Typography>
                </div>
            </div>
            <CardBatalkan
                id={history.id!}
                visible={declinePayment}
                setVisible={setDeclinePayment}
            />
        </div>
    );
}

export default CardHistory;
