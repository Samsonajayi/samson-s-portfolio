import { link } from "fs";
import Image from "next/image";
import { Card, CardContent } from "@/Compunents/ui/card";

const portfolio = [
    {
        cardtitle:"UI/UX Designs",
        image1:"/Ui img2.png",
        image2: "/Ui img3.png",
        link: "https://www.behance.net/samsonajayi",
        linkname: "see more"
        
    },

    {
        cardtitle:"Web Development",
        image1:"/addmain.png",
        image2: "/addmain.png",
        link: "https://www.behance.net/samsonajayi",
        linkname: "see more"
        
    },

    {
        cardtitle:"Branding",
        image1:"/brand img.png",
        image2: "/addmain.png",
        link: "https://www.behance.net/samsonajayi",
        linkname: "see more"
        
    },

]
export function PortfolioPage() {
  return (
    <div className="pt-30 px-50">
        <h1 className="text-center w-full p-8 text-4xl text-primary m-auto">Portfolio</h1>
        <main className="grid grid-cols-2 gap-3 ">
           {portfolio.map((portfolio,index)=>(
                <Card key={index} className="border-none shadow shadow-red-400 rounded-2xl mb-10">
                    <CardContent>
                        <div>
                        <div className="text-2xl">
                            {portfolio.cardtitle}
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <span>
                                <img 
                                src={portfolio.image1} 
                                alt="design-image" 
                                className="w-full h-50 rounded-2xl shadow shadow-red-400 mt-5 cursor-pointer"/>    
                            </span>
                            <span>
                                <img 
                                src={portfolio.image2} 
                                alt="design-image" 
                                className="w-full h-50 rounded-2xl shadow shadow-red-400 mt-5 cursor-pointer"/>
                            </span>
                        </div>
                        <div>
                            <a href={portfolio.link} className="text-secondary hover:underline">{portfolio.linkname}</a>
                        </div>
                        </div>
                    </CardContent>
                </Card>
           ))}
        </main>


    </div>
  )
}