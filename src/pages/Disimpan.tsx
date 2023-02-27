import AppLayout from "@/components/partials/layout/AppLayout";
import CardFranchise from "@/feature/franchise/components/CardFranchise";

const Disimpan = () => {
    return (
        <AppLayout>
            <div className="">
                <div className="w-full px-16 flex items-start flex-wrap">
                    <CardFranchise />
                    <CardFranchise />
                    <CardFranchise />
                    <CardFranchise />
                    <CardFranchise />
                    <CardFranchise />
                </div>
            </div>
        </AppLayout>
    );
}

export default Disimpan;
