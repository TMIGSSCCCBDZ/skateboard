"use client"
import { useEffect, useReducer, useRef, useState } from "react"


export const VideoSection = () => {
    const videoRef = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState<boolean>(false)
useEffect(() => {
    const currentRef = videoRef.current

    const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    if (intersecting) {
       setInView(true) 
       console.log('inView')
    }
  })

},{threshold:0,rootMargin: '1000px' })

if (currentRef) {
    observer.observe(currentRef)

}
return () => {
    if (currentRef) {
        observer.unobserve(currentRef)
    }
}
  
}, [])



    return (
      
     <div ref={videoRef} className="w-full bg-texture flex items-center justify-center bg-zinc-900 h-full">
         {inView && (

           <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" className="opacity-60 blur-[2px] rounded-md w-[90%] md:w-[60%]"   muted    />
         )} 

        </div>
      
        
        
    )
}