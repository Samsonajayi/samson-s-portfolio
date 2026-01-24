import Image from "next/image";
import { useNavigate } from 'react-router-dom';
import { Linkedin,Instagram,Github} from "lucide-react";

export function Header() {
  return (
    <div className=" my-5 ">
    <div className="shadow-xl fixed w-full rounded-2xl bg-background-primary">
      <main className="px-7 py-3 flex">
        <a href="/"><h1 className="text-3xl text-secondary font-bold">Samson Ajayi</h1></a>
        <span className="m-auto max-xl:hidden">
        <a href="/" className=" px-15 hover:underline hover:text-secondary transition duration-500 text-primary">HOME</a>
        <a href="" className=" px-15 hover:underline hover:text-secondary transition duration-500 text-primary">PORTFOLIO</a>
        <a href="" className=" px-15 hover:underline hover:text-secondary transition duration-500 text-primary">CONTACT</a>
        <a href="" className=" px-15 hover:underline hover:text-secondary transition duration-500 text-primary">ABOUT</a>
        </span>
        <span className="flex gap-3  ml-auto ">
           <a href="https://github.com/samsonajayi" target="_blank"><p className=" cursor-pointer text-foreground hover:text-secondary"><Github></Github></p></a>
           <a href="https://linkedin.com/in/samsonajayi17" target="_blank"><p className=" cursor-pointer text-foreground hover:text-secondary"><Linkedin></Linkedin></p></a>
           <a href="https://instagram.com/samsonajayi57?igsh=0TFuMGx3MWVvczFv" target="_blank"><p className=" cursor-pointer text-foreground hover:text-secondary"><Instagram></Instagram></p></a>
        </span>
      </main>
    </div>
    </div>
  );
}