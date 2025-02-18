import React from "react";
import Contatos from "../contato/Contatos";

function About() {
    return (
        <section className="w-full py-[100px] flex items-center justify-center gap-2" id="sobre">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center px-6 md:px-10">
                <h2 className="font-bold text-3xl text-center" >Sobre Mim</h2>
                <p className="mt-20 text-lg text-justify">
                    Sou um desenvolvedor front-end focado em criar interfaces modernas, rápidas e responsivas. Trabalho com Next.js, React, TypeScript, javaScript e Tailwind CSS, sempre buscando performance acessibilidade e boas práticas. Atualmente, estou aprimorando minhas habilidades e aberto a oportunidades para contribuir com projetos inovadores.
                </p>
                <Contatos />
                <a className="bg-[#00AEEF] hover:scale-110 duration-300 hover:bg-[#14FFEC]  mx-auto w-fit rounded-md flex items-center justify-center px-4 py-1 font-bold text-lg" href="https://drive.usercontent.google.com/u/0/uc?id=1HzQ250HtvARG3dC4JfeaM9VOoHsbkDpX&export=download">Baixar curriculo</a>
            </div>
        </section>
    )
}

export default About;