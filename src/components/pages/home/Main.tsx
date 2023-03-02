import Typography from "@/components/typography/Typography";
import Home1 from "@/assets/home-1.png"
import Home2 from "@/assets/home-2.png"
import Home3 from "@/assets/home-3.png"

const Main = () => {
    return (
        <main className="p-10 pb-28 md:px-32 px-10 bg-primary mt-20 w-full text-white rounded-tl-3xl rounded-br-3xl">
            <Typography className="text-center md:text-3xl text-2xl font-semibold capitalize md:w-[50%] mx-auto leading-10">portal kemitraan waralaba terbaik untuk anda</Typography>
            <div className="flex items-stretch flex-wrap justify-center mt-10">
                <div className="cursor-pointer m-3 rounded-xl p-5 min-w-[300px] lg:w-[300px] sm:w-full w-[300px] min-h-[300px] flex flex-col items-center hover:shadow-xl transition duration-200 bg-[#3EC87E]">
                    <img src={Home1} className="h-[150px] md:mb-0 mb-10 bg-cover bg-center rounded-xl" />
                    <Typography className="text-[15px] capitalize font-semibold my-4 text-center">
                        berbagai pilihan waralaba terbaik di seluruh indonesia
                    </Typography>
                    <Typography className="text-sm text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam quasi iure harum repudiandae. Incidunt!
                    </Typography>
                </div>
                <div className="cursor-pointer m-3 rounded-xl p-5 hover:shadow-xl transition duration-200 min-w-[300px] lg:w-[300px] sm:w-full w-[300px] min-h-[300px] flex flex-col items-center bg-[#3EC87E]">
                    <img src={Home2} className="h-[150px] md:mb-0 mb-10 bg-cover bg-center rounded-xl" />
                    <Typography className="text-[15px] capitalize font-semibold my-4 text-center">
                        berbagai pilihan waralaba terbaik di seluruh indonesia
                    </Typography>
                    <Typography className="text-sm text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam quasi iure harum repudiandae. Incidunt!
                    </Typography>
                </div>
                <div className="cursor-pointer m-3 rounded-xl p-5 hover:shadow-xl transition duration-200 min-w-[300px] lg:w-[300px] sm:w-full w-[300px] min-h-[300px] flex flex-col items-center bg-[#3EC87E]">
                    <img src={Home3} className="h-[150px] md:mb-0 mb-10 bg-cover bg-center rounded-xl" />
                    <Typography className="text-[15px] capitalize font-semibold my-4 text-center">
                        berbagai pilihan waralaba terbaik di seluruh indonesia
                    </Typography>
                    <Typography className="text-sm text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam quasi iure harum repudiandae. Incidunt!
                    </Typography>
                </div>
            </div>
        </main>
    );
}

export default Main;
