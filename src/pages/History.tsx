import Button from "@/components/button/Button";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import CardHistory from "@/feature/history/components/CardHistory";
import { tabs } from "@/feature/history/utils/dummy";

import { useState, useEffect } from "react";

import scrollbar from "@/components/styles/scrollbar.module.css";
import { getHistory } from "@/feature/history/service/getHistory";
import useLocalStorage from "@/hooks/useLocalStorage";

import { History as HistoryType } from "@/models/dto/history";

const History = () => {
    const [tab, setTab] = useState<'semua' | 'berlangsung' | 'berhasil' | 'gagal' | string>('semua')
    const [histories, setHistories] = useState<HistoryType[]>([])
    const [token] = useLocalStorage('token', '')

    useEffect(() => {
        const get = async () => {
            try {
                const result = await getHistory(token.token, tab)

                console.log(result);

                setHistories(result?.data.data)
            } catch (error) {
                console.error(error);
            }
        }

        get()
    }, [])

    return (
        <AppLayout>
            <div className="w-full md:px-20 px-5">
                <Typography thickness="bold" className="text-2xl">
                    Daftar Transaksi
                </Typography>
                <div className="flex items-center mt-5 md:w-fit">
                    <Typography thickness="bold" className="text-lg">
                        Status
                    </Typography>
                    <div className={`flex items-center overflow-auto ${scrollbar.scrollbar_hide}`}>
                        {
                            tabs.map((item, index) => {
                                return (
                                    <Button onClick={() => { setTab(item.name) }} key={index} className={`${item.name === tab ? 'bg-primary-darker text-white border-primary-darker' : 'text-gray-600 border-gray-600'} border-[1.5px] hover:bg-primary-darker hover:text-white hover:border-primary-darker transition duration-200 mx-3 min-w-[100px] ${tab}`}>
                                        <Typography className="text-sm p-1">
                                            {item.name}
                                        </Typography>
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mt-10">
                    {
                        histories.filter((item) => {
                            if(tab === 'semua') return item

                            return item.status === tab
                        }).map((history, index) => {
                            return (
                                <CardHistory
                                    key={index}
                                    outlet_name={history.outlet_name}
                                    company_name={history.name}
                                    status={history.status}
                                    total_price={history.total_price}
                                    created_at={history.created_at}
                                    img_url={history.image_thumbnail}
                                    company_id={history.company_id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </AppLayout>
    );
}

export default History;
