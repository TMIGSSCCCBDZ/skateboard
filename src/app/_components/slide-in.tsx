"use client"
import React, { useEffect, useRef } from "react"


interface SlideInProps{
    children: React.ReactNode,
    delay?:number,
    duration?:number,
}
export const SlideIn = ({children,delay=0,duration=600}:SlideInProps) => {
    const divRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const currentRef = divRef.current
        if (!currentRef) return
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    if (intersecting) {
        console.log('team')
            currentRef.style.animation = `slide-in ${duration}ms ${delay}s  forwards` 
       
    }
})
},{threshold:0,rootMargin:'-100px'})
 observer.observe(currentRef)

      return () => {
        
            observer.disconnect()
        
      }
    }, [duration,delay])
    

    return (
        <div ref={divRef} className="slide-hidden ">
            {children}
        </div>
    )
}