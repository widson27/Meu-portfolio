import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
    return (
        <section className="w-full pt-[300px] my-auto pb-[200px] flex items-center justify-center"  >
            <div className="flex flex-col px-4 gap-2 mx-auto">
                <h1 className="font-semibold text-base lg:text-2xl">Olá, eu sou <b className="text-[#14FFEC]">Widson Martins</b> </h1>
                <h2 className="font-bold text-3xl md:text-5xl mb-4">Desenvolvedor <b className="text-[#14FFEC]">Front-end</b></h2>
                <div className="flex items-center gap-4">
                    <a className="bg-[#1F2937] hover:scale-110 duration-300 px-2 rounded-md py-1 flex items-center justify-center gap-2 hover:text-[#14FFEC] font-bold" href="https://www.linkedin.com/in/widson-martins/" target="_blank">
                        LinkedIn
                        <FaLinkedin className="w-8 h-8" />
                    </a>
                    <a className="bg-[#1F2937] hover:scale-110 duration-300 px-2 rounded-md py-1 flex items-center justify-center gap-2 hover:text-[#14FFEC] font-bold" href="https://github.com/widson27" target="_blank">
                        GitHub
                        <FaGithub className="w-8 h-8 " />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;