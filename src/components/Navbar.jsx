import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'

const Navbar = ({ homeScroll, aboutScroll, projectScroll, contactScroll }) => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()

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
                <h1 
                className="text-3xl font-bold cursor-pointer p-1 md:bg-transparent md:text-white" 
                onClick={() => navigate('/')}>
                    Portfolio
                </h1>
            </div>
            <ul className={`menu flex items-center gap-4 sm:gap-10 fixed md:static left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md md:bg-transparent p-4 rounded-b-2xl transition-all ease-in-out duration-500 md:transition-none ${active ? "top-0 opacity-100 z-40" : "-top-10 opacity-0"}`}>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => homeScroll()}>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </button>
                </li>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => aboutScroll()}>
                        <Link to={'/'}>
                            About
                        </Link>
                    </button>
                </li>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => projectScroll()}>
                        <Link to={'/'}>
                            Projects
                        </Link>
                    </button>
                </li>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => contactScroll()}>
                        <Link to={'/'}>
                            Contact
                        </Link>
                    </button>
                </li>
            </ul>
            <ul className={`menu hidden sm:flex sm:items-center gap-10 sm:fixed sm:left-1/2 sm:-translate-x-1/2 sm:bg-white/30 sm:backdrop-blur-md sm:p-4 sm:rounded-b-2xl sm:transition-all sm:ease-in-out sm:duration-500 ${active ? "top-0 opacity-100 z-40" : "-top-10 opacity-0"}`}>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => homeScroll()}>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </button>
                </li>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => aboutScroll()}>
                        <Link to={'/'}>
                            About
                        </Link>
                    </button>
                </li>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => projectScroll()}>
                        <Link to={'/'}>
                            Projects
                        </Link>
                    </button>
                </li>
                <li>
                    <button className="sm:text-lg text-base font-medium cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50" 
                    onClick={() => contactScroll()}>
                        <Link to={'/'}>
                            Contact
                        </Link>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar