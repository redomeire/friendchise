import Qris from "@/assets/payment/qris.png";
import Ovo from "@/assets/payment/ovo.png";
import Gopay from "@/assets/payment/gopay.png";
import Dana from "@/assets/payment/dana.png";
import Bca from "@/assets/payment/bca.png";
import Linkaja from "@/assets/payment/linkaja.png";
import Shopeepay from "@/assets/payment/shopeepay.png";
import Bri from "@/assets/payment/bri.png";
import Mandiri from "@/assets/payment/mandiri.png";
import Bni from "@/assets/payment/bni.png";
import { Franchise } from "@/models/dto/franchise";

const payment = [
    {
        name: 'isi identitas',
        tab: 1
    },
    {
        name: 'metode pembayaran',
        tab: 2
    },
    {
        name: 'detail pembayaran',
        tab: 3
    }
]

const paymentMethod = [
    {
        name: 'Qris',
        logo: Qris
    },
    {
        name: 'Ovo',
        logo: Ovo
    },
    {
        name: 'Gopay',
        logo: Gopay
    },
    {
        name: 'Dana',
        logo: Dana
    },
    {
        name: 'BCA',
        logo: Bca
    },
    {
        name: 'Linkaja',
        logo: Linkaja
    },
    {
        name: 'Shopeepay',
        logo: Shopeepay
    },
    {
        name: 'BRI',
        logo: Bri
    },
    {
        name: 'Mandiri',
        logo: Mandiri
    },
    {
        name: 'BNI',
        logo: Bni
    },
]

const getLinks = ({ franchise, id }: { franchise: Franchise, id?: string }) => {
    const links = [
        {
            name: 'Waralaba',
            url: '/waralaba?name=&city_id='
        },
        {
            name: 'Lokasi',
            url: '/lokasi'
        },
        {
            name: franchise?.city_name! || 'Indonesia',
            url: `/waralaba?name=&city_id=${franchise?.city_id}`
        },
        {
            name: 'Outlet / Restoran',
            url: `/waralaba/${id}`
        },
    ]

    return links
}

export {
    payment,
    paymentMethod,
    getLinks
}
