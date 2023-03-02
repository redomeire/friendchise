import Typography from "@/components/typography/Typography";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import scrollbar from "@/components/styles/scrollbar.module.css";

type Link = {
    links: {
        name: string,
        url: string
    }[]
}

const BreadCrumbs = ({ links }: Link) => {
    const navigate = useNavigate()

    return (
        <div className={`w-full p-5 bg-gray-200 flex items-center md:px-20 px-5 whitespace-nowrap z-10 overflow-auto ${scrollbar.scrollbar_hide}`}>
            {
                links.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center">
                            <Typography onClick={() => { navigate(`${item.url}`) }} className="text-sm hover:font-semibold cursor-pointer transition duration-200">
                                {item.name}
                            </Typography>
                            {
                                links.length !== index + 1 &&
                                <BiChevronRight size={20} className="mx-3" />
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default BreadCrumbs;
