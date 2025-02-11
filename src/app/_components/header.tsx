"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingCart, Hand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Header = () => {
    const [showGreeting, setShowGreeting] = useState(false);

    const handleContactClick = () => {
        setShowGreeting(true);
        setTimeout(() => setShowGreeting(false), 3000); // Hide message after 3 sec
    };

    return (
        <nav className="fixed top-0 bg-pink-500/50 left-0 w-full z-[100] h-16 px-8 flex items-center justify-between backdrop-blur-md  border-b border-white/20 shadow-lg">
            <a className="text-2xl font-bold text-white tracking-wide">LOGO</a>
            <ul className="flex items-center font-mono text-lg text-white gap-x-8">
                <a href="/#about" className="hover:text-purple-800 font-semibold transition-all duration-300">About</a>
                <a href="/preview" className="hover:text-purple-800 font-semibold transition-all duration-300">Customizer</a>
                <li 
                    className="cursor-pointer font-semibold hover:text-purple-800 transition-all duration-300 relative"
                    onClick={handleContactClick}
                >
                    Contact
                    <AnimatePresence>
                        {showGreeting && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute left-1/2 -translate-x-1/2 top-10 bg-purple-900 text-white p-3 rounded-md shadow-md"
                            >
                                <motion.div 
                                    initial={{ scale: 0 }} 
                                    animate={{ scale: 1 }} 
                                    exit={{ scale: 0 }}
                                    className="flex flex-col items-center  gap-2"
                                >
                                    <Hand className="w-6 h-6 text-yellow-400" />
                                    <a href='https://tmgicb.vercel.app/#home' className="underline">Visit our website!</a>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </li>
            </ul>
            <Button
                className={cn(
                    "button-cutout flex items-center  bg-purple-900 transition hover:bg-purple-950 "
                )}
            >
                <ShoppingCart className="w-6 h-6 text-white drop-shadow-lg" />
                Cart
            </Button>
        </nav>
    );
};
