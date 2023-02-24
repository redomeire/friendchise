import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";

interface Props {
    setTab: React.Dispatch<React.SetStateAction<number>>
}

const StepThree = ({ setTab }: Props) => {
    return (
        <div>
            <Typography thickness="bold" className="text-2xl">
                Detail Pembayaran
            </Typography>
            <div className="mt-10 flex justify-start flex-wrap w-full ">
                <div className="flex items-center justify-between w-full">
                    <Typography>
                        Harga Franchise
                    </Typography>
                    <Typography>
                        Rp 35.000.000
                    </Typography>
                </div>
                <div className="flex items-center justify-between w-full mt-5">
                    <Typography>
                        Biaya Layanan
                    </Typography>
                    <Typography>
                        Rp 5.000
                    </Typography>
                </div>
                <hr className="border-t-[1.5px] border-gray-400 w-full mt-5" />
                <div className="flex items-center justify-between w-full mt-5">
                    <Typography thickness="bold">
                        Total Tagihan
                    </Typography>
                    <Typography thickness="bold">
                        Rp 35.005.000
                    </Typography>
                </div>
            </div>
            <div className="w-full flex justify-between mt-10">
                <Button onClick={() => { setTab(prev => prev - 1) }} className="bg-transparent border-[1.5px] text-primary border-primary min-w-[150px]">
                    Sebelumnya
                </Button>
                <Button type="submit" className="bg-primary-darker text-white min-w-[200px]">
                    Bayar Sekarang
                </Button>
            </div>
        </div>
    );
}

export default StepThree;
