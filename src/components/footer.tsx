"use client";

import { useState, useEffect } from 'react';
import { Linkedin, Twitter, Facebook, Send } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const WhatsAppIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486s-.282-.08-.41.08-.49.487-.6.587-.217.149-.41.08-.88-.324-1.68-.925-.916-1.282-1.015-1.48s-.102-.282-.01-.372.282-.325.41-.437.149-.187.216-.324.03-.282-.015-.41-.41-.975-.556-1.325-.282-.3-.41-.316-.282-.015-.41-.015-.33.03-.49.217s-.6.587-.6 1.417.614 1.649.7 1.77.965 1.549 2.37 2.125.965.41 1.3.324.717-.297.818-.587.102-.486.07-.586zm-5.48-12.44a10.012 10.012 0 00-10 10.007c0 1.63.39 3.2.984 4.63l-1.017 3.712 3.824-1.002a9.96 9.96 0 004.21 1.093h.005a10.01 10.01 0 10-8.006-18.441z" />
    </svg>
  );

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="border-t">
            <div className="container py-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="text-center text-sm text-muted-foreground">
                    © {year} Edwin Oshome. All rights reserved.
                </div>
                <TooltipProvider>
                    <div className="flex items-center gap-4">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="https://www.linkedin.com/in/zakayo-oshome-b627b52b5" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>LinkedIn</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="https://twitter.com/edwindeZak74715" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Twitter</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Facebook</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="https://wa.me/254741157757" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <WhatsAppIcon />
                                    <span className="sr-only">WhatsApp</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>WhatsApp</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            </div>
        </footer>
    );
}
