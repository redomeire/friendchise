import Typography from "@/components/typography/Typography";
import { useState } from "react";
import { profileTab } from "../utils/dummy";

const ProfileSidebar = () => {
    const [tab, setTab] = useState('Ubah Profil')

    return (
        <div className="sticky py-5 top-24 rounded-xl shadow-lg md:w-[25%] left-32 min-h-[300px] bg-white">
            <div className="profile-pic flex flex-col justify-center items-center m-5 ">
                <div className="bg-cover bg-center rounded-full w-[120px] h-[120px]" style={{ backgroundImage: `url(${'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/857f1570-d743-4d1a-9f45-7ef2b1797686_restaurant-image_1619947508391.jpg'})` }} />
                <Typography thickness="bold" className="text-lg mt-5">
                    Redomeire
                </Typography>
            </div>
            <div>
                {
                    profileTab.map((item, index) => {
                        return (
                            <div onClick={() => { setTab(item.name) }} key={index} className={`cursor-pointer w-full hover:text-primary transition duration-200 border-l-[4px] p-1 pl-5 my-3 ${tab === item.name ? 'border-l-primary-dark text-primary' : 'border-transparent'}`}>
                                <Typography className="text-sm">{item.name}</Typography>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ProfileSidebar;
