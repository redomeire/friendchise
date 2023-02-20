import Jumbotron from "@/components/pages/home/Jumbotron";
import Main from "@/components/pages/home/Main";
import AppLayout from "@/components/partials/layout/AppLayout";

const Home = () => {
    return ( 
        <AppLayout>
            <Jumbotron/>
            <Main/>
        </AppLayout>
     );
}
 
export default Home;
