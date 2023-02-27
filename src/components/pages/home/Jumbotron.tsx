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
        <div className="mx-auto md:px-20 px-8 p-5 md:w-[65%] text-center mt-10 min-h-[60vh]">
            <Typography className="capitalize leading-[50px] md:text-[40px] text-[32px]" thickness="bold">
                mulai bisnis anda dengan cepat dan mudah
            </Typography>
            <p className="text-md text-center mt-5">
                Memulai bisnis dengan manajemen yang sudah teruji. Didukung penuh oleh partner profesional dengan modal terjangkau
            </p>
            <form className="mt-10 w-full flex items-center md:flex-row flex-col">
                <Input
                    beginningIcon={<AiOutlineSearch size={20} />}
                    type={'text'}
                    className="w-full"
                    placeholder="cari waralaba"
                    onChange={e => { setValue(e.target.value) }}
                />
                <Button 
                onClick={() => { navigate(`/search?q=${value}`) }}
                className="md:ml-5 bg-primary md:min-w-[150px] font-semibold text-white md:mt-0 mt-5 min-w-full">Cari</Button>
            </form>
        </div>
    );
}

export default Jumbotron;
