import { useRef } from 'react'
import './HomePorto.css'
import 'animate.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePorto = () => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const projectRef = useRef(null)

    // const goto = (ref) => {
    //     if (!ref) return
    //     ref.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start'
    //     })
    // }

    const goto = (el) => {
        if (!el) return

        // scroll pertama
        el.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
        })

        // “kunci” ulang setelah next paint (mengatasi shift awal)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            })
        })
    }

    return(
        <>
            <div className='mx-auto' ref={homeRef}>
                {/* Navbar */}
                <Navbar 
                homeScroll={() => goto(homeRef.current)} 
                aboutScroll={() => goto(aboutRef.current)} 
                projectScroll={() => goto(projectRef.current)} 
                contactScroll={() => goto(contactRef.current)} />
                <div className='container mx-auto'>
                    {/* hero */}
                    <Hero projectScroll={() => goto(projectRef.current)} />

                    {/* about */}
                    <div ref={aboutRef} className='scroll-mt-12'>
                        <About />
                    </div>

                    {/* Project */}
                    <div ref={projectRef} className='scroll-mt-12'>
                        <Projects />
                    </div>

                    {/* contact */}
                    <div ref={contactRef} className='scroll-mt-12'>
                        <Contact />
                    </div>

                    {/* Footer */}
                    <Footer homeScroll={() => goto(homeRef.current)} aboutScroll={() => goto(aboutRef.current)} projectScroll={() => goto(projectRef.current)} />
                </div>
            </div>
        </>
    )
}

export default HomePorto