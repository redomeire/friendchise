import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { BiChevronUp } from "react-icons/bi";

const AboutCompany = () => {
    return (
        <div className="rounded-xl border border-black p-7 mt-10 w-[90%]">
            <Typography thickness="bold" className="text-xl">Tentang Perusahaan</Typography>
            <div className="flex items-center my-5">
                <div className="rounded-full w-[50px] h-[50px] bg-cover bg-center" style={{ backgroundImage: `url(https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/857f1570-d743-4d1a-9f45-7ef2b1797686_restaurant-image_1619947508391.jpg)` }} />
                <div className="ml-5">
                    <Typography thickness="bold" className="text-lg">
                        PT Gunung Slamat
                    </Typography>
                    <Typography className="text-sm text-gray-600">
                        Food and Beverages Service
                    </Typography>
                </div>
            </div>
            <Typography className="text-justify text-sm">
                Founded by Mr. Soegiharto Sosrodjojo in the 1950s, Rekso is a diversified entity with concentration in tea, food and beverages, property, plantation, printing and packaging. Rekso's flagship companies in Indonesia include a majority shareholding in PT. SINAR SOSRO, one of Indonesia's largest beverage companies, PT REKSO NASIONAL FOOD the master franchisee of McDonald's Corporation in Indonesia, and PT GUNUNG SLAMAT, the country's no.1 tea manufacturer. These three flagships form Rekso's core businesses. In addition, Rekso also owns the largest private tea plantation in Indonesia.
            </Typography>
            <Button className="my-5">
                <Typography className="text-sm">
                    Lihat lebih sedikit
                </Typography>
                <BiChevronUp className="ml-4" size={20} />
            </Button>
            <Typography thickness="bold" className="my-4">
                Alamat Kantor
            </Typography>
            <Typography className="text-sm">
                Graha Rekso Building 10th FloorJl Bulevar Artha Gading Kav. A1Kelapa Gading, Jakarta Utara 14240
            </Typography>
        </div>
    );
}

export default AboutCompany;
