import signature from '../assets/signature.png'

const Footer = ({ homeScroll, aboutScroll, projectScroll}) => {
    const waurl = import.meta.env.VITE_WAURL
    const github = import.meta.env.VITE_GITHUB
    const linkedin = import.meta.env.VITE_LINKEDIN
    const instagram = import.meta.env.VITE_IG

    return(
        <footer className="mt-32 bg-neutral-primary-soft">
            <div className="mx-auto w-full p-4 py-6 lg:py-10">

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-0">
                    <div className='flex flex-col gap-4'>
                        <h1 className='max-w-prose text-4xl font-bold text-justify'>Connect With Me.</h1>
                        <div className="hidden sm:flex sm:items-center gap-6 sm:gap-3 lg:hidden">
                            <a href={github} target="_blank" rel="noopener noreferrer" aria-label='Github' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                                <i className="ri-github-fill ri-2x"></i>
                            </a>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label='LinkedIn' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                                <i className="ri-linkedin-box-fill ri-2x"></i>
                            </a>
                            <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label='Instagram' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                                <i className="ri-instagram-line ri-2x"></i>
                            </a>
                            <a 
                            href={`${waurl}?text=Halo%20Thomas,%20saya%20tertarik%20dengan%20portfolio%20Anda`} 
                            target="_blank" rel="noopener noreferrer" aria-label='WhatsApp'
                            className='transition-transform duration-300 ease-in-out hover:scale-135'
                            >
                                <i className="ri-whatsapp-line ri-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <button className='text-lg cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50' 
                        onClick={() => homeScroll()}>
                            Home
                        </button>
                        <button className='text-lg cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50' 
                        onClick={() => aboutScroll()}>
                            About
                        </button>
                        <button className='text-lg cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-50' 
                        onClick={() => projectScroll()}>
                            Projects
                        </button>
                    </div>
                    <div className="flex items-center sm:hidden lg:flex lg:items-center gap-6 sm:gap-3 ">
                        <a href={github} target="_blank" rel="noopener noreferrer" aria-label='Github' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                            <i className="ri-github-fill ri-2x"></i>
                        </a>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label='LinkedIn' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                            <i className="ri-linkedin-box-fill ri-2x"></i>
                        </a>
                        <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label='Instagram' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                            <i className="ri-instagram-line ri-2x"></i>
                        </a>
                        <a 
                        href={`${waurl}?text=Halo%20Thomas,%20saya%20tertarik%20dengan%20portfolio%20Anda`} 
                        target="_blank" rel="noopener noreferrer" aria-label='WhatsApp'
                        className='transition-transform duration-300 ease-in-out hover:scale-135'
                        >
                            <i className="ri-whatsapp-line ri-2x"></i>
                        </a>
                    </div>
                </div>

                <hr className="my-6 border border-default sm:mx-auto lg:my-8" />
                <div className="grid grid-cols-2 lg:grid-cols-4 py-4 sm:py-8 gap-6 sm:gap-8">
                    <div className="mb-6 md:mb-0 flex flex-col items-center sm:items-start">
                        <div className="w-full flex flex-col gap-1">
                            <img src={signature} alt="Signature" className='w-32' />
                            <h1 className='text-xl font-bold'>Thomas Dito R., S.Kom.</h1>
                            <h2 className='text-base/loose opacity-60'>I'm available for new opportunities</h2>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center sm:items-start'>
                        <h2 className="mb-6 text-base font-semibold uppercase text-start w-full">Address</h2>
                        <p className='max-w-prose text-base/loose opacity-60 font-medium text-start w-full'>
                            Jalan Permata Cimanggu Blok B No.2, Kel. Kedungbadak, Kec. Tanah Sareal, Kota Bogor, Jawab Barat, Indonesia, 16164.
                        </p>
                    </div>
                    <div className='w-full flex flex-col items-center sm:items-start'>
                        <h2 className="mb-6 text-base font-semibold uppercase text-start w-full">Email</h2>
                        <p className='max-w-prose text-base/loose opacity-60 font-medium text-start w-full'>
                            thmsdito@gmail.com
                        </p>
                    </div>
                    <div className='w-full flex flex-col items-center sm:items-start'>
                        <h2 className="mb-6 text-base font-semibold uppercase text-start w-full">
                            Phone <span><i className="ri-phone-fill"></i></span>
                        </h2>
                        <p className='max-w-prose text-base/loose opacity-60 font-medium text-start w-full'>
                            +62 817-1713-0902
                        </p>
                    </div>
                </div>
                
                <hr className="my-6 border border-default sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <h2 className='text-lg font-bold'>
                        Thomas D. <span className='text-md/loose font-light opacity-70'>/ Portfolio</span>
                    </h2>
                    <div className="text-sm/loose">
                        &copy; 2025 by Thomas Dito Rigorastio. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer