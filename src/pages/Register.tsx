import AppLayout from "@/components/partials/layout/AppLayout";
import RegisterForm from "@/feature/auth/components/RegisterForm";

// image
import Image from "@/assets/register.png";
import { BsArrowLeft } from "react-icons/bs";
import Typography from "@/components/typography/Typography";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    return (
        <AppLayout>
            <div className="w-full md:px-20 px-10">
                <div className="flex items-center mb-10">
                    <BsArrowLeft onClick={() => { navigate('/') }} size={23} />
                    <Typography className="ml-5 text-2xl" thickness="bold">
                        Daftar
                    </Typography>
                </div>
            </div>
            <div className="flex md:flex-row flex-col-reverse items-start justify-between md:px-20 px-10">
                <RegisterForm />
                <div className="md:w-[45%] md:sticky md:top-48 md:mb-0 mb-10">
                    <img src={Image} className="w-full" />
                </div>
            </div>
        </AppLayout>
    );
}

export default Register;
