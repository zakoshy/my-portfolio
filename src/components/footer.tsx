"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="text-center p-6 text-sm text-muted-foreground border-t">
            © {year} LinkHub Portfolio. All rights reserved.
        </footer>
    );
}
