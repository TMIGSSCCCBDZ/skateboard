import clsx from "clsx"
import { SkaterScribble } from "./skater-scribble"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { SlideIn } from "./slide-in"

const poppins = Poppins({
    subsets:['latin'],
    weight:'700'
})
export const TeamSection = () => {

    return (
        <div className="w-full flex flex-col justify-around items-center  bg-texture h-3/4 bg-purple-900 ">
           <SlideIn >
            <h1 className={cn('text-4xl text-white ',poppins.className)}>Team</h1>

           </SlideIn>
           

            <div className=" flex  items-center justify-center gap-x-3 ">
                <div className="rounded-md skater relative group transition overflow-hidden grid grid-cols-1 place-items-center ">
                    <img src="/jordan-back.png" className="w-52 h-60 scale-110 group-hover:scale-100 duration-300 group-hover:blur-[1px] transition object-cover row-start-1 col-start-1"/>
                   <SkaterScribble className={clsx("absolute  text-orange-500 ")}  /> 
                    <img src="/carter-front.png" className="w-44 h-60 group-hover:scale-110 transition duration-300 object-cover z-10 row-start-1 col-start-1 " />

                </div>

            </div>

        </div>
    )
}