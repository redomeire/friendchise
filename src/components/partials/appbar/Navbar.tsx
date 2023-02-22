import Button from "@/components/button/Button";
import { GiBalaclava } from "react-icons/gi";

import useLocalStorage from "@/hooks/useLocalStorage";
import Typography from "@/components/typography/Typography";

// assets
import Logo from "@/assets/logo_friendchise_green.svg";
import modul from "@/components/styles/button.module.css";
import { useContext, useState } from "react";
import { LoginContext } from "@/context/LoginContext";

const Navbar = () => {
    const [token] = useLocalStorage('session_id', '')
    const [scrolled, setScrolled] = useState(false);
    const { setVisible } = useContext(LoginContext);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50)
            setScrolled(true)

        else setScrolled(false);
    })

    return (
        <nav className={`transition duration-200 fixed top-0 z-20 w-full flex items-center justify-between p-5 px-20 ${scrolled ? 'bg-white' : 'bg-transparent'}  `}>
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
                        <div onClick={() => { setVisible(prev => !prev) }} className="flex items-center">
                            <Button className="text-sm font-semibold transition duration-400 border-primary border-[2px] text-primary min-w-[100px] mr-3">
                                Daftar
                            </Button>
                            <Button className="text-sm min-w-[100px] font-semibold transition duration-400 bg-green-600 text-white">
                                Masuk
                            </Button>
                        </div>
                }
            </div>
        </nav>
    );
}

export default Navbar;
