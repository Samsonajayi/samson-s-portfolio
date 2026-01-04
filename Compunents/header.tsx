import Image from "next/image";
import { useNavigate } from 'react-router-dom';

const Home = ( ) => {
    const navigate = useNavigate();

    const goToAbout = () => {
      navigate('about.tsx');
    };
}


export function Header() {
  return (
    <div className="shadow-xl fixed w-full bg-background">
      <main className="px-7 py-3 flex">
        <h1 className="text-3xl text-secondary font-bold">Samson Ajayi</h1>
        <span className="m-auto">
        <a href="" className=" px-15 underline text-secondary transition duration-500 ">HOME</a>
        <a href="" className=" px-15 hover:underline hover:text-secondary transition duration-500 text-primary">PORTFOLIO</a>
        <a href="" className=" px-15 hover:underline hover:text-secondary transition duration-500 text-primary">CONTACT</a>
        <a href="about.tsx" className=" px-15 hover:underline hover:text-secondary transition duration-500 text-primary">ABOUT</a>
        </span>
      </main>
    </div>
  );
}