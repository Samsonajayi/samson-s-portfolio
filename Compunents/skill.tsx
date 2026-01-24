import Image from "next/image";
import { Card, CardContent } from "@/Compunents/ui/card";

const skill= [
    {
        skillimg:"/c-program.png",
        skill:"C",
        
    },

    {
        skillimg:"/html5.png",
        skill:"HTML5",
        
    },

    {
        skillimg:"/java.png",
        skill:"JAVA",
        
    },
    {
        skillimg:"/c-sharp.png",
        skill:"C#",
        
    },

    {
        skillimg:"/javascript.png",
        skill:"JavaScript",
        
    },

    {
        skillimg:"/c++.png",
        skill:"C++",
        
    },

    {
        skillimg:"/react.png",
        skill:"React",
        
    },

    {
        skillimg:"/tailwind-css.png",
        skill:"Tailwind CSS",
        
    },
     {
        skillimg:"/typescript.png",
        skill:"Type Script",
        
    },

    {
        skillimg:"css3.png",
        skill:"CSS3",
        
    },

    {
        skillimg:"/whatsapp.png",
        skill:"Python",
        
    },


]

export function SkillPage() {
    return(
        <div className="mt-30">
            <h1 className="text-center w-full p-8 text-4xl text-primary m-auto">Skills</h1>
            <main className="grid grid-cols-11 gap-5 ">
                {skill.map((skill,index)=>(
                <Card key={index} className=" border-none hover:animate-bounce">
                <CardContent>
                    <div className="text-center m-auto">
                        <img src={skill.skillimg} 
                        alt="skill-image"
                        className="w-50 " />
                        {skill.skill}
                    </div>
                </CardContent>
                </Card>
                ))}
            </main>
        </div>
    );
}