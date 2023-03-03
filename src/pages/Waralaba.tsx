import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import CardFranchise from "@/feature/franchise/components/CardFranchise";
import FilterFranchise from "@/feature/franchise/components/FilterFranchise";
import { BiSearch } from "react-icons/bi";

import { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { searchFranchise } from "@/feature/franchise/service/searchFranchise";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Franchise } from "@/models/dto/franchise";
import { getCities } from "@/feature/franchise/service/getCities";
import { City } from "@/models/dto/city";
import { useSearchParams } from "react-router-dom";

const Waralaba = () => {
    const [visible, setVisible] = useState(false)
    const [token] = useLocalStorage('token', '')
    const [forms, setForms] = useState({
        name: '',
        city_id: ''
    });
    const [franchises, setFranchises] = useState<Franchise[]>([]);
    const [cities, setCities] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSearch = async () => {
        try {
            const result = await searchFranchise(token.token, searchParams.get('name')!, searchParams.get('city_id')!)

            setFranchises(result?.data.data)

            console.log(result);
            

        } catch (error) {
            console.error(error)
        }
    }

    const getCity = async () => {
        try {
            const result = await getCities(token.token)

            console.log(result);

            setCities(result?.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCity()
        handleSearch()
    }, [searchParams])

    return (
        <AppLayout>
            <form onSubmit={handleSearch} className="flex items-center justify-between md:px-20 px-10 md:flex-row flex-col">
                <div className="md:w-[30%] w-full md:mb-0 mb-5">
                    <Input
                        name="name"
                        type="text"
                        defaultValue={searchParams.get('name')}
                        className="w-full rounded-full focus:shadow transition duration-200"
                        placeholder="Cari waralaba"
                        beginningIcon={<BiSearch size={20} />}
                        onChange={e => {
                            setForms(prev => {
                                return { ...prev, name: e.target.value }
                            })
                        }}
                    />
                </div>
                <select defaultValue={searchParams.get('city_id')!} name="city_id" onChange={e => {
                    setForms(prev => {
                        return { ...prev, city_id: e.target.value }
                    })
                }} className="md:w-[50%] w-full border border-gray-300 p-2 rounded-full outline-none md:mb-0 mb-5">
                    <option selected value="">Semua</option>
                    {
                        cities.map((city: City, index) => {
                            return (
                                <option key={index} value={city.id}>{city.name}</option>
                            )
                        })
                    }
                </select>
                <Button type="submit" className="bg-primary text-white font-semibold md:w-[150px] w-full">Cari</Button>
                <Button type="button" onClick={() => { setVisible(true) }} className="border-primary text-primary border-[2.5px] font-semibold md:w-[150px] w-full md:hidden mt-5">
                    <BsFilter size={25} />
                    <Typography className="ml-3">
                        Filter
                    </Typography>
                </Button>
            </form>
            <div className="w-full flex items-start justify-between mt-10 md:px-20 px-10">
                <FilterFranchise
                    visible={visible}
                    setVisible={setVisible}
                />
                <div className=" md:w-[70%] w-full md:ml-5 pb-4 flex justify-between flex-wrap">
                    {
                        franchises.map((franchise: Franchise, index) => {
                            return (
                                <CardFranchise
                                    franchise={franchise}
                                    key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </AppLayout>
    );
}

export default Waralaba;
