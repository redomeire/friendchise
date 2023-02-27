import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import CardFranchise from "@/feature/franchise/components/CardFranchise";
import FilterFranchise from "@/feature/franchise/components/FilterFranchise";
import { BiSearch } from "react-icons/bi";

import { useState } from "react";
import { BsFilter } from "react-icons/bs";

const Waralaba = () => {
    const [visible, setVisible] = useState(false)

    return (
        <AppLayout>
            <div className="flex items-center justify-between md:px-20 px-10 md:flex-row flex-col">
                <div className="md:w-[30%] w-full md:mb-0 mb-5">
                    <Input
                        type="text"
                        className="w-full rounded-full focus:shadow transition duration-200"
                        placeholder="Cari waralaba"
                        beginningIcon={<BiSearch size={20} />}
                    />
                </div>
                <select className="md:w-[50%] w-full border border-gray-300 p-2 rounded-full outline-none md:mb-0 mb-5">
                    <option>choose</option>
                </select>
                <Button className="bg-primary text-white font-semibold md:w-[150px] w-full">Cari</Button>
                <Button onClick={() => { setVisible(true) }} className="border-primary text-primary border-[2.5px] font-semibold md:w-[150px] w-full md:hidden mt-5">
                    <BsFilter size={25}/>
                    <Typography className="ml-3">
                        Filter
                    </Typography>
                </Button>
            </div>
            <div className="w-full flex items-start justify-between mt-10 md:px-20 px-10">
                <FilterFranchise
                    visible={visible}
                    setVisible={setVisible}
                />
                <div className=" md:w-[70%] w-full md:ml-5 pb-4 flex justify-between flex-wrap">
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
