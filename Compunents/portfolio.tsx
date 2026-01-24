import { link } from "fs";
import Image from "next/image";
import { Card, CardContent } from "@/Compunents/ui/card";

const portfolio = [
    {
        Name:"FreshMart",
        title:"Personal Project",
        details:"Designed UI/UX for a fruit ordering website, creating user flows, wireframes, and high-fidelity designs in Figma.",
        date:"Nov 2025 - Dec 2025"        
    },

    {
        Name:"Chawzy",
        title:"Personal Project",
        details:"A UI/UX design of a food ordering app including user research, filter and fidelity prototypes using Figma.",
        date:"Aug 2025 - Aug 2025"           
    },

    {
        Name:"Codelyth – Startup Branding & Visual Identity Design",
        title:"Codelyth (Startup)",
        details:"Led brand identity design for a tech startup, creating logo, color palette, typography, and brand assets in Figma",
        date:"May 2025 - Jul 2025"   
        
    },

]
export function PortfolioPage() {
  return (
    <div className="md:pt-30 xl:px-50 pt-30 px-5 md:px-20">
        <h1 className="text-center w-full p-8 text-4xl text-primary m-auto">Portfolio</h1>
        <main className="gap-3 w-full ">
           {portfolio.map((portfolio,index)=>(
                <Card key={index} className="border-none shadow shadow-red-400 rounded-2xl mb-10">
                    <CardContent>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                        <span className="text-2xl font-semibold">
                            {portfolio.Name}
                        </span>
                        <span className="text-end">
                                {portfolio.date} 
                        </span>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            {portfolio.title}                                 
                        </div>
                        <div>
                            {portfolio.details}
                        </div>
                        </div>
                    </CardContent>
                </Card>
           ))}
        </main>


    </div>
  )
}