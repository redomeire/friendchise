import Typography from "@/components/typography/Typography";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

type Link = {
    links: {
        name: string,
        url: string
    }[]
}

const BreadCrumbs = ({ links }: Link) => {
    const navigate = useNavigate()

    return (
        <div className="w-full p-5 bg-gray-200 fixed top-20 flex items-center px-20">
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
