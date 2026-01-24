import { Download, MessageCircleMore } from "lucide-react";
import Image from "next/image";


export function HomePage() {
  return (
    <div className="pt-20">
    <div className="md:pt-20 xl:px-50 pt-30 px-5 md:px-20 bg-background-home">
      <main className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 m-auto justify-center pb-20">
        <div className=" space-y-7 w-full">
        <h1 className="text-5xl font-bold">Hi,<br />I'm <span className="text-secondary">Samson</span></h1>
        <span>Fullstack Developer,User Interface Designer</span>
        <p className="pt-7"><button className="px-4 py-2 bg-secondary rounded cursor-pointer hover:bg-red-500">Contact Me</button></p>
        </div>

        <div className="w-full ">
          <img 
          src="/test1.jpg" 
          alt="my-image"  
          className="w-100 shadow-2xl"/>
        </div>

         <div className=" space-y-7 w-full md:mt-[-35%] xl:mt-auto">
          <span className="text-secondary">Expert on</span>
        <h2 className="text-2xl font-bold">Base in Nigeria (Lagos)<br />i'm a developer and <br /> a UI/UX designer. </h2>
        <span className="text-primary">Hey are you looking for a designer to build <br />your brand and grow your business? <br />Your free to link up with me.</span>
        <p className="pt-7"><button className="text-secondary rounded flex gap-2 hover:underline cursor-pointer">Download CV<Download/></button></p>
        </div>
      </main>
      
     
    </div>
    </div>
  );
}