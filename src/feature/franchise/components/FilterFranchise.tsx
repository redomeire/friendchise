import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";

const FilterFranchise = () => {
    return (
        <div className="md:w-[30%] sticky top-[100px] overflow-scroll h-[80vh]">
            <div className="border rounded-xl border-gray-300 w-full">
                <div className="p-5 border-b border-b-gray-300">
                    <Typography thickness="bold">Filter Pencarian</Typography>
                </div>
                <div className="p-5 border-b border-b-gray-300">
                    <Typography thickness="bold">Tampilkan Berdasarkan</Typography>
                    <div className="flex items-center mt-3">
                        <Button className="bg-[#D3F8DF] text-primary-dark border-primary border-[1.5px]">Paling Sesuai</Button>
                        <Button className="bg-[#EAECF0] border-[1.5px] border-gray-400 ml-3">Paling Baru</Button>
                    </div>
                </div>
                <div className="p-5 border-b border-b-gray-300">
                    <Typography thickness="bold">Tampilkan Berdasarkan</Typography>
                    <div className="flex items-center justify-start mt-3">
                        <div>
                            <Input
                                type="checkbox"
                                className="accent-primary "
                            />
                        </div>
                        <label className="ml-2 text-sm">Makanan cepat saji</label>
                    </div>
                    <div className="flex items-center justify-start mt-3">
                        <div>
                            <Input
                                type="checkbox"
                            />
                        </div>
                        <label className="ml-2 text-sm">Minuman</label>
                    </div>
                    <div className="flex items-center justify-start mt-3">
                        <div>
                            <Input
                                type="checkbox"
                            />
                        </div>
                        <label className="ml-2 text-sm">Outlet/Restoran</label>
                    </div>
                </div>
                <div className="p-5">
                    <Typography thickness="bold">Modal Minimal</Typography>
                    <div className="flex items-center justify-start mt-3">
                        <div>
                            <Input
                                type="checkbox"
                            />
                        </div>
                        <label className="ml-2 text-sm">1 - 3 jt</label>
                    </div>
                    <div className="flex items-center justify-start mt-3">
                        <div>
                            <Input
                                type="checkbox"
                            />
                        </div>
                        <label className="ml-2 text-sm">3 - 5 jt</label>
                    </div>
                    <div className="flex items-center justify-start mt-3">
                        <div>
                            <Input
                                type="checkbox"
                            />
                        </div>
                        <label className="ml-2 text-sm">5 - 10 jt</label>
                    </div>
                    <div className="flex items-center justify-start mt-3">
                        <div>
                            <Input
                                type="checkbox"
                            />
                        </div>
                        <label className="ml-2 text-sm">&gt; 10 jt</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterFranchise;
