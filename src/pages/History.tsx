import Button from "@/components/button/Button";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import CardHistory from "@/feature/history/components/CardHistory";
import { tabs } from "@/feature/history/utils/dummy";

import { useState } from "react";

const History = () => {
    const [tab, setTab] = useState<'semua' | 'berlangsung' | 'berhasil' | 'gagal' | string>('semua')

    return (
        <AppLayout>
            <div className="w-full px-20">
                <Typography thickness="bold" className="text-2xl">
                    Daftar Transaksi
                </Typography>
                <div className="flex items-center mt-5">
                    <Typography thickness="bold" className="text-lg">
                        Status
                    </Typography>
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
                <div className="mt-10">
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                </div>
            </div>
        </AppLayout>
    );
}

export default History;
