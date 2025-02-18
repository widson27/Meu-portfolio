import React from "react";

function Header() {


    return (
        <div className="flex items-center fixed bg-black w-full h-[50px] justify-center z-10000 py-4">
            <div className="bg-[#121212] shadow max-w-[95%] py-1 px-4 rounded-3xl flex justify-between">
                <nav>
                    <ul className="flex gap-3 md:gap-6 font-bold text-base md:text-xl">
                        <a className="hover:text-[#14FFEC]" href="#">Home</a>
                        <a className="hover:text-[#14FFEC]" href="#sobre">Sobre</a>
                        <a className="hover:text-[#14FFEC]" href="#sobre">habilidades</a>
                        <a className="hover:text-[#14FFEC]" href="#projetos">Projetos</a>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;