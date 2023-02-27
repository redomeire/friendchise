import Typography from "@/components/typography/Typography";
import Home1 from "@/assets/home-1.png"
import Home2 from "@/assets/home-2.png"
import Home3 from "@/assets/home-3.png"

const Main = () => {
    return ( 
        <main className="p-10 pb-20 md:px-40 px-10 bg-primary mt-20 w-full text-white">
            <Typography className="text-center md:text-3xl text-2xl font-semibold capitalize md:w-[50%] mx-auto leading-10">portal kemitraan waralaba terbaik untuk anda</Typography>
            <div className="flex items-center md:flex-row flex-col-reverse justify-between mt-20">
                <div className="md:w-[50%]">
                    <Typography className="capitalize font-[600] md:text-[23px] text-[20px]">berbagai pilihan waralaba terbaik di seluruh indonesia</Typography>
                    <Typography className="first-letter:capitalize mt-5 sm:text-[18px] text-sm">temukan berbagai waralaba potensial yang telah melalui proses kurasi secara ketat</Typography>
                </div>
                <img src={Home1} className="md:w-[30%] w-[250px] md:mb-0 mb-10 bg-cover bg-center rounded-xl"/>
            </div>
            <div className="flex md:flex-row-reverse flex-col-reverse items-center justify-between mt-20">
                <div className="md:w-[50%]">
                    <Typography className="capitalize font-semibold md:text-2xl text-[20px]">proses klaim waralaba yang mudah dan cepat</Typography>
                    <Typography className="first-letter:capitalize mt-5 md:text-[18px] text-[15px]">sesuaikan modal dan dapatkan aset bisnis waralaba anda</Typography>
                </div>
                <img src={Home2} className="md:w-[30%] w-[250px] md:mb-0 mb-10 bg-cover bg-center rounded-xl"/>
            </div>
            <div className="flex items-center md:flex-row flex-col-reverse justify-between mt-20">
                <div className="md:w-[50%]">
                    <Typography className="capitalize font-semibold md:text-2xl text-[20px]">diskusi langsung kepada perusahaan yang anda minati</Typography>
                    <Typography className="first-letter:capitalize mt-5 md:text-[18px] text-[15px]">hubungi perusahaan penyedia waralaba untuk berdiskusi ataupun bernegosiasi</Typography>
                </div>
                <img src={Home3} className="md:w-[40%] w-[300px] md:mb-0 mb-10 bg-cover bg-center rounded-xl"/>
            </div>
        </main>
     );
}
 
export default Main;
