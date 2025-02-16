import { useState } from "react";
import "tailwindcss";
import Navbar from "../src/Components/Navbar/Navbar";
import Hero from "../src/Components/Hero/Hero";
import Tech from "../src/Components/Tech/Tech";
import Projects from "../src/Components/Projects/Projects";
import Contact from "../src/Components/Contact/Contact";

function App() {
    return (
        <>
            <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
                <Navbar />
                <Hero />
                <Tech />
                <Projects />
                <Contact />
            </main>
        </>
    );
}

export default App;
