import Loading from "@/assets/loading_new.gif";

const PaymentLoader = () => {
    return (
        <div className="min-h-screen fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
            <div className="flex items-center bg-white p-4 absolute z-40 rounded-lg ">
                <img src={Loading} className="w-full" />
            </div>
            <div className=" bg-[#0000003b] absolute top-0 left-0 right-0 bottom-0" />
        </div>
    );
}

export default PaymentLoader;
