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
import { FiLogOut } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
    const [token] = useLocalStorage('token', '')
    const [openProfile, setOpenProfile] = useState(false)
    const [navbarResponsive, setNavbarResponsive] = useState(false);
    const { setVisible } = useContext(LoginContext);

    const navbarDatas = [
        {
            name: 'Waralaba',
            url: '/waralaba'
        },
        {
            name: 'Riwayat',
            url: '/history'
        },
        {
            name: 'Disimpan',
            url: '/saved'
        }
    ]

    return (
        <>
            <nav className={` transition duration-200 fixed top-0 z-20 w-full flex items-center justify-between p-5 md:px-20 bg-white ${style.nav} md:flex-row flex-col `}>
                <div className="flex md:items-center md:flex-row flex-col md:w-fit w-full">
                    <div className="flex items-center justify-between">
                        <a href="/">
                            <div className="flex items-center">
                                <img src={Logo} alt="the movie db" className="w-[40px]" />
                                <Typography className="ml-5 text-2xl md:hidden" thickness="bold">
                                    FriendChise
                                </Typography>
                            </div>
                        </a>
                        <Button onClick={() => { setNavbarResponsive(prev => !prev) }} className="md:hidden">
                            <FaHamburger
                                size={20}
                            />
                        </Button>
                    </div>
                    <ul className={`md:flex items-center md:flex-row flex-col md:ml-10 mt-5 md:mt-0 w-full ${navbarResponsive ? 'flex' : 'hidden'}`}>
                        {
                            navbarDatas.map((item, index) => {
                                return (
                                    <a key={index} href={item.url} className="w-full mx-5 md:border-b-0 border-b py-3 md:py-0">
                                        <li className={`md:text-base text-sm font-[500] border-b-[2px] border-b-transparent md:hover:border-b-black transition duration-200 ${window.location.pathname === item.url ? 'font-semibold text-primary-darker' : ''}`}>
                                            {item.name}
                                        </li>
                                    </a>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={`md:flex items-center md:w-fit w-full ${navbarResponsive ? 'flex' :  'hidden'}`}>
                    {
                        token && token !== 'undefined' ?
                            <ProfileAvatar openProfile={openProfile} setOpenProfile={setOpenProfile} />
                            :
                            <div className="flex items-center md:flex-row flex-col md:w-fit w-full">
                                <Link to="/register" className="md:w-fit w-full">
                                    <Button className="text-sm font-semibold transition duration-400 border-primary border-[2px] text-primary min-w-[100px] md:my-0 my-3 w-full">
                                        Daftar
                                    </Button>
                                </Link>
                                <Button onClick={() => { setVisible(prev => !prev) }} className="md:ml-3 text-sm min-w-[100px] font-semibold transition duration-400 bg-primary border-primary border-[2px] text-white md:w-fit w-full">
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
        <div className="cursor-pointer flex items-center relative md:mt-0 mt-5">
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
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 5, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-14 p-4 rounded-xl shadow-md bg-white min-w-[200px] z-50">
                            <a href="/profile">
                                <Typography className="text-sm mb-3">
                                    Profil Saya
                                </Typography>
                            </a>
                            <a href="/usage-agreement">
                                <Typography className="text-sm mb-3">
                                    Syarat & Ketentuan
                                </Typography>
                            </a>
                            <a href="/privacy-policy">
                                <Typography className="text-sm mb-3">
                                    Kebijakan Privasi
                                </Typography>
                            </a>
                            <hr className="border-[1px]" />
                            <div onClick={handleLogout} className="w-fit flex items-center mt-3 text-red-500">
                                <FiLogOut />
                                <Typography className="font-semibold text-sm ml-2 cursor-pointer w-fit">
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
