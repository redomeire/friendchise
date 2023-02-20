import Button from "@/components/button/Button";
import { GiBalaclava } from "react-icons/gi";

import useLocalStorage from "@/hooks/useLocalStorage";
import Typography from "@/components/typography/Typography";

// assets
import Logo from "@/assets/logo_friendchise_green.svg";
import modul from "@/components/styles/button.module.css";
import { useState } from "react";

const Navbar = () => {
    const [token] = useLocalStorage('session_id', '')
    const [scrolled, setScrolled] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200)
            setScrolled(true)

        else setScrolled(false);
    })

    return (
        <nav className={`transition duration-200 fixed top-0 z-40 w-full flex items-center justify-between p-5 px-20 ${scrolled ? 'bg-white' : 'bg-transparent'}  `}>
            <div className="flex items-center">
                <a href="/">
                    <img src={Logo} alt="the movie db" className="md:w-[40px]" />
                </a>
                <ul className="flex items-center ml-10">
                    <a href="">
                        <li className="mx-5 text-md font-[500] border-b-[2px] border-b-transparent hover:border-b-black transition duration-200">
                            Waralaba
                        </li>
                    </a>
                    <a href="">
                        <li className="mx-5 text-md font-[500] border-b-[2px] border-b-transparent hover:border-b-black transition duration-200">
                            Riwayat
                        </li>
                    </a>
                </ul>
            </div>
            <div className="flex items-center">
                {
                    token ?
                        <Button className="bg-red-500 text-sm">
                            <GiBalaclava size={20} />
                            <Typography className="ml-3" thickness="bold">logout</Typography>
                        </Button>
                        :
                        <a href="/login">
                            <div className={modul.shadow_btn}>
                                <Button className="text-sm min-w-[80px] font-semibold transition duration-400 bg-transparent hover:bg-green-600 hover:text-white">
                                    Masuk / daftar
                                </Button>
                            </div>
                        </a>
                }
            </div>
        </nav>
    );
}

export default Navbar;
