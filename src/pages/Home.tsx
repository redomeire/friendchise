import Jumbotron from "@/components/pages/home/Jumbotron";
import Main from "@/components/pages/home/Main";
import Testimony from "@/components/pages/home/Testimony";
import AppLayout from "@/components/partials/layout/AppLayout";
import { LoginContext } from "@/context/LoginContext";
import LoginForm from "@/feature/auth/components/LoginForm";

import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react"


const Home = () => {
    return (
        <AppLayout>
            <Jumbotron />
            <Main />
            <Testimony />
            <LoginForm />
        </AppLayout>
    );
}

export default Home;
