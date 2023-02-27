import Typography from "@/components/typography/Typography";
import Badge from "./Badge";

const CardHistory = () => {
    return (
        <div className="p-5 rounded-xl border-[1.5px] border-gray-300 my-3 cursor-pointer hover:shadow-lg transition duration-200">
            <div className="flex items-center">
                <Typography className="">
                    28 Mei 2023, 19.30 WIB
                </Typography>
                <Badge
                    className="ml-2"
                    text="Berhasil"
                />
            </div>
            <div className="w-full mt-5 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="bg-cover bg-center rounded-xl w-[70px] h-[70px]" style={{ backgroundImage: `url('https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/857f1570-d743-4d1a-9f45-7ef2b1797686_restaurant-image_1619947508391.jpg')` }} />
                    <div className="ml-5">
                        <Typography thickness="bold" className="text-[19px]">
                            Ropi: Roti Bikin Hepi
                        </Typography>
                        <Typography className="text-sm text-[18px]">
                            PT Gunung Slamat
                        </Typography>
                    </div>
                </div>
                <div>
                    <Typography>
                        Subtotal
                    </Typography>
                    <Typography thickness="bold">
                        Rp 8.976.500
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default CardHistory;
