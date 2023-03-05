import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Button from "@/components/button/Button";
import AppLayout from "@/components/partials/layout/AppLayout";
import Typography from "@/components/typography/Typography";
import { BiPackage, BiStore } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill, BsShareFill } from "react-icons/bs";

import { MdLocationOn } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";

import { RiShoppingBasketLine } from "react-icons/ri";
import AboutCompany from "@/feature/franchise/components/AboutCompany";
import ChatDrawer from "@/feature/franchise/components/ChatDrawer";

import { useState, useEffect } from "react"
import PaymentForm from "@/feature/franchise/components/PaymentForm";
import { useParams } from "react-router-dom";
import { getFranchiseDetail } from "@/feature/franchise/service/getFranchiseDetail";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Franchise } from "@/models/dto/franchise";
import { rupiahFormatter } from "@/utils/rupiahFormatter";
import { saveFranchise } from "@/feature/franchise/service/saveFranchise";
import { removeFranchise } from "@/feature/franchise/service/removeFranchise";

import { franchise as franchiseValue } from "@/models/defaultValue/franchise";

import { Socket } from "socket.io-client";
import { getLinks } from "@/feature/franchise/utils/dummy";
import { createRoom } from "@/feature/chat/service/createRoom";

const DetailWaralaba = ({ socket }: { socket: Socket }) => {
    const [visible, setVisible] = useState(false)
    const [visiblePayment, setVisiblePayment] = useState(false)
    const [token] = useLocalStorage('token', '');
    const { franchiseId } = useParams();
    const [franchise, setFranchise] = useState<Franchise>(franchiseValue);
    const [imageUrl, setImageUrl] = useState<string[]>([]);
    const [saved, setSaved] = useState<boolean>(franchise.saved === 1);
    const [chatData, setChatData] = useState({ id: 0 });

    useEffect(() => {
        setSaved(franchise?.saved === 1)
    }, [franchise?.saved])

    useEffect(() => {
        const getDetail = async () => {
            const id = franchiseId === undefined ? 0 : franchiseId

            try {
                const result = await getFranchiseDetail(token.token, id)

                console.log(result);

                setFranchise(result?.data.data)

                const imgUrl = result?.data.data.image_url;

                setImageUrl(JSON.parse(imgUrl))
            } catch (error) {
                console.error(error)
            }
        }

        getDetail()
    }, [])

    const save = async () => {
        try {
            const result = await saveFranchise(token.token, franchise?.id!);

            console.log(result);

            setSaved(true)
        } catch (error) {
            console.error(error)
        }
    }

    const removeFromSaved = async () => {
        try {
            const result = await removeFranchise(token.token, franchise?.savedCompanyId!)

            console.log(result);

            setSaved(false)

        } catch (error) {
            console.error(error);
        }
    }

    const createChatRoom = async () => {
        try {
            const result = await createRoom(token.token, franchise?.id!)

            console.log(result);

            setVisible(true)

            setChatData(result?.data.data)
            
        } catch (error) {
            console.error(error);
            setVisible(false)
        }
    }

    return (
        <AppLayout>
            <BreadCrumbs
                links={getLinks({ franchise, id: franchiseId })}
            />
            <main className="md:px-20 px-5 mt-10">
                <div className="flex items-stretch justify-between md:flex-row flex-col">
                    <div className="md:w-[70%] w-full bg-cover bg-center min-h-[400px] rounded-xl" style={{ backgroundImage: `url(${imageUrl[0]})` }} />
                    <div className="md:w-[30%] flex md:flex-col flex-row justify-between md:ml-5 md:mt-0 mt-5">
                        <div className="bg-cover bg-center w-full min-h-[200px] rounded-xl md:mb-5 md:mr-0 mr-5" style={{ backgroundImage: `url(${imageUrl[1]})` }} />
                        <div className="bg-cover bg-center w-full min-h-[200px] rounded-xl" style={{ backgroundImage: `url(${imageUrl[2]})` }} />
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <Typography className="text-3xl my-3 mt-10" thickness="bold">
                            {franchise?.outlet_name}
                        </Typography>
                        <Typography className="text-xl" thickness="bold">
                            {franchise?.name}
                        </Typography>
                        <Typography className="mt-3"><span className="font-semibold">Gerai</span> {franchise?.outlet_count} | <MdLocationOn className="inline" size={20} />{franchise?.city_name}</Typography>
                        <Typography thickness="bold" className="mt-7 md:text-4xl text-xl">
                            {rupiahFormatter(franchise?.price!)}
                        </Typography>
                        <Typography thickness="bold" className="my-4">
                            Fasilitas
                        </Typography>
                        <div className="flex flex-wrap">
                            <div>
                                <Button className="my-2 min-w-[100px]">
                                    <BiStore size={25} />
                                    <Typography className="ml-3">
                                        Booth
                                    </Typography>
                                </Button>
                                <Button className="my-4 min-w-[100px]">
                                    <BiPackage size={25} />
                                    <Typography className="ml-3">
                                        Peralatan Kerja
                                    </Typography>
                                </Button>
                            </div>
                            <div className="md:ml-5">
                                <Button className="my-2 min-w-[100px]">
                                    <RiShoppingBasketLine size={25} />
                                    <Typography className="ml-3">
                                        Bahan Baku
                                    </Typography>
                                </Button>
                                <Button className="my-4 min-w-[100px]">
                                    <CiCoffeeCup size={25} />
                                    <Typography className="ml-3">
                                        500 cup
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                        <AboutCompany
                            data={franchise}
                        />
                    </div>
                    <div className="md:min-w-[330px] mt-10 md:sticky md:top-24 fixed bottom-0 bg-white left-0 right-0 md:p-5 p-7 md:pb-7 md:rounded-xl pb-10 shadow">
                        <Button onClick={createChatRoom} className="border-[1.5px] border-primary w-full text-primary">Hubungi Perusahaan</Button>
                        <Button onClick={() => { setVisiblePayment(true) }} className="border-[1.5px] border-primary bg-primary w-full text-white mt-3">Daftar Waralaba</Button>
                        <div className="flex items-center justify-between mt-3">
                            {
                                saved ?
                                    <Button onClick={removeFromSaved} className="w-[47%] border-[1.5px] border-primary text-primary flex items-center">
                                        <BsBookmarkFill />
                                        <Typography className="ml-2">Hapus</Typography>
                                    </Button>
                                    :
                                    <Button onClick={save} className="w-[47%] border-[1.5px] border-gray-500 text-gray-500 flex items-center">
                                        <BsBookmark />
                                        <Typography className="ml-2">Simpan</Typography>
                                    </Button>
                            }
                            <Button className="w-[47%] border-[1.5px] border-gray-500 text-gray-500 flex items-center">
                                <BsShareFill />
                                <Typography className="ml-2">Bagikan</Typography>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <ChatDrawer
                visible={visible}
                setVisible={setVisible}
                chatData={chatData}
                setChatData={setChatData}
                socket={socket}
            />
            <PaymentForm
                visiblePayment={visiblePayment}
                setVisiblePayment={setVisiblePayment}
                total_price={rupiahFormatter(franchise.price!.toString())}
            />
        </AppLayout>
    );
}

export default DetailWaralaba;
