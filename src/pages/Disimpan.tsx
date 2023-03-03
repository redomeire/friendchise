import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import CardFranchise from "@/feature/franchise/components/CardFranchise";
import { getSavedFranchise } from "@/feature/franchise/service/getSavedFranchise";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Franchise } from "@/models/dto/franchise";

import { useState, useEffect } from "react"

const Disimpan = () => {
    const [franchises, setFranchises] = useState<Franchise[]>([])
    const [token] = useLocalStorage('token', '')

    useEffect(() => {
        const getFranchise = async () => {
            try {
                const result = await getSavedFranchise(token.token)

                console.log(result);

                setFranchises(result?.data.data)

            } catch (error) {
                console.error(error);

            }
        }

        getFranchise()
    }, [])

    return (
        <AppLayout>
            <div className="">
                <div className="w-full px-16 flex items-start flex-wrap">
                    {
                        franchises.length > 0 ?
                        franchises.map((franchise: Franchise, index) => {
                            return (
                                <CardFranchise
                                    key={index}
                                    franchise={franchise} />
                            )
                        })
                        :
                        <div className="flex items-center justify-center w-full min-h-[300px]">
                            <Typography thickness="bold" className="text-2xl">Oops... Sepertinya anda belum menyimpan franchise</Typography>
                        </div>
                    }
                </div>
            </div>
        </AppLayout>
    );
}

export default Disimpan;
