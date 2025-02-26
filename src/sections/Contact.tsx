const Contact = () => {
    return (
        <section className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 lg:mx-auto max-w-[1120px] mx-6 md:mx-12  mb-16 md:mb-20 lg:mb-24 xl:mb-32" id="contact">
            <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-center">
                Iniciemos un <br className="md:hidden lg:block" /> nuevo capítulo
            </h3>
            <ul className="rounded-4xl p-px bg-gradient-to-b from-principal to-secondary max-w-[300px] md:max-w-[500px] xl:max-w-[600px] mx-auto">
                <div className="bg-body p-3 md:p-4 lg:p-5 rounded-4xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-x-8 lg:gap-x-10">
                    <li className="px-4 py-2 bg-[#292929] rounded-4xl w-full md:w-auto">
                        <a href="https://www.linkedin.com/in/yaretvh/" target="_blank" className="text-base md:text-lg lg:text-xl">
                            LinkedIn
                        </a>
                    </li>
                    <li className="px-4 py-2 bg-[#292929] rounded-4xl w-full md:w-auto">
                        <a href="https://wa.me/+51976629695" target="_blank" className="text-base md:text-lg lg:text-xl">
                            Whatsapp
                        </a>
                    </li>
                    <li className="px-4 py-2 bg-[#292929] rounded-4xl w-full md:w-auto">
                        <a href="https://discordapp.com/users/840326506647257118" target="_blank" className="text-base md:text-lg lg:text-xl">
                            Discord
                        </a>
                    </li>
                </div>
            </ul>
        </section>



    )
}

export default Contact
