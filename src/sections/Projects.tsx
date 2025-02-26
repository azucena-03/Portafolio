import ProjectCard from "../components/ProjectCard"
import { projects } from "../constants"

const Projects = () => {
    return (
        <section className="max-w-[1120px] mx-6 lg:mx-auto mb-22" id="projects">
            <div className="flex gap-x-4 items-center mb-16">
                <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]">Mis Proyectos</h2>
                <img src="/images/glow.png" alt="glow" className="h-6 md:h-8 lg:h-9 xl:h-12" />
            </div>

            <div className="flex flex-col gap-11">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
