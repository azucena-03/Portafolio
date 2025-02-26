import { skills } from '../constants/index'

const AboutMe = () => {
    return (
        <section className="max-w-[1120px] mx-6 md:mx-12 lg:mx-auto mb-16 md:mb-20 lg:mb-24 xl:mb-32" id="about-me">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className='flex flex-col gap-y-8 justify-center w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
                    <div className="flex gap-x-4 items-center">
                        <h2 className="text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px]">Un Poco Sobre Mí</h2>
                        <img src="/images/glow.png" alt="glow" className="h-5 md:h-6 lg:h-8 xl:h-10" />
                    </div>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl">Egresada de la carrera de Computación e Informática. Destaco por mis habilidades de creatividad, orden y adaptabilidad a nuevos entornos. Me encuentro orientada a desarrollarme profesionalmente en el área de desarrollo front end.</p>
                    <div className='flex flex-wrap justify-center md:justify-start gap-2'>
                        {skills.map(skill => (
                            <span key={skill.id} className="text-sm md:text-base bg-gradient-to-b from-principal to-secondary px-4 py-2 rounded-4xl text-body font-medium">{skill.title}</span>
                        ))}
                    </div>
                </div>
                <img src="/images/sobremi.png" alt="sobre mi" className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-48 md:h-64 lg:h-80 xl:h-96 object-cover" />
            </div>
        </section>
    )
}

export default AboutMe
