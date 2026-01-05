import { Download, MessageCircleMore } from "lucide-react";
import Image from "next/image";

export function AboutPage() {
  return (
    <div className="md:py-30 xl:px-50 pt-30 px-5 md:px-20">
        <h1 className="text-center w-full p-8 text-4xl text-primary m-auto">About</h1>
      <main className="grid md:grid-cols-2 gap-5 justify-center m-auto">
        <div className=" w-full ">
        <p className="leading-8 text-xl pt-20">
            Hi, <br /> I’m Ajayi Samson , a computer science Student of mountain Top University, i loves turning ideas into real-world digital solutions.  
            I specialize in web development, Digital Marketing(Branding) and UI/UX designing.I enjoy building products that solve real problems and create great user experiences.  
            
        </p>
        <span>Fullstack Developer,User Interface Designer</span>
        </div>

        <div className="w-full">
          <img 
          src="/main2.jpg" 
          alt="my-image" 
          className="w-100 h-140 shadow-2xl shadow-red-400 rounded-2xl m-auto"/>
        </div>

         <div className="w-full">
          <img 
          src="/main3.jpg" 
          alt="my-image" 
          className="w-100 h-130  shadow-2xl shadow-red-400 rounded-2xl m-auto"/>
        </div>

         <div className=" space-y-7 w-full ">
        <p className="text-xl pt-15 leading-8">Currently exploring the mobile app development feild, and i'm always open to collaborations and learning new things in the ever-evolving world of technology.
            Let’s build the future, one line of code at a time!
        </p>
        <span className="text-primary">Hey are you looking for a designer to build <br />your brand and grow your business? <br />Your free to link up with me.</span>
        <p className="pt-20"><button className="flex gap-2 py-1 px-2 bg-foreground rounded-2xl text-[13px] m-auto text-background cursor-pointer hover:bg-primary-500">whatsapp Chat<MessageCircleMore className="w-[15px]"/></button></p>
        </div>
      </main>
      
     
    </div>
  );
}