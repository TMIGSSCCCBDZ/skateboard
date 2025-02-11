import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { ParralaxImage } from "./parallax-image";
import { SlideIn } from "./slide-in";

const poppings = Poppins({
  subsets: ['latin'],
  weight: '700',
});

export const Info = () => {
  return (
    <div id="about" className="">
      {/* Section 1 */}
   
        {/* Sticky container pinned at 10rem from top */}
        <div className=" sticky top-0 z-10">
          <div className="bg-slate-500 flex py-20 lg:flex-row flex-col items-center">
            <SlideIn>
               <div className="flex flex-col md:items-start items-center p-6 gap-y-4">
              <h1
                className={cn(
                  "lg:text-8xl text-white text-6xl lg:w-[60%] text-center md:text-start font-bold",
                  poppings.className
                )}
              >
                This is title one
              </h1>
              <p className="font-semibold lg:w-[50%] text-white text-center lg:text-start font-mono text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus, veritatis odit vel aperiam deserunt omnis eveniet, debitis adipisci nihil id.
              </p>
            </div>
            </SlideIn>
           
            <div className="w-full">
              <ParralaxImage backgroundImage="/paint-background.png" foregroundImage="guy-1.png" />
            </div>
          </div>
        </div>
     

      {/* Section 2 */}
     
        {/* Increase z-index so this section appears on top */}
        <div className="sticky top-10 z-20">
          <div className="bg-orange-500 flex py-20 lg:flex-row flex-col items-center">
            <div className="w-full">
              <ParralaxImage backgroundImage="/paint-background.png" foregroundImage="guy-2.png" />
            </div>
            <SlideIn>
               <div className="flex flex-col md:items-end items-center p-6 gap-y-4">
              <h1
                className={cn(
                  "lg:text-8xl text-white text-6xl lg:w-[60%] text-center md:text-start font-bold",
                  poppings.className
                )}
              >
                This is title two
              </h1>
              <p className="font-semibold lg:w-[50%] text-white text-center lg:text-start font-mono text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus, veritatis odit vel aperiam deserunt omnis eveniet, debitis adipisci nihil id.
              </p>
            </div>
            </SlideIn>
           
          </div>
        </div>
         <div className="sticky z-40">
          <div className="bg-red-500 flex py-20 lg:flex-row flex-col items-center">
          
          <SlideIn>
              <div className="flex flex-col md:items-start items-center p-6 gap-y-4">
              <h1
                className={cn(
                  "lg:text-8xl text-white text-6xl lg:w-[60%] text-center md:text-start font-bold",
                  poppings.className
                )}
              >
                This is title three
              </h1>
              <p className="font-semibold lg:w-[50%] text-white text-center lg:text-start font-mono text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus, veritatis odit vel aperiam deserunt omnis eveniet, debitis adipisci nihil id.
              </p>
            </div> 
          </SlideIn>
           
            <div className="w-full">
              <ParralaxImage backgroundImage="/paint-background.png" foregroundImage="guy-3.png" />
            </div>
          </div>
        </div>
      

      {/* Add more sections following the same pattern */}
    </div>
  );
};