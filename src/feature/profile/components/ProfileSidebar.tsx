import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { ProfileContext } from "@/context/ProfileContext";
import { useContext, useState } from "react";
import { profileTab } from "../utils/dummy";

const ProfileSidebar = () => {
    const [tab, setTab] = useState('Ubah Profil')
    const { user } = useContext(ProfileContext);

    return (
        <div className="md:sticky lg:block hidden py-5 top-24 rounded-xl shadow-lg md:w-[25%] left-32 min-h-[300px] bg-white">
            <div className="profile-pic flex flex-col justify-center items-center m-5 ">
                {
                    user.profile_img ?
                        <div className="bg-cover bg-center rounded-full w-[120px] h-[120px]" style={{ backgroundImage: `url(${user.profile_img})` }} />
                        :
                        <Button className="bg-primary w-[100px] h-[100px] md:text-4xl text-white">
                            {
                                user.username &&
                                <Typography className="font-semibold">{user.username[0]?.toUpperCase()}</Typography>
                            }
                        </Button>
                }
                <Typography thickness="bold" className="text-lg mt-5">
                    {user.username}
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
