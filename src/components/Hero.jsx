import dataImage from '../data'
import resume from '../assets/thomas-resume.pdf'
import '../pages/HomePorto.css'
import 'animate.css'

const Hero = ({ projectScroll }) => {
    return(
        <div className="hero px-4 grid grid-cols-1 lg:grid-cols-2 pt-10 items-center xl:gap-0 gap-6">
            <div className='hero-animate animate__animated animate__fadeInUp animate__delay-1s'>
                <div className='flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl animate__animated animate__backInDown animate__delay-1s'>
                    <img src={dataImage.TomiImage} alt="Hero Image" className='w-10 rounded-xl' loading='eager' />
                    <p className='text-lg/loose font-medium opacity-80'>Software Engineer - Web Development</p>
                </div>
                <h1 className='text-5xl/tight font-bold mb-6'>Hi, I'm Thomas Dito Rigorastio</h1>
                <h2 className="max-w-prose text-xl sm:text-2xl font-medium text-indigo-400 mb-4">
                    React.js Front-End Developer | Building Responsive Web Interfaces
                </h2>
                <p className='text-base/loose mb-6 opacity-50 text-justify'>
                    I’m a Front-End Developer specializing in React.js, focused on building responsive and user-friendly web interfaces. I enjoy turning ideas into clean UI with smooth UX. Recently, I’ve also been exploring data science and machine learning using Python.
                </p>
                <div className='flex items-center sm:gap-4 gap-2'>
                    <a href={resume} target='_blank' rel="noopener noreferrer" className='bg-indigo-600 p-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-indigo-500'>
                        Download CV <i className="ri-download-2-line ri-lg"></i>
                    </a>
                    <button className='bg-zinc-700 p-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-zinc-600 cursor-pointer' onClick={() => projectScroll()}>
                        View Projects <i className="ri-arrow-down-double-fill ri-lg"></i>
                    </button>
                </div>
            </div>
            <div className='heroBanner animate__animated animate__fadeInUp animate__delay-2s'>
                <img src={dataImage.TomiImage} alt="Thomas Dito Rigorastio" className='w-[500px] mx-auto lg:ml-auto lg:mx-0 rounded-b-[70px]' loading='eager' />
            </div>
        </div>
    )
}

export default Hero