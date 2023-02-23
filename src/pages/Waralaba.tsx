import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import CardFranchise from "@/feature/franchise/components/CardFranchise";
import FilterFranchise from "@/feature/franchise/components/FilterFranchise";
import { BiSearch } from "react-icons/bi";

import { HiLocationMarker } from "react-icons/hi";

const Waralaba = () => {
    return (
        <AppLayout>
            <div className="flex items-center justify-between px-20">
                <div className="md:w-[30%]">
                    <Input
                        type="text"
                        className="w-full rounded-full focus:shadow transition duration-200"
                        placeholder="Cari waralaba"
                        beginningIcon={<BiSearch size={20} />}
                    />
                </div>
                <select className="md:w-[50%] border border-gray-300 p-2 rounded-full outline-none">
                    <option>choose</option>
                </select>
                <Button className="bg-primary text-white font-semibold md:w-[150px]">Cari</Button>
            </div>
            <div className="w-full flex items-start justify-between mt-10 px-20">
                <FilterFranchise />
                <div className=" w-[70%] md:ml-5 pb-4 flex justify-between flex-wrap">
                    <CardFranchise/>
                    <CardFranchise/>
                    <CardFranchise/>
                    <CardFranchise/>
                    <CardFranchise/>
                </div>
            </div>
        </AppLayout>
    );
}

export default Waralaba;
