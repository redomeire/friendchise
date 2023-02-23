import Button from "@/components/button/Button";

import useLocalStorage from "@/hooks/useLocalStorage";
import Typography from "@/components/typography/Typography";

// assets
import Logo from "@/assets/logo_friendchise_green.svg";
import style from "@/components/styles/navbar.module.css";
import { useContext, useState } from "react";
import { LoginContext } from "@/context/LoginContext";
import { Link } from "react-router-dom";
import { BiChevronUp } from "react-icons/bi";
import { logout } from "@/feature/auth/service/logout";

// animation
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [token] = useLocalStorage('token', '')
    const [openProfile, setOpenProfile] = useState(false)
    const { setVisible } = useContext(LoginContext);

    return (
        <>
            <nav className={` transition duration-200 fixed top-0 z-20 w-full flex items-center justify-between p-5 px-20 bg-white ${style.nav} `}>
                <div className="flex items-center">
                    <a href="/">
                        <img src={Logo} alt="the movie db" className="md:w-[40px]" />
                    </a>
                    <ul className="flex items-center ml-10">
                        <a href="/waralaba">
                            <li className="mx-5 text-md font-[500] border-b-[2px] border-b-transparent hover:border-b-black transition duration-200">
                                Waralaba
                            </li>
                        </a>
                        <a href="/history">
                            <li className="mx-5 text-md font-[500] border-b-[2px] border-b-transparent hover:border-b-black transition duration-200">
                                Riwayat
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="flex items-center">
                    {
                        token ?
                            <ProfileAvatar openProfile={openProfile} setOpenProfile={setOpenProfile} />
                            :
                            <div className="flex items-center">
                                <Link to="/register">
                                    <Button className="text-sm font-semibold transition duration-400 border-primary border-[2px] text-primary min-w-[100px] mr-3">
                                        Daftar
                                    </Button>
                                </Link>
                                <Button onClick={() => { setVisible(prev => !prev) }} className="text-sm min-w-[100px] font-semibold transition duration-400 bg-primary border-primary border-[2px] text-white">
                                    Masuk
                                </Button>
                            </div>
                    }
                </div>
            </nav>
        </>
    );
}

const ProfileAvatar = ({ openProfile, setOpenProfile }: { openProfile: boolean, setOpenProfile: Function }) => {
    const [token] = useLocalStorage('token', '')
    const handleLogout = async () => {
        try {
            // const result = await logout(token);

            window.localStorage.removeItem('token');

            setTimeout(() => {
                window.location.reload()
            }, 1000);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="cursor-pointer flex items-center relative">
            {
                openProfile &&
                <div onClick={() => { setOpenProfile(false) }} className="z-30 fixed top-0 left-0 right-0 bottom-0" />
            }
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="w-[40px] h-[40px] rounded-full" />
            <div onClick={() => { setOpenProfile(!openProfile) }}>
                <Typography className="ml-3 font-semibold text-sm">
                    Redomeire
                </Typography>
            </div>
            <Button>
                <BiChevronUp className={`${openProfile ? '' : 'rotate-180'} transition duration-200`} size={22} />
            </Button>
            <AnimatePresence>
                {
                    openProfile &&
                    <>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-14 p-4 rounded-xl shadow-md bg-white min-w-[200px] z-50">
                            <a href="/profile">
                                <Typography className="font-semibold text-sm mb-3">
                                    Profil Saya
                                </Typography>
                            </a>
                            <a href="/usage-agreement">
                                <Typography className="font-semibold text-sm mb-3">
                                    Syarat & Ketentuan
                                </Typography>
                            </a>
                            <a href="/privacy-policy">
                                <Typography className="font-semibold text-sm mb-3">
                                    Kebijakan Privasi
                                </Typography>
                            </a>
                            <hr className="border-[1px]" />
                            <div onClick={handleLogout} className="w-fit">
                                <Typography className="text-red-500 font-semibold text-sm mt-3 cursor-pointer w-fit">
                                    Keluar
                                </Typography>
                            </div>
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </div>
    )
}

export default Navbar;
