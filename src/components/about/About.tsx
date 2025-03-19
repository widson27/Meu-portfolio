import React from "react";
import Contatos from "../contato/Contatos";

function About() {
    return (
        <section className="w-full py-[100px] flex items-center justify-center gap-2" id="sobre">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center px-4 md:px-10">
                <h2 className="font-bold text-3xl text-center" >Sobre Mim</h2>
                <p className="w-full mt-20 text-lg text-justify">
                    Sou um entusiasta do desenvolvimento front-end, apaixonado por transformar ideias em interfaces envolventes e funcionais. Com experiência em React, TypeScript, Tailwind CSS, Styled Components e mais, busco sempre criar aplicações responsivas, acessíveis e de alto desempenho. Atualmente, estou aprimorando minhas habilidades para entregar soluções inovadoras e estou em busca da minha primeira oportunidade na área. Se você procura um profissional dedicado e atento aos detalhes, vamos conversar!
                </p>
                <Contatos />
                <a className="bg-[#00AEEF] hover:scale-110 duration-300 hover:bg-[#14FFEC]  mx-auto w-fit rounded-md flex items-center justify-center px-4 py-1 font-bold text-lg" href="https://drive.usercontent.google.com/u/0/uc?id=1kahXtp4EaUcaWf29-XroB93BcWRkhDvr&export=download">Baixar curriculo</a>
            </div>
        </section>
    )
}

export default About;
