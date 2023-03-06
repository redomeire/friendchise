import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import Typography from "@/components/typography/Typography"
import useLocalStorage from "@/hooks/useLocalStorage"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc"
import { GrClose } from "react-icons/gr"
import { Link } from "react-router-dom"
import { abortTransaction } from "../service/abortTransaction"

const CardBatalkan = ({ visible, setVisible, id }: { visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>>, id: string | number }) => {
    const [token] = useLocalStorage('token', '')
    const [loading, setLoading] = useState(false)

    const cancelTransaction = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        setLoading(true)

        try {
            const result = await abortTransaction(token.token, id)

            console.log(result);

            setTimeout(() => {
                setLoading(false)
                window.location.reload()
            }, 1000)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    return (
        <AnimatePresence>
            {
                visible &&
                <div className="w-full z-40 fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center">
                    <div onClick={() => { setVisible(false) }} className=" bg-[#00000031] absolute top-0 left-0 right-0 bottom-0" />
                    <motion.form
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onSubmit={cancelTransaction}
                        className="bg-white p-7 rounded-xl min-h-[300px] md:w-[500px] w-[90%] shadow-xl z-50 ">
                        <div className="flex items-center">
                            <Typography
                                className="text-base font-semibold pr-5"
                            >
                                Mengapa anda ingin membatalkan pesanan ini?
                            </Typography>
                            <Button type="button" onClick={() => { setVisible(false) }}>
                                <GrClose size={20} />
                            </Button>
                        </div>
                        <div className="px-5">
                            <div className="flex items-center justify-start w-full my-3">
                                <div>
                                    <Input
                                        type="radio"
                                        name="cancel_order"
                                        className="rounded-full focus:shadow-md border-gray-400 mr-3 w-fit"
                                    />
                                </div>
                                <Typography className="text-[15px]">Ingin mengubah pesanan</Typography>
                            </div>
                            <div className="flex items-center justify-start w-full my-3">
                                <div>
                                    <Input
                                        type="radio"
                                        name="cancel_order"
                                        className="rounded-full focus:shadow-md border-gray-400 mr-3 w-fit"
                                    />
                                </div>
                                <Typography className="text-[15px]">Tidak mudah melanjutkan pembayaran</Typography>
                            </div>
                            <div className="flex items-center justify-start w-full my-3">
                                <div>
                                    <Input
                                        type="radio"
                                        name="cancel_order"
                                        className="rounded-full focus:shadow-md border-gray-400 mr-3 w-fit"
                                    />
                                </div>
                                <Typography className="text-[15px]">Lainnya</Typography>
                            </div>
                        </div>
                        <div className="bg-[#F2F4F7] text-sm p-3 rounded-lg">
                            Pembatalan membutuhkan persetujuan penjual karena pesanan Anda sudah diproses. <span className="text-primary font-[600]">Lihat S&K</span>
                        </div>
                        <Button
                            loading={loading}
                            type="submit"
                            className="w-full bg-primary-dark text-white mt-7"
                        >Ajukan pembatalan</Button>
                    </motion.form>
                </div>
            }
        </AnimatePresence>
    )
}

export default CardBatalkan
