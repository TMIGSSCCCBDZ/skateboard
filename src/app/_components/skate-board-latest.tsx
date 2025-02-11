import { DollarSign, PaintBucket, Star } from "lucide-react"
import { Scribble } from "./scribble"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"


interface SkateboardLatsetProps{
color:string,
colorTail:string,
colorTailHover:string,
src:string,
price:number,
stars:number,
colorTailText:string,
}
export const SkateboardLatest = ({color,colorTail,colorTailHover,price,stars,src,colorTailText}:SkateboardLatsetProps) => {

    return (
          <div className="group border rounded-md p-2  overflow-hidden">
    <span className="flex  items-center justify-between">
               <span className="flex font-mono items-center">
            {price}<DollarSign className="w-4 h-4 " />
           </span>
           <span className="flex font-mono items-center">
            <Star className={cn(`w-4 h-4 group-hover:animate-spin ${colorTailText} `)} />{stars}
           </span>
          </span>
        
        <div className="relative  p-1 overflow-hidden">
            <Scribble className="absolute inset-0 w-full h-full -z-40" color={color} />
  <Button className={cn(`absolute ${colorTail} ${colorTailHover} opacity-0 group-hover:opacity-100 transition z-50 text-white top-1/2 left-[26%]`)} >
            <PaintBucket /> 
          </Button>
                <Image src={src} alt="" width={80} height={40} className='object-cover group-hover:scale-105 origin-top w-[50%] transition duration-300 mx-auto ease-in-out' />
        </div>
           
            </div>
    )
}