import Navbar from "@/components/partials/appbar/Navbar";
import Footer from "@/components/partials/footer/Footer";
import LoginForm from "@/feature/auth/components/LoginForm";
import { useParams } from "react-router-dom";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const { franchiseId } = useParams();

    return (
        <div>
            <Navbar />
            <div className={`${franchiseId ? 'pt-20' : 'pt-32'} pb-32 min-h-screen`}>
                {children}
            </div>
            <Footer />
            <LoginForm />
        </div>
    );
}

export default AppLayout;
