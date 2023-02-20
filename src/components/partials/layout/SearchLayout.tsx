import Navbar from "@/components/partials/appbar/Navbar";
import Sidebar from "@/components/partials/appbar/Sidebar";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="md:pl-[280px] pt-24 pb-32 pr-5 bg-black min-h-screen text-white">
                {children}
            </div>
        </div>
    );
}

export default SearchLayout;
