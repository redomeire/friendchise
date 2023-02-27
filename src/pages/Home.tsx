import Jumbotron from "@/components/pages/home/Jumbotron";
import Main from "@/components/pages/home/Main";
import Testimony from "@/components/pages/home/Testimony";
import AppLayout from "@/components/partials/layout/AppLayout";
import "@/components/styles/swiper.css";

const Home = () => {
    return (
        <AppLayout>
            <Jumbotron />
            <Main />
            <Testimony />
        </AppLayout>
    );
}

export default Home;
