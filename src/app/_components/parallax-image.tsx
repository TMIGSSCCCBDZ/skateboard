"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"

interface ParralaxImageProps{
    backgroundImage:string,
    foregroundImage: string
}
export const ParralaxImage = ({backgroundImage,foregroundImage}:ParralaxImageProps) => {

    const backgroundRef = useRef<HTMLImageElement>(null)
    const foregroundRef = useRef<HTMLImageElement>(null)
    const targetPosition = useRef({
        x:0,
        y:0
    })
    const currentPosition = useRef({
        x:0,
        y:0
    })
    useEffect(() => {
        const handleMouseMove = (event:MouseEvent) => {
            const {innerWidth, innerHeight} = window
            const xPercent = (event.clientX / innerWidth-0.5) * 2
            const yPercent = (event.clientY / innerHeight-0.5) * 2
            targetPosition.current = {
                x: xPercent * -20,
                y: yPercent * -20 
            }
            const frameId =  requestAnimationFrame(animationFrame)
            function animationFrame()  {
                const {x:xTarget,y:yTarget} = targetPosition.current
                const {x:xCurrent,y:yCurrent} = currentPosition.current
               const newX = xCurrent + (xTarget -xCurrent) * 0.1
               const newY = yCurrent + (yTarget -yCurrent) * 0.1
               currentPosition.current = {
                x:newX,
                y:newY
               }

             if (backgroundRef.current) {
  backgroundRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
}
       if (foregroundRef.current) {
  foregroundRef.current.style.transform = `translate(${newX *2}px, ${newY *2}px)`;
}
requestAnimationFrame(animationFrame)
            }

            
        }
        window.addEventListener("mousemove", handleMouseMove )
      
    
      return () => {
        window.removeEventListener('mousemove',handleMouseMove)
      
      }
    }, [])
    
    return (
      
            <div className="relative w-full mx-auto   ">
                <img  src={backgroundImage} ref={backgroundRef} alt=""  className="object-cover  absolute lg:w-[60%]  w-[50%] " />
                <img  src={foregroundImage} ref={foregroundRef} alt=""  className="object-cover z-10 w-[50%]   " />
          
            </div>
        
        
     
    )
}