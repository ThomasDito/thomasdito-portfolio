import { useState, useEffect } from "react"
import './Navbar.css'

const Navbar = ({ homeScroll, aboutScroll, projectScroll, contactScroll}) => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true)
            } else {
                setActive(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return(
        <nav className={`navbar py-7 flex items-center w-full bg-zinc-900 justify-between px-4`}>
            <div className="logo">
                <h1 className="text-3xl font-bold cursor-pointer p-1 md:bg-transparent md:text-white">Portfolio</h1>
            </div>
            <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-b-2xl md:bg-transparent transition-all md:transition-none ${active ? "top-0 opacity-100 z-40" : "-top-10 opacity-0"}`}>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => homeScroll()}>
                        Home
                    </button>
                </li>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => aboutScroll()}>
                        About
                    </button>
                </li>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => projectScroll()}>
                        Projects
                    </button>
                </li>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => contactScroll()}>
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar