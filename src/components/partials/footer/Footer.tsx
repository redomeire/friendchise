import Logo from "@/assets/logo_friendchise_white.png";
import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";

const Footer = () => {
    return (
        <footer className="bg-primary md:py-10 py-5 md:px-20 px-5 text-white flex items-center justify-between md:flex-row flex-col">
            <div className="md:w-[40%]">
                <img src={Logo} className="w-[60px]" />
                <Typography className="text-lg my-5 font-semibold">friendchise indonesia</Typography>
                <Typography className="font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, doloribus ut aspernatur in placeat officiis a voluptatibus nemo illum ipsum praesentium incidunt vitae sint nobis! Provident, sed aut. Eveniet, tenetur.</Typography>
                <div className="flex items-center mt-5">
                    <Button className="mr-5 bg-white text-primary">
                        <FaInstagram size={25} />
                    </Button>
                    <Button className="mr-5 bg-white text-primary">
                        <TfiFacebook size={25} />
                    </Button>
                    <Button className="mr-5 bg-white text-primary">
                        <FaTwitter size={25} />
                    </Button>
                    <Button className="mr-5 bg-white text-primary">
                        <FaLinkedin size={25} />
                    </Button>
                </div>
                <Typography className="mt-5 text-sm">&copy; 2023 PT. Friendchise Indonesia Group</Typography>
            </div>
            <div className="flex items-start justify-between md:flex-nowrap flex-wrap md:w-[50%] xl:mt-0 mt-10">
                <div className="xl:ml-10 md:w-[30%] sm:mb-0 mb-5 sm:w-fit w-full">
                    <Typography className="font-semibold text-lg mb-3">Friendchise</Typography>
                    <ul>
                        <li className="my-4 text-sm cursor-pointer hover:underline">Waralaba</li>
                        <li className="my-4 text-sm cursor-pointer hover:underline">Riwayat</li>
                        <li className="my-4 text-sm cursor-pointer hover:underline">Disimpan</li>
                        <li className="my-4 text-sm cursor-pointer hover:underline">Profil</li>
                    </ul>
                </div>
                <div className="sm:mx-10 sm:w-fit w-full sm:mb-0 mb-5">
                    <Typography className="font-semibold text-lg mb-3">Bantuan</Typography>
                    <ul>
                        <li className="my-4 text-sm cursor-pointer hover:underline">Pesan</li>
                        <li className="my-4 text-sm cursor-pointer hover:underline">FAQ</li>
                        <li className="my-4 text-sm cursor-pointer hover:underline">Disimpan</li>
                        <li className="my-4 text-sm cursor-pointer hover:underline whitespace-nowrap">Kebijakan privasi</li>
                    </ul>
                </div>
                <div className="md:ml-5 sm:w-[30%]">
                    <Typography className="font-semibold text-lg mb-4">Alamat</Typography>
                    <Typography className="text-sm leading-6">
                        Jl. Veteran No.8, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145
                    </Typography>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
