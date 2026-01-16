import React from "react";
import Contatos from "../contato/Contatos";

function About() {
    return (
        <section className="w-full py-[100px] h-full flex items-center justify-center gap-2" id="sobre">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center px-4 md:px-10">
                <h2 className="font-bold text-3xl text-center" >Sobre Mim</h2>
                <p className="w-full mt-20 text-lg text-justify">
                    Sou desenvolvedor front-end júnior, com foco em React, Next.js e TypeScript, e formação pela Trilha de Front-end do Programa Inova Maranhão (400 horas). Tenho experiência prática no desenvolvimento de interfaces modernas, responsivas e bem estruturadas, com consumo de APIs, componentização e boas práticas de código.

                    Gosto de transformar ideias em soluções funcionais, com atenção à experiência do usuário, organização do código e aprendizado contínuo. Atualmente, busco minha primeira oportunidade profissional para atuar em projetos reais, colaborar em equipe e evoluir como desenvolvedor.
                </p>
                <Contatos />
                <a className="bg-[#00AEEF] hover:scale-110 duration-300 hover:bg-[#14FFEC]  mx-auto w-fit rounded-md flex items-center justify-center px-4 py-1 font-bold text-lg" href="https://drive.usercontent.google.com/u/0/uc?id=15vTlzKqrdLlJXyFsR-AY4CO8jHXfBeBV&export=download">Baixar curriculo</a>
            </div>
        </section>
    )
}

export default About;
