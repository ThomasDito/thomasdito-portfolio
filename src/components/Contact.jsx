const Contact = ({ linkRef }) => {
    return(
        <div className='contact mt-32 p-0 sm:p-10 px-4' ref={linkRef}>
            <h1 className='text-4xl mb-2 font-bold text-center' 
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Contact</h1>
            <p className='max-w-prose mx-auto text-base/loose text-center mb-10 opacity-60' 
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                I’m currently looking for new opportunities as a Web Developer. If you have a job opening or just want to say hi, feel free to drop a message and get in touch. 😁
            </p>
            <form action="https://formsubmit.co/thmsdito@gmail.com" method='POST' className='bg-zinc-800 p-10 w-full sm:w-fit mx-auto rounded-md' autoComplete='on' 
            data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100">
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='font-semibold'>Name</label>
                        <input 
                        id="name" type="text" name='nama' autoComplete="name" placeholder='Input your Name...' 
                        className='border border-zinc-500 p-2 rounded-md' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='font-semibold'>Email</label>
                        <input 
                        id="email" type='email' name='email' autoComplete="email" placeholder='Input your email address...' 
                        className='border border-zinc-500 p-2 rounded-md' required />
                        {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold' htmlFor='message'>Message</label>
                        <textarea 
                        name="pesan" id="message" autoComplete="off" cols="45" rows="7" 
                        placeholder='Hi! I’m excited to discuss about an open role, a project opportunity, or how my technical skills can contribute to your company. Feel free to leave a message or an interview invitation here...' 
                        className='border border-zinc-500 p-2 rounded-md' required></textarea>
                    </div>
                    <div className='text-center'>
                        <button className='bg-indigo-600 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 transition-all duration-300 ease-in-out hover:bg-indigo-500' type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact