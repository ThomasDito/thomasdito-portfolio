import { listProject } from "../data";

const Projects = () => {
    return(
        <div className='proyek mt-32 py-10 px-10'>
            <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Projects</h1>
            <p className='text-base/loose text-center opacity-50' 
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Below are some of the projects I have worked on.</p>
            <div className="project-box mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {listProject.map((project) => (
                    <div key={project.id} className='project-wrapper p-4 bg-zinc-800 rounded-lg' 
                    data-aos="zoom-in-up" data-aos-duration="700" data-aos-delay={project.dad}>
                        <div className="aspect-video w-full overflow-hidden rounded-md bg-zinc-700">
                            <img src={project.gambar} alt="Project Image" className="h-full w-full object-cover" loading='lazy' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-4'>{project.nama}</h1>
                            <p className='text-base/loose mb-4'>{project.desc}</p>
                            <div className='flex flex-wrap gap-2'>
                                {project.tools.map((tool, i) => (
                                    <p className='py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold' key={i}>
                                        {tool}
                                    </p>
                                ))}
                            </div>
                            <div className='mt-8 text-center'>
                                <a href="#" className='bg-indigo-600 p-3 rounded-lg block border border-zinc-600 transition-all duration-300 ease-in-out hover:bg-indigo-500'>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects