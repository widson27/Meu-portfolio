import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Contatos() {
    return (
        <div className="w-[90%] lg:w-[800px] mx-auto py-[100px]">

                <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-10">
                    <div className="flex flex-col justify-between items-center gap-4">
                        <div className="flex items-center justify-center w-15 h-15 bg-[#121212] rounded-[50%]">
                            <FaWhatsapp className="w-8 h-8 text-[#14FFEC]" />
                        </div>

                        <h3 className="font-bold text-xl">WhatsApp</h3>

                        <a href="https://wa.me/5599988081419" className="text-[#14FFEC]">
                            (99) 98808-1419
                        </a>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-4">
                        <div className="flex items-center justify-center w-15 h-15 bg-[#121212] rounded-[50%]">
                            <MdOutlineMail className="w-8 h-8 text-[#14FFEC]" />
                        </div>

                        <h3 className="font-bold text-xl">E-mail</h3>

                        <a href="mailto:widsonleite69@gmail.com" className="text-[#14FFEC]">
                            widsonleite69@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-4">
                        <div className="flex items-center justify-center w-15 h-15 bg-[#121212] rounded-[50%]">
                            <FaLinkedin className="w-8 h-8 text-[#14FFEC]" />
                        </div>

                        <h3 className="font-bold text-xl">LinkedIn</h3>

                        <a href="https://www.linkedin.com/in/widson-martins/" className="text-[#14FFEC]">
                            Widson Martins
                        </a>
                    </div>
                </div>

        </div>
    )
}

export default Contatos;
