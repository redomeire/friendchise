import AppLayout from "@/components/partials/layout/AppLayout";
import RegisterForm from "@/feature/auth/components/RegisterForm";

// image
import Image from "@/assets/register.png";

const Register = () => {
    return (
        <AppLayout>
            <div className="flex items-start justify-between px-20">
                <RegisterForm />
                <div className="md:w-[45%] sticky top-48">
                    <img src={Image} className="w-full" />
                </div>
            </div>
        </AppLayout>
    );
}

export default Register;
