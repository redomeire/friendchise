import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";

import { AiOutlineSearch } from "react-icons/ai";
import Button from "@/components/button/Button";
import { useNavigate } from "react-router-dom";
import React from "react";

const Jumbotron = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('');

    return (
        <div className="mx-auto px-20 p-5 md:w-[65%] text-center mt-10 min-h-[60vh]">
            <Typography variant="heading3" className="capitalize leading-[50px]" thickness="bold">
                mulai bisnis anda dengan cepat dan mudah
            </Typography>
            <p className="text-md text-center mt-5">
                Memulai bisnis dengan manajemen yang sudah teruji. Didukung penuh oleh partner profesional dengan modal terjangkau
            </p>
            <form className="mt-10 w-full flex items-center">
                <Input
                    beginningIcon={<AiOutlineSearch size={25} />}
                    type={'text'}
                    className="w-full rounded-full focus:shadow-md"
                    placeholder="cari waralaba"
                    onChange={e => { setValue(e.target.value) }}
                />
                <Button 
                onClick={() => { navigate(`/search?q=${value}`) }}
                className="ml-5 bg-green-600 min-w-[150px] font-semibold text-white">Cari</Button>
            </form>
        </div>
    );
}

export default Jumbotron;
