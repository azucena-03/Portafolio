// import { LiaTimesSolid } from "react-icons/lia";
// import { BsFillGridFill } from "react-icons/bs";
// import { GoHome } from "react-icons/go";
// import { useState } from "react";

// const Header = () => {
//     const [openNavigation, setOpenNavigation] = useState(false);

//     return (
//         <header className="fixed w-full top-0 left-0 bg-body z-50 pt-8 pb-2">
//             <nav className="relative h-24 flex justify-between items-center lg:mx-auto max-w-[1120px] mx-6">
//                 <a href="#">
//                     <img src="/images/yaret.png" alt="logo" />
//                 </a>
//                 <div className="hidden md:block">
//                     <ul className="rounded-4xl p-px bg-gradient-to-b from-principal to-secondary">
//                         <div className="bg-body p-3 flex items-center gap-x-10 rounded-4xl pr-8">
//                             <li className="px-4 py-2 bg-[#292929] rounded-4xl">
//                                 <a href="#" className="text-2xl ">
//                                     <GoHome className="bg-transparent" />
//                                 </a>
//                             </li>
//                             <li><a href="#projects">Proyectos</a></li>
//                             <li><a href="#about-me">Sobre Mi</a></li>
//                             <li><a href="#contact">Contacto</a></li>

//                             <div className="flex text-2xl cursor-pointer md:hidden">
//                                 <LiaTimesSolid />
//                             </div>
//                         </div>
//                     </ul>
//                 </div>

//                 <div className="flex text-2xl cursor-pointer md:hidden">
//                     <BsFillGridFill />
//                 </div>
//             </nav>
//         </header>
//     )
// }

// export default Header

import { useState, useEffect } from "react";
import { GoHome } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";

const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpenNavigation(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed w-full top-0 left-0 bg-body z-50 pt-6 pb-2 shadow-lg">
            <nav className="relative h-20 flex justify-between items-center lg:mx-auto max-w-[1120px] mx-6">
                <a href="#" aria-label="Inicio">
                    <img src="/images/yaret.png" alt="Logo" className="w-auto" />
                </a>

                <div className="hidden md:block">
                    <ul className="rounded-4xl p-px bg-gradient-to-b from-principal to-secondary">
                        <div className="bg-body p-3 flex items-center gap-x-10 rounded-4xl pr-8">
                            <li className="px-4 py-2 bg-[#292929] rounded-4xl">
                                <a href="#" className="text-2xl">
                                    <GoHome className="bg-transparent" />
                                </a>
                            </li>
                            <li><a href="#projects">Proyectos</a></li>
                            <li><a href="#about-me">Sobre Mi</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </div>
                    </ul>
                </div>

                <button onClick={toggleNavigation} className="text-2xl cursor-pointer md:hidden" aria-label="Abrir menú">
                    <BsFillGridFill />
                </button>

                <div className={`fixed inset-0 bg-body bg-opacity-95 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${openNavigation ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                    <button onClick={toggleNavigation} className="absolute top-6 right-6 text-3xl" aria-label="Cerrar menú">
                        <LiaTimesSolid />
                    </button>
                    <ul className="text-xl space-y-6">
                        <li><a href="#" onClick={toggleNavigation}>Inicio</a></li>
                        <li><a href="#projects" onClick={toggleNavigation}>Proyectos</a></li>
                        <li><a href="#about-me" onClick={toggleNavigation}>Sobre Mi</a></li>
                        <li><a href="#contact" onClick={toggleNavigation}>Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;

