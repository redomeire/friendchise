import Navbar from "@/components/partials/appbar/Navbar";
import Footer from "@/components/partials/footer/Footer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
            <div>
                <Navbar />
                <div className="pt-24 pb-32 min-h-screen">
                    {children}
                </div>
                <Footer />
            </div>
    );
}

export default AppLayout;
