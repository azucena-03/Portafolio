// const ProjectCard = () => {
//     return (
//         <div className="flex justify-around gap-x-10 bg-[#151515] rounded-lg py-12">
//             <img src="/images/project-1.png" alt="" className="basis-40 w-2/4" />
//             <div className="flex flex-col items-start justify-center gap-y-4 basis-64">
//                 <p className="relative text-center px-4 py-2 border border-[#7D7D7D] bg-gradient-to-b from-[#1E1E1E] to-[#7D7D7D] rounded-full">
//                     1
//                     <img src="/images/eclipse.png" alt="eclipse" className="absolute bottom
//                     -0 left-0.5" />
//                 </p>
//                 <h3 className="text-4xl font-bold">Belleza</h3>
//                 <p>Landing Page</p>
//                 <div className="flex flex-wrap">
//                     <span className="bg-gradient-to-b from-principal to-secondary px-4 py-2 rounded-4xl text-body font-medium">ReactJS</span>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { Project } from "../types";

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div>
            <a href={project.url} target="_blank">
                <div className="flex flex-col md:flex-row  lg:justify-between md:gap-20 bg-[#151515] rounded-lg p-12">
                    <img src={project.img} alt={project.title} className="md:basis-40 self-center lg:max-w-sm xl:max-w-md h-62 object-cover" />
                    <div className="flex flex-col items-start justify-center gap-4 md:basis-3/5 lg:basis-2/3 xl:basis-1/2 pt-6">
                        <p className="relative text-center px-4 py-2 border border-[#7D7D7D] bg-gradient-to-b from-[#1E1E1E] to-[#7D7D7D] rounded-full">
                            {project.id}
                            <img src="/images/eclipse.png" alt="eclipse" className="absolute bottom-0 left-0.5" />
                        </p>
                        <h3 className="text-2xl mdtext-4xl font-bold">{project.title}</h3>
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl">{project.descripcion}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, index) => (
                                <span key={index} className="text-sm md:text-base bg-gradient-to-b from-principal to-secondary px-4 py-2 rounded-4xl text-body font-medium">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard
