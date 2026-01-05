import Image from "next/image";
import { Header } from "@/Compunents/header";
import { HomePage } from "@/Compunents/home";
import { PortfolioPage } from "@/Compunents/portfolio";
import { AboutPage } from "@/Compunents/about" ;
import { Contact } from "@/Compunents/contact"


export default function main() {
  return (
    <div >
      <main>
        <div>
          <Header></Header>
        </div>
        <div>
          <HomePage></HomePage>
        </div>
        <div>
          <PortfolioPage></PortfolioPage>
        </div>
        <div>
          <AboutPage></AboutPage>
        </div>
        <div>
          <Contact></Contact> 
        </div>
          
      </main>
    </div>
  );
}
