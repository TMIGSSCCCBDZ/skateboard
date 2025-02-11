import { FooterPhysics } from "./footer-physics"
import { SlideIn } from "./slide-in"


export const Footer = () => {
const urls = [
    '/red-black-complete.png',
    '/red-white-complete.png'

 ]

    return (
        <div className="w-full flex justify-center relative h-full bg-texture bg-zinc-950">
           <SlideIn>
             <h1 className="text-4xl md:text-6xl font-bold p-10 text-purple-500">
               Give it a try!!!
            </h1></SlideIn>
        
            <FooterPhysics boardTextureURLs={urls} className="absolute inset-0 w-full h-full" />
        </div>
    )
}