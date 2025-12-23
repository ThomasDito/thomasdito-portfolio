import './HomePorto.css'
import 'animate.css'
import { useRef } from 'react'
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
            <div className='container mx-auto' ref={homeRef}>
                {/* Navbar */}
                <Navbar 
                homeScroll={() => goto(homeRef.current)} 
                aboutScroll={() => goto(aboutRef.current)} 
                projectScroll={() => goto(projectRef.current)} 
                contactScroll={() => goto(contactRef.current)} />
                {/* hero */}
                <Hero projectScroll={() => goto(projectRef.current)} />

                {/* about */}
                <div ref={aboutRef}>
                    <About />
                </div>

                {/* Project */}
                <div ref={projectRef}>
                    <Projects />
                </div>

                {/* contact */}
                <div>
                    <Contact linkRef={contactRef} />
                </div>

                {/* Footer */}
                <Footer homeScroll={() => goto(homeRef.current)} aboutScroll={() => goto(aboutRef.current)} projectScroll={() => goto(projectRef.current)} />
            </div>
        </>
    )
}

export default HomePorto