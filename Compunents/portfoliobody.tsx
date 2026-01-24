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

export function PortfolioBody() {
    return(
        <div>
            <main>
                <div>
                    
                </div>
            </main>
        </div>
    );
}