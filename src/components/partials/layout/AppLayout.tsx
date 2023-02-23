import Navbar from "@/components/partials/appbar/Navbar";
import Footer from "@/components/partials/footer/Footer";
import LoginForm from "@/feature/auth/components/LoginForm";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="pt-32 pb-32 min-h-screen">
                {children}
            </div>
            <Footer />
            <LoginForm />
        </div>
    );
}

export default AppLayout;
