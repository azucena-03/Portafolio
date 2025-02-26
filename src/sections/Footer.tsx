
const Footer = () => {
    return (
        <footer className="max-w-[1120px] w-full mx-4 sm:mx-6 lg:mx-auto mb-3 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                    <img src="/images/yaret.png" alt="logo yaret" className="w-auto" />
                    <p className="text-sm sm:text-base">yaret.vasquez@outlook.com</p>
                </div>

                <ul className="text-sm flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-3">
                    <li><a href="#projects" className="hover:underline">Proyectos</a></li>
                    <li className="hidden sm:block"><img src="/images/small-dot.png" alt="small-dot" /></li>
                    <li><a href="#about-me" className="hover:underline">Sobre Mi</a></li>
                    <li className="hidden sm:block"><img src="/images/small-dot.png" alt="small-dot" /></li>
                    <li><a href="#contact" className="hover:underline">Contacto</a></li>
                </ul>
            </div>

            <div className="mt-3">
                <p className="text-center text-sm text-[#ABB2BF]">2025 - Yaret Vasquez</p>
            </div>
        </footer>

    )
}

export default Footer
