import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { Franchise } from "@/models/dto/franchise";
import { useState } from "react";
import { BiChevronUp } from "react-icons/bi";

const AboutCompany = ({ data }: { data: Franchise }) => {
    const [seeMore, setSeeMore] = useState<boolean>(true);

    return (
        <div className="rounded-xl border border-black p-7 mt-10 md:w-[90%] w-full">
            <Typography thickness="bold" className="text-xl">Tentang Perusahaan</Typography>
            <div className="flex items-center my-5">
                <div className="rounded-full w-[50px] h-[50px] bg-cover bg-center" style={{ backgroundImage: `url(${data?.image_thumbnail})` }} />
                <div className="ml-5">
                    <Typography thickness="bold" className="text-lg">
                        {data?.name}
                    </Typography>
                    <Typography className="text-sm text-gray-600">
                        Food and Beverages Service
                    </Typography>
                </div>
            </div>
            <Typography className="text-justify text-sm">
                {seeMore ? data?.description : `${data?.description?.substring(0, 200)}...`}
            </Typography>
            <Button onClick={() => { setSeeMore(prev => !prev) }} className="my-5">
                <Typography className="text-sm">
                    Lihat lebih sedikit
                </Typography>
                <BiChevronUp className={`ml-4 transition duration-200 ${seeMore ? '' : 'rotate-180'}`} size={20} />
            </Button>
            <Typography thickness="bold" className="my-4">
                Alamat Kantor
            </Typography>
            <Typography className="text-sm">
                {data?.address}
            </Typography>
        </div>
    );
}

export default AboutCompany;
