"use client"

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, BookOpen } from "lucide-react";

interface Page {
    image: string;
    title: string;
    story: string;
}

export default function Magazine({ pages }: { pages: Page[] }) {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = pages.length;

    const nextSlide = () => setCurrentPage((prev) => (prev + 1) % totalPages);
    const prevSlide = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

    return (
        <div className="max-w-6xl mx-auto py-8 lg:py-16 px-2 md:px-4">
            {/* Magazine Spread Container */}
            <div className="relative group rounded-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-white overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">

                {/* Center Spine Gutter (Magazine Crease) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-30 -translate-x-full hidden md:block mix-blend-multiply" />
                <div className="absolute right-1/2 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black/20 via-black/5 to-transparent z-30 translate-x-full hidden md:block mix-blend-multiply" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/10 z-40 -translate-x-1/2 hidden md:block" />

                <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[700px] bg-[#fdfdfc] dark:bg-[#1a1a1a]">
                    
                    {/* Left Page (Full Bleed Image Focus) */}
                    <div className="w-full md:w-1/2 relative flex flex-col justify-between animate-in fade-in duration-700 bg-gray-50 dark:bg-black group/leftpage">
                        {/* Eyebrow / Folio */}
                        <div className="absolute top-6 left-6 z-20 hidden md:flex items-center gap-3 text-white/90 text-[10px] tracking-[0.2em] font-bold uppercase mix-blend-difference">
                            <BookOpen className="h-3 w-3" />
                            <span>TLF Voices • Issue 01</span>
                        </div>

                        <div className="absolute inset-0 z-0">
                            <Image
                                src={pages[currentPage].image}
                                alt={pages[currentPage].title}
                                fill
                                className="object-cover transition-transform duration-[1.5s] ease-out group-hover/leftpage:scale-105"
                                priority
                            />
                            {/* Subtle dark gradient overlay for text legibility if needed, but we keep it clean */}
                            <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover/leftpage:bg-transparent" />
                        </div>
                        
                        {/* Page Number Left */}
                        <div className="absolute bottom-6 left-6 z-20 hidden md:block text-white/90 text-xs font-serif italic mix-blend-difference">
                            {String((currentPage * 2) + 1).padStart(2, '0')}
                        </div>
                    </div>

                    {/* Right Page (Editorial Text) */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center relative bg-[#fdfcfb] dark:bg-[#121212] p-8 md:p-12 lg:p-20 shadow-inner">
                        {/* Eyebrow / Folio Right */}
                        <div className="absolute top-6 right-6 hidden md:block text-gray-400 dark:text-gray-500 text-[10px] tracking-[0.2em] font-bold uppercase">
                            Feature
                        </div>

                        <div className="relative z-10 w-full max-w-md mx-auto animate-in slide-in-from-right-8 fade-in duration-700">
                            
                            {/* Headline */}
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[0.9] mb-8 font-sans">
                                {pages[currentPage].title}
                            </h3>

                            <div className="w-16 h-1 bg-primary mb-10" />

                            {/* Drop Cap & Story */}
                            <div className="relative">
                                {/* Large Quote Icon as background texture */}
                                <Quote className="absolute -top-10 -left-10 h-24 w-24 text-gray-100 dark:text-gray-800 -z-10 transform -rotate-6 transition-transform duration-700 group-hover:rotate-0" />
                                
                                <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-serif text-justify first-letter:text-6xl md:first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest">
                                    {pages[currentPage].story}
                                </p>
                            </div>

                        </div>

                        {/* Page Number Right & Controls */}
                        <div className="absolute bottom-6 left-12 right-12 flex items-center justify-between">
                            <div className="hidden md:block text-gray-400 dark:text-gray-500 text-xs font-serif italic">
                                {String((currentPage * 2) + 2).padStart(2, '0')}
                            </div>
                            
                            {/* Controls */}
                            <div className="flex gap-2 w-full md:w-auto justify-between md:justify-end">
                                <button
                                    onClick={prevSlide}
                                    className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent transition-all active:scale-95"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className={`h-10 w-10 md:h-12 md:w-12 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center hover:bg-primary dark:hover:bg-primary hover:text-white transition-all active:scale-95 shadow-lg ${currentPage === 0 ? 'animate-pulse' : ''}`}
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Progress Container - Minimal Editorial Style */}
            <div className="mt-12 flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500">
                    Story {currentPage + 1} of {totalPages}
                </span>
                <div className="flex gap-1">
                    {pages.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-[2px] transition-all duration-500 ${idx === currentPage ? 'w-8 bg-black dark:bg-white' : 'w-2 bg-gray-300 dark:bg-gray-700'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
