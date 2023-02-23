import Typography from "@/components/typography/Typography";
import Home1 from "@/assets/home-1.png"
import Home2 from "@/assets/home-2.png"
import Home3 from "@/assets/home-3.png"

const Main = () => {
    return ( 
        <main className="p-10 px-40 bg-primary mt-20 w-full text-white">
            <Typography className="text-center text-3xl font-semibold capitalize md:w-[50%] mx-auto leading-10">portal kemitraan waralaba terbaik untuk anda</Typography>
            <div className="flex items-center justify-between mt-20">
                <div className="md:w-[50%]">
                    <Typography className="capitalize font-[600] text-[23px]">berbagai pilihan waralaba terbaik di seluruh indonesia</Typography>
                    <Typography className="first-letter:capitalize mt-5 text-[18px]">temukan berbagai waralaba potensial yang telah melalui proses kurasi secara ketat</Typography>
                </div>
                <img src={Home1} className="md:w-[30%] bg-cover bg-center rounded-xl"/>
            </div>
            <div className="flex flex-row-reverse items-center justify-between mt-20">
                <div className="md:w-[50%]">
                    <Typography className="capitalize font-semibold text-2xl">proses klaim waralaba yang mudah dan cepat</Typography>
                    <Typography className="first-letter:capitalize mt-5 text-[18px]">sesuaikan modal dan dapatkan aset bisnis waralaba anda</Typography>
                </div>
                <img src={Home2} className="md:w-[30%] bg-cover bg-center rounded-xl"/>
            </div>
            <div className="flex items-center justify-between mt-20">
                <div className="md:w-[50%]">
                    <Typography className="capitalize font-semibold text-2xl">diskusi langsung kepada perusahaan yang anda minati</Typography>
                    <Typography className="first-letter:capitalize mt-5 text-[18px]">hubungi perusahaan penyedia waralaba untuk berdiskusi ataupun bernegosiasi</Typography>
                </div>
                <img src={Home3} className="md:w-[40%] bg-cover bg-center rounded-xl"/>
            </div>
        </main>
     );
}
 
export default Main;
