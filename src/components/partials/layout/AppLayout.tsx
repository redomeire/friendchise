import Navbar from "@/components/partials/appbar/Navbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="pt-24 pb-32 min-h-screen">
                {children}
            </div>
        </div>
    );
}

export default AppLayout;
