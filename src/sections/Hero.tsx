const Hero = () => {
    return (
        <section className="bg-[url(/images/Hero.png)] bg-cover md:bg-contain bg-center bg-no-repeat w-full mt-20 sm:mt-28 lg:mt-35 px-4 sm:px-6">
            <div className="max-w-[1120px] mx-auto flex flex-col items-center justify-center gap-y-3 md:pt-20 pt-14 lg:pt-32 pb-40 sm:pb-60 lg:pb-[300px] text-center">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium break-words">
                    Hola, Soy Yaret
                </h1>
                <p className="text-[12px] md:text-base lg:text-xl px-2 sm:px-0">
                    Egresada en Computación e Informática. Iniciando <br className="hidden sm:inline" />
                    mi camino en el desarrollo Frontend
                </p>
                <a href="#contact" className="bg-gradient-to-b from-principal to-secondary md:px-6 px-4 md:py-2 py-1 sm:py-[10px] rounded-4xl text-body text-sm sm:text-base font-medium">
                    Contáctame
                </a>
            </div>
        </section>

    )
}

export default Hero
