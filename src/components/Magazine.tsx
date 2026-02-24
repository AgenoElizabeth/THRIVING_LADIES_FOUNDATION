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
        <div className="max-w-6xl mx-auto py-8 px-2 md:px-4">
            {/* Magazine Container with Perspective */}
            <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 ring-1 ring-white/10 bg-muted/40">

                {/* Decorative Binding/Book Edge */}
                <div className="absolute left-1/2 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black/30 via-transparent to-transparent z-20 -translate-x-full hidden md:block opacity-40" />
                <div className="absolute right-1/2 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black/30 via-transparent to-transparent z-20 translate-x-full hidden md:block opacity-40" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-30 -translate-x-1/2 hidden md:block" />

                <div className="flex bg-white dark:bg-gray-950 min-h-[400px] md:min-h-[600px] overflow-hidden">
                    {/* Left Page (Image) */}
                    <div className="w-full md:w-1/2 relative bg-black/5 flex items-center justify-center overflow-hidden animate-in fade-in duration-700">
                        <Image
                            src={pages[currentPage].image}
                            alt={pages[currentPage].title}
                            fill
                            className="object-contain p-4 md:p-8 transition-transform duration-700 hover:scale-[1.02]"
                            priority
                        />
                        {/* Texture/Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent z-10 pointer-events-none" />
                    </div>

                    {/* Right Page (Story) */}
                    <div className="hidden md:flex w-1/2 p-10 lg:p-14 flex-col justify-center relative bg-gradient-to-br from-white via-muted/5 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 shadow-inner">
                        <div className="relative z-10 space-y-4 lg:space-y-6 animate-in slide-in-from-right-8 duration-700">
                            <div className="inline-flex items-center gap-2 text-primary/70 font-bold tracking-widest uppercase text-[10px]">
                                <BookOpen className="h-3 w-3" />
                                <span>Chapter {currentPage + 1}</span>
                            </div>

                            <h3 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white leading-tight">
                                {pages[currentPage].title}
                            </h3>

                            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />

                            <div className="relative">
                                <Quote className="absolute -top-4 -left-6 h-8 w-8 text-primary/5 -z-10" />
                                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-serif italic selection:bg-primary/10">
                                    {pages[currentPage].story}
                                </p>
                            </div>

                            <div className="pt-8 flex items-center justify-between text-muted-foreground/60">
                                <div className="text-[10px] font-black tracking-widest uppercase">
                                    P. {currentPage + 1} / {totalPages}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={prevSlide}
                                        className="p-2 rounded-full bg-muted/40 hover:bg-primary/10 transition-colors text-gray-500 hover:text-primary"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className={`p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all shadow-sm active:scale-90 ${currentPage === 0 ? 'animate-bounce' : ''}`}
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Text Overlay */}
                    <div className="absolute inset-x-0 bottom-0 md:hidden bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 text-white pt-12">
                        <h3 className="text-sm font-bold mb-1">{pages[currentPage].title}</h3>
                        <p className="text-[10px] italic opacity-85 mb-3 line-clamp-4 leading-normal">{pages[currentPage].story}</p>
                        <div className="flex justify-between items-center">
                            <div className="text-[9px] uppercase font-bold tracking-widest opacity-50">
                                P. {currentPage + 1} / {totalPages}
                            </div>
                            <div className="flex gap-2">
                                <button className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center active:scale-95" onClick={prevSlide}>
                                    <ArrowLeft className="h-3 w-3" />
                                </button>
                                <button className="h-8 w-8 rounded-full bg-primary/80 flex items-center justify-center active:scale-95 transition-transform" onClick={nextSlide}>
                                    <ArrowRight className="h-3 w-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Hint / Progress Container */}
            <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-[2px] w-12 md:w-24 bg-muted overflow-hidden rounded-full">
                    <div
                        className="h-full bg-primary transition-all duration-700"
                        style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                    />
                </div>
                <span className="text-[9px] uppercase font-black tracking-[0.2em] text-muted-foreground/40">Story Progression</span>
                <div className="h-[2px] w-12 md:w-24 bg-muted overflow-hidden rounded-full">
                    <div
                        className="h-full bg-primary transition-all duration-700"
                        style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
