import { link } from "fs";
import Image from "next/image";
import { Card, CardContent } from "@/Compunents/ui/card";

const portfolio = [
    {
        Name:"FreshMart",
        title:"Personal Project",
        details:"Designed UI/UX for a fruit ordering website, creating user flows, wireframes, and high-fidelity designs in Figma.",
        date:"Nov 2025 - Dec 2025",        
        link:"https://www.figma.com/design/znoMGH8TLLOU5OUDqhsHtr/Untitled?node-id=0-1&t=eCE3jTCmPFJjT5Ck-1"
    },

    {
        Name:"Chawzy",
        title:"Personal Project",
        details:"A UI/UX design of a food ordering app including user research, filter and fidelity prototypes using Figma.",
        date:"Aug 2025 - Aug 2025", 
        link:"https://www.figma.com/proto/bybbvNOzEYsiJR3zPi0P8H/Food-Design?t=uA4Ys9x9kSAloH4L-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=43-262&starting-point-node-id=43%3A67"          
    },

    {
        Name:"Codelyth - Startup Branding & Visual Identity Design",
        title:"Codelyth (Startup)",
        details:"Led brand identity design for a tech startup, creating logo, color palette, typography, and brand assets in Figma",
        date:"May 2025 - Jul 2025",
        link:"https://www.figma.com/design/euRV6qSUVB5MNCoZuRB0Bh/Untitled?node-id=0-1&t=oy2Q0ETGjXTooEal-1"   
        
    },

    {
        Name:"Harvoxx School",
        title:"Website duplication",
        details:"A responsive clone of the Harvoxx School website built using HTML5 and CSS3. The project focuses on recreating the website's layout, structure, styling, navigation, and responsive design while practicing modern web development and frontend design techniques.",
        date:"April 2026 - April 2026",
        link:"https://harvoxx-school-duplicate.vercel.app"   
        
    },

    {
        Name:"GlobTech",
        title:"GlobTech Student Portal and management system",
        details:"A responsive student portal frontend built with HTML, CSS, and JavaScript. The project provides a clean and user-friendly interface for students to access academic information, navigate portal sections, and interact with essential student services. It focuses on responsive design, structured layouts, and JavaScript-based interactivity.",
        date:"july 2026 - july 2026",
        link:"https://student-portal-8crt.vercel.app/"   
        
    },

    {
        Name:"Streamline",
        title:"Streamline HMO Platform",
        details:"A modern and responsive frontend HMO platform built with Next.js. The project focuses on creating a clean, intuitive, and user-friendly healthcare interface with responsive layouts, reusable components, and well-structured pages for presenting healthcare services and information.",
        date:"April 2026 - May 2026",
        link:"https://med-tech-taupe.vercel.app/"   
        
    },

]
export function PortfolioPage() {
  return (
    <section id="portfolio">
    <div className="md:pt-30 xl:px-50 pt-30 px-5 md:px-20">
        <h1 className="text-center w-full p-8 text-4xl text-primary m-auto">Portfolio</h1>
        <main className="gap-3 w-full ">
           {portfolio.map((portfolio,index)=>(
                <Card key={index} className="border-none shadow shadow-red-400 rounded-2xl mb-10">
                    <a href={portfolio.link} target="_blank"><CardContent>
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
                    </CardContent></a>
                </Card>
           ))}
        </main>


    </div>
    </section>
  )
}