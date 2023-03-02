import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";

import { AiOutlineSearch } from "react-icons/ai";
import Button from "@/components/button/Button";
import { useNavigate } from "react-router-dom";
import React from "react";

import Hero from "@/assets/home/hero.png";

const Jumbotron = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('');

    return (
        <div className="md:px-20 px-8 p-5 min-h-[60vh] flex items-center lg:flex-row flex-col-reverse justify-between">
            <div className="md:w-[45%]">
                <Typography className="capitalize leading-[50px] md:text-[36px] text-[32px] md:font-[700] font-[600]">
                    mulai bisnis anda dengan cepat dan mudah
                </Typography>
                <p className="text-md mt-5">
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
                        className="md:ml-5 bg-primary md:min-w-[150px] font-semibold text-white md:mt-0 mt-5 min-w-full">
                            <Typography className="p-1">
                                Cari
                            </Typography>
                        </Button>
                </form>
            </div>
            <div className="lg:w-[40%] w-[70%] lg:mb-0 mb-10">
                <img src={Hero} className="w-full"/>
            </div>
        </div>
    );
}

export default Jumbotron;
