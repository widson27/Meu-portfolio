import React from "react";
import landingPageImg from "../../assets/landing-page-pet.png";
import shoppingCartImg from "../../assets/shopping-cart.png";
import ToDoListImg from "../../assets/to-do-list.png"

function Projects() {
    return (
        <section className="w-full pt-[100px] pb-[200px] flex items-center justify-center"  id="projetos">
            <div className="w-fit max-w-[600px] lg:max-w-[1200px] px-4">
                <h2 className="font-bold text-3xl mb-20 text-center">Projetos</h2>
                <div className="grid grid-cols-1 gap-10">
                    <div className="group w-full flex flex-col lg:flex-row justify-between bg-[#1F2937] rounded-md p-4 items-center gap-6 lg:gap-4">
                        
                        <div className="relative w-full h-[300px] overflow-hidden rounded-md">
                            <img    
                                className="absolute top-0 left-0 w-full h-auto object-cover transform translate-y-0 lg:group-hover:translate-y-[-55%] transition-transform duration-5000 ease-in-out" 
                                src={landingPageImg} 
                                alt="Landing Page"
                            />
                        </div>

                        <div className="flex flex-col h-fit gap-6 lg:h-full justify-between px-2 md:px-6 lg:max-w-[586.72px]">
                            <h3 className="font-bold text-2xl">Landing Page</h3>
                            <ul className="flex gap-4">
                                <li className="font-bold text-[#14FFEC]">NextJS</li>
                                <li className="font-bold text-[#14FFEC]">Typescript</li>
                                <li className="font-bold text-[#14FFEC]">TailWind CSS</li>
                            </ul>
                            <p className="text-justify">Este projeto é uma landing page desenvolvida em nextJS para um pet shop, destacando os serviços oferecidos, depoimentos de clientes e informações de contato.</p>

                            <div className="flex gap-4 lg:mx-0 mx-auto">
                                <a 
                                    href="https://landig-page-petshop.vercel.app/"
                                    target="_blank"
                                    className="w-fit flex items-center hover:scale-105 duration-300 justify-center bg-[#00AEEF] hover:bg-[#14FFEC] rounded-md px-4 py-1 font-bold"
                                >
                                    Ver projeto
                                </a>

                                <a 
                                    href="https://github.com/widson27/Landig-page-petshop"
                                    target="_blank"
                                    className="w-fit flex items-center hover:scale-105 duration-300 justify-center bg-[#00AEEF] hover:bg-[#14FFEC] rounded-md px-4 py-1 font-bold"
                                >
                                    Repositório
                                </a>
                            </div>
                        </div>



                    </div>

                    <div className="group w-full flex flex-col lg:flex-row justify-between bg-[#1F2937] rounded-md p-4 items-center gap-6 lg:gap-4">
                        
                        <div className="relative w-full lg:w-[50%] rounded-md">
                            <img 
                                className="w-full rounded-md object-cover" 
                                src={shoppingCartImg} 
                                alt="Carrinho de compras"
                            />
                        </div>

                        <div className="flex flex-col h-fit gap-6 lg:h-full justify-between px-2 md:px-6 lg:max-w-[586.72px]">
                            <h3 className="font-bold text-2xl">Carrinho de compras</h3>
                            <ul className="flex gap-4">
                                <li className="font-bold text-[#14FFEC]">React</li>
                                <li className="font-bold text-[#14FFEC]">JavaScript</li>
                                <li className="font-bold text-[#14FFEC]">ContexAPI</li>
                            </ul>
                            <p className="text-justify">Este projeto é uma aplicação de e-commerce desenvolvida com React e Hooks, proporcionando uma experiência interativa e fluida para o usuário.</p>

                            <div className="flex gap-4 lg:mx-0 mx-auto">
                                <a 
                                    href="https://carrinho-de-compras-plum-eight.vercel.app/"
                                    target="_blank"
                                    className="w-fit flex items-center hover:scale-105 duration-300 justify-center bg-[#00AEEF] hover:bg-[#14FFEC] rounded-md px-4 py-1 font-bold"
                                >
                                    Ver projeto
                                </a>

                                <a 
                                    href="https://github.com/widson27/carrinho-de-compras"
                                    target="_blank"
                                    className="w-fit flex items-center hover:scale-105 duration-300 justify-center bg-[#00AEEF] hover:bg-[#14FFEC] rounded-md px-4 py-1 font-bold"
                                >
                                    Repositório
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="group w-full flex flex-col lg:flex-row justify-between bg-[#1F2937] rounded-md p-4 items-center gap-6 lg:gap-4">
                        
                        <div className="relative w-full lg:w-[50%] rounded-md">
                            <img 
                                className="w-full rounded-md" 
                                src={ToDoListImg} 
                                alt="To Do list"
                            />
                        </div>

                        <div className="flex flex-col h-fit gap-6 lg:h-full justify-between px-2 md:px-6 lg:max-w-[586.72px]">
                            <h3 className="font-bold text-2xl">To Do List</h3>
                            <ul className="flex gap-4">
                                <li className="font-bold text-[#14FFEC]">React Hooks</li>
                                <li className="font-bold text-[#14FFEC]">JavaScript</li>
                                <li className="font-bold text-[#14FFEC]">Router</li>
                            </ul>
                            <p className="text-justify">Este é um Gerenciador de Tarefas desenvolvido com React, Hooks e Router, permitindo que os usuários adicionem, editem e removam tarefas de forma simples e intuitiva.</p>

                            <div className="flex gap-4 lg:mx-0 mx-auto">
                                <a 
                                    href="https://to-do-list-react-two-bice.vercel.app/"
                                    target="_blank"
                                    className="w-fit flex items-center hover:scale-105 duration-300 justify-center bg-[#00AEEF] hover:bg-[#14FFEC] rounded-md px-4 py-1 font-bold"
                                >
                                    Ver projeto
                                </a>

                                <a 
                                    href="https://github.com/widson27/To-do-list-react"
                                    target="_blank"
                                    className="w-fit flex items-center hover:scale-105 duration-300 justify-center bg-[#00AEEF] hover:bg-[#14FFEC] rounded-md px-4 py-1 font-bold"
                                >
                                    Repositório
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
