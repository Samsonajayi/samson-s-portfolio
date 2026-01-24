import { Download, MessageCircleMore } from "lucide-react";
import Image from "next/image";

export function AboutPage() {
  return (
    <div className="md:py-30 xl:px-50 pt-30 px-5 md:px-20">
        <h1 className="text-center w-full p-8 text-4xl text-primary m-auto">About</h1>
      <main className="grid xl:grid-cols-2 max-xl:gap-5 justify-center m-auto">
        <div className=" w-full border-none shadow shadow-red-400 rounded-2xl p-10 xl:mr-[-40px] xl:mb-[-30]">
        <p className="leading-8 text-2xl pt-5">
            Hi, <br /> I’m Ajayi Samson , a Computer Science Student of Mountain Top University, I loves turning ideas into real-world digital solutions.  
            I specialize in web development, Digital Marketing(Branding) and UI/UX designing.I enjoy building products that solve real problems and create great user experiences.  
            
        </p>
        <span className="text-primary text-xl">Fullstack Developer,User Interface Designer</span>
        </div>

        <div className="w-full">
         
        </div>

         <div className="w-full">
          
        </div>

         <div className=" w-full border-none shadow shadow-red-400 rounded-2xl p-10 xl:ml-[-40px] xl:mt-[-30] ">
        <p className="text-2xl pt-5 leading-8">Currently exploring the mobile app development feild, and i'm always open to collaborations and learning new things in the ever-evolving world of technology.
            Let’s build the future, one line of code at a time!
        </p>
        <span className="text-primary text-xl">Hey are you looking for a designer to build <br />your brand and grow your business? <br />Your free to link up with me.</span>
        </div>
      </main>
      
     
    </div>
  );
}