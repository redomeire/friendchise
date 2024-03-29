import Navbar from "@/components/partials/appbar/Navbar";
import Footer from "@/components/partials/footer/Footer";
import LoginForm from "@/feature/auth/components/LoginForm";
import { useParams } from "react-router-dom";

const AppLayout = ({ children, style }: { children: React.ReactNode, style?: object }) => {
    const { franchiseId } = useParams();

    return (
        <div>
            <Navbar />
            <div className={`${franchiseId ? 'pt-20' : 'pt-32'} min-h-screen`} style={style}>
                {children}
            </div>
            {
                window.location.pathname !== '/' && <Footer />
            }
            <LoginForm />
        </div>
    );
}

export default AppLayout;
