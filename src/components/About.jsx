import dataImage from '../data'
import { listTools } from '../data'

const About = () => {
    const waurl = import.meta.env.VITE_WAURL
    const github = import.meta.env.VITE_GITHUB
    const linkedin = import.meta.env.VITE_LINKEDIN
    const instagram = import.meta.env.VITE_IG

    return(
        <div className='about mt-32 py-10 px-4'>
            <div className='w-full lg:w-3/4 xl:w-2/3 mx-auto p-7 bg-zinc-800 rounded-xl' 
            data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000">
                <img src={dataImage.TomiImage} alt="Image" className='w-12 rounded-md mb-10 sm:hidden block' loading='lazy' />
                <p className='text-base/loose mb-10 text-justify'>
                    Hi, I’m Thomas— a React.js Front-End Developer who enjoys crafting clean, functional, and responsive web interfaces. My core stack is React, JavaScript, HTML, and CSS. I also have a growing interest in data science, especially analysis and machine learning using Python, and I’ve completed Dicoding’s Data Science Bootcamp where I built several projects including an ML capstone with a web-based output. As a fresh graduate, I’m eager to grow, learn, and contribute in a professional software development environment.
                </p>
                <div className='flex items-center justify-between'>
                    <img src={dataImage.TomiImage} alt="Image" className='w-12 rounded-md sm:block hidden' loading='lazy' />
                    <div className="flex items-center gap-6 sm:gap-3">
                        <a href={github} target="_blank" rel="noopener noreferrer" aria-label='Github' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                            <i className="ri-github-fill ri-2x"></i>
                        </a>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label='LinkedIn' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                            <i className="ri-linkedin-box-fill ri-2x"></i>
                        </a>
                        <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label='Instagram' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                            <i className="ri-instagram-line ri-2x"></i>
                        </a>
                        <div className='text-end hidden sm:block'>
                            <h1 className='text-3xl mb-1'>
                                2<span className='text-violet-500'>+</span>
                            </h1>
                        </div>
                    </div>
                    <div className='text-end block sm:hidden'>
                        <h1 className='text-3xl mb-1' title="Hands-on experience through projects, bootcamp, and self-driven learning">
                            2<span className='text-violet-500'>+</span>
                        </h1>
                        <p className='max-w-prose text-base/loose opacity-70 text-end'>Years of Experience</p>
                    </div>
                </div>
                <p className='text-base/loose opacity-70 text-end hidden sm:block'>Years of Experience</p>
            </div>

            <div className='tools mt-42'>
                <h1 className='text-4xl/snug font-bold mb-4' 
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Tech Stack & Tools</h1>
                <p className='w-full sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5 text-base/loose opacity-50' 
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Here are some of the tools and technologies I commonly use to build websites and other projects.</p>
                <div className="tools-box mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {listTools.map((tool) => (
                        <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md transition-all duration-300 ease-in-out hover:bg-zinc-800 group' key={tool.id} 
                        data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                            <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 transition-all duration-300 ease-in-out group-hover:bg-zinc-900' loading='lazy' />
                            <div>
                                <h4 className='font-bold'>{tool.nama}</h4>
                                <p className='opacity-50'>{tool.ket}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About