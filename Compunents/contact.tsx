import image from 'next/image';


export function Contact(){
    return(
        <div className="md:pt-30 xl:px-50 pt-30 px-5 md:px-20">
            <div className="text-center w-full p-8 m-auto text-primary"><h1 className="p-4 text-4xl">Contact Me</h1>
            <h4>let take a step to getting the job done, <br/> I work across all time zones</ h4></div>
            <main className="grid md:grid-cols-2 gap-10 md:gap-30 m-auto justify-center">
                <div>
                    <img src="earth1.png" alt="the world" className=' animate-pulse'/>
                </div>
                <div>
                    <p className='p-5'>
                        <a href="mailto:ajayisamsontobi17@gmail.com" target='_blank'><button className='gap-2 w-full cursor-pointer flex hover:bg-primary border-3 py-2 rounded border-secondary bg-foreground text-background md:w-50 px-2 justify-center'>Send me an email
                            <img width="35" height="35" src="g-mail.png" alt="gmail" className='md:mt-[-3%] mt-[-1%]'/>
                        </button></a>
                    </p>
                    <p className='p-5'>
                        <a href="https://wa.me/2348138172952" target='_blank'><button className='gap-2 w-full cursor-pointer flex text-center hover:bg-green-700 border-3 py-2 rounded border-foreground bg-green-500 px-4 md:w-50 text-background justify-center'>Message me on
                            <img width="35" height="35" src="whatsapp.png" alt="whatsapp" className='md:mt-[-3%] mt-[-1%]'/>
                        </button></a>
                    </p>
                    
                </div>
            </main>
            <div className='text-center w-full m-10'>coppyright Ajayi Samson 2026
            </div>
        </div>
        

  );      
}