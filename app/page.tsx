
export default function Home() {
    return (
        <div className="text-white ">
            <img src="bg.png" className="absolute left-1/2 transform -translate-x-1/2 -z-10" alt="" />
            <div className="absolute size-32 bg-[#1DF573] blur-[170px] "></div>
            <header className="w-screen flex justify-between p-12 ">
                <img src="logo.png" alt="" />
                <nav className="text-white cursor-pointer z-20">
                    <ul className="flex gap-7 text-xl">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#" className="opacity-45 hover:opacity-100 transition 0.2s all ease-out">Loja</a></li>
                        <li><a href="#" className="opacity-45 hover:opacity-100 transition 0.2s all ease-out">Termos</a></li>
                        <li><a href="#" className="opacity-45 hover:opacity-100 transition 0.2s all ease-out">Regras</a></li>    
                    </ul>
                </nav>
                <div>
                    <div className="absolute size-32 bg-[#1DF573] blur-[170px] -z-10"></div>
                    <a href="#" className=" rounded-full bg-[#1DF573] text-[#0B0A0D] px-11 py-4 hover:bg-[#3cbb6f] transition 0.2s all ease-out">Login</a>
                </div>
            </header>

            <main className="flex flex-col justify-center items-center gap-6 mt-40">
                <h1 className="font-bold text-5xl text-center">Seja <span className="text-[#1DF573]">bem vindo</span> ao WebSite do <br /> <span className="text-[#1DF573]">Vanilla Roleplay </span></h1>
                <h2 className="font-normal text-lg text-center opacity-45">No Vanilla, você não só joga, você vive. Aqui, cada personagem é uma nova história <br /> esperando para ser contada. Seja um trabalhador comum, um empresário de sucesso, ou <br /> alguém mais ousado, o servidor te dá a liberdade para criar e evoluir do seu jeito.</h2>
                <a href="" className=" rounded-full bg-[#1DF573] text-[#0B0A0D] px-11 py-4 font-bold hover:bg-[#3cbb6f] transition 0.2s all ease-out">Entrar no Servidor</a>
                <div className="left-full bottom-10 absolute size-32 bg-[#1DF573] blur-[170px] -z-10"></div>
            </main>
            <section className="h-screen">
                <div className=" absolute size-32 bg-[#1DF573] blur-[170px]"></div>
            </section>

            <footer className="absolute  w-full h-[267px] bg-[#0C100E] ">
                <div className="h-[267px] flex justify-between items-center px-10">
                    <div className="flex flex-col gap-4">
                        <img src="logo-footer.png" className="w-[200px]" alt="" />
                        <div>
                            <h1 className="font-bold">Vanilla Roleplay 2021 - 2024</h1>
                            <h2 className="opacity-45">© Todos os direitos reservados</h2>
                        </div>
                        <p className="opacity-45">O Vanilla Roleplay não é afiliado a Rockstar Games Inc.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-end gap-4">
                            <a href=""><img src="discord.svg" className="p-5 bg-white rounded-full" alt="" /></a>
                            <a href=""><img src="youtube.svg" className="p-5 bg-white rounded-full" alt="" /></a>
                        </div>
                        <h1>Desenvolvido com carinho por <strong className="text-[#1DF573]">imSand</strong>.</h1>
                    </div>
                </div>
            </footer>
        </div>
    );
}
