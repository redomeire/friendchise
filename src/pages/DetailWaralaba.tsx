import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";
import AppLayout from "@/components/partials/layout/AppLayout";

const DetailWaralaba = () => {
    const links = [
        {
            name: 'Waralaba',
            url: '/waralaba'
        },
        {
            name: 'Lokasi',
            url: '/lokasi'
        },
        {
            name: 'Jawa Tengah',
            url: '/waralaba'
        },
        {
            name: 'Outlet / Restoran',
            url: '/waralaba'
        },
    ]

    return (
        <AppLayout>
            <BreadCrumbs
                links={links}
            />
        </AppLayout>
    );
}

export default DetailWaralaba;
