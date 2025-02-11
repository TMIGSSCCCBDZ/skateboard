import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DollarSign, PaintBucket, ShoppingCart, Star } from "lucide-react"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { Scribble } from "./scribble"
import { SkateboardLatest } from "./skate-board-latest"
import { SlideIn } from "./slide-in"

const poppins = Poppins({
    subsets:['latin'],
    weight:'700'
})

export const LatestDrop = () => {

    return (
        <div className="flex gap-y-10 mt-7 w-full flex-col">
            <SlideIn>
                  <div className="flex mx-auto flex-col gap-y-3 items-center">
        <h1 className={cn('text-6xl',poppins.className)}>Latest Drop</h1>
           <p className="font-mono w-[80%] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab  </p>
            </div>
            </SlideIn>
          
            <div className="flex p-5   gap-x-5 items-center justify-center gap-y-3 flex-wrap w-full">

            <SkateboardLatest color='red' colorTail="bg-red-600" colorTailHover="hover:bg-red-700" colorTailText='text-red-500' price={88} stars={117} src="/red-black-complete.png" />
            <SkateboardLatest color='red' colorTail="bg-red-400" colorTailHover="hover:bg-red-500" colorTailText='text-red-400' price={55} stars={97} src="/red-white-complete.png" />
            <SkateboardLatest color='red' colorTail="bg-red-400" colorTailHover="hover:bg-red-500" colorTailText='text-red-400' price={30} stars={82} src="/thank-you-complete.png" />
            <SkateboardLatest color='pink' colorTail="bg-pink-400" colorTailHover="hover:bg-pink-500" colorTailText='text-pink-400' price={40} stars={60} src="/pink-drop-complete.png" />

            </div>
        </div>
    )
}