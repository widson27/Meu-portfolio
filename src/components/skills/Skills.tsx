import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiStyledcomponents } from "react-icons/si";


function Skills() {
    return (
        <section className="w-full pb-[100px] flex items-center justify-center">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="font-bold text-3xl text-center">Habilidades</h2>
                <div className="gap-4 grid grid-cols-3 md:grid-cols-6 w-full mt-20">
                    <div className="bg-[#1F2937] hover:scale-105 duration-300 flex flex-col w-20 h-20 md:w-25 md:h-25 rounded-lg items-center justify-center gap-2 p-2">
                        <IoLogoJavascript className="w-10 h-10 bg-black text-yellow-300" />
                        <p className="font-bold text-sm">JavaScript</p>
                    </div>
                    <div className="bg-[#1F2937] hover:scale-105 duration-300 flex flex-col w-20 h-20 md:w-25 md:h-25 rounded-lg items-center justify-center gap-2 p-2">
                        <FaReact className="w-10 h-10 bg-none text-cyan-300" />
                        <p className="font-bold text-sm">React</p>
                    </div>
                    <div className="bg-[#1F2937] hover:scale-105 duration-300 flex flex-col w-20 h-20 md:w-25 md:h-25 rounded-lg items-center justify-center gap-2 p-2">
                        <RiNextjsFill className="w-10 h-10 text-black" />
                        <p className="font-bold text-sm">NextJS</p>
                    </div>
                    <div className="bg-[#1F2937] hover:scale-105 duration-300 flex flex-col w-20 h-20 md:w-25 md:h-25 rounded-lg items-center justify-center gap-2 p-2">
                        <SiTypescript className="w-10 h-10 bg-white rounded-md text-blue-500" />
                        <p className="font-bold text-sm">Typescript</p>
                    </div>
                    <div className="bg-[#1F2937] hover:scale-105 duration-300 flex flex-col w-20 h-20 md:w-25 md:h-25 rounded-lg items-center justify-center gap-2 p-2">
                        <SiStyledcomponents  className="w-10 h-10 text-pink-500" />
                        <p className="font-bold text-center text-sm">Styled<br/>Components</p>
                    </div>
                    <div className="bg-[#1F2937] hover:scale-105 duration-300 flex flex-col w-20 h-20 md:w-25 md:h-25 rounded-lg items-center justify-center gap-2 p-2">
                        <FaWordpress  className="w-10 h-10 text-blue-500" />
                        <p className="font-bold text-sm">Wordpress</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;