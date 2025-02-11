import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import TornPaperButton from "./torn-paper-button"
import { InteractiveSkateboard } from "./interactive-skateboard"
 const poppins = Poppins({
        subsets:['latin'],
        weight:'700'
    })
export const Home = () => {
   

    return (
        <div className="w-full bg-texture relative h-full  bg-pink-400/50">
<div className="absolute inset-0 mt-24 p-4 grid grid-rows-[1fr,auto] place-items-end ">

<h1 className={cn('text-responsive-text place-self-start leading-tight  w-[70%] tracking-tighter font-bold transition-all duration-200',poppins.className)}>Escape the Cul-De-Sac</h1>
     <div className="flex lg:flex-row flex-col items-center justify-around gap-2">
 
      <p className="font-mono text-lg lg:w-[60%] md:w-[80%] font-semibold text-zinc-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sapiente possimus nisi nemo </p>
    <Button
              className={cn(
             "button-cutout z-50 bg-orange-500 hover:bg-orange-600 transition"
                )}
            >
              Buy a Skateboard
            </Button>
  <h1 className="absolute top-10 left-10 mix-blend-multiply opacity-25  md:text-[8rem]  text-[4rem] font-extrabold text-pink-500 animate-heat">
      Hot Deals
    </h1>
     </div>
</div>
     <InteractiveSkateboard />
      
        </div>
    )
}