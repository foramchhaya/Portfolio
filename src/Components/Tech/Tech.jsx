import React from "react";
import {
    BiLogoJavascript,
    BiLogoPython,
    BiLogoReact,
    BiLogoTypescript,
    BiLogoVuejs,
} from "react-icons/bi";
import { motion } from "framer-motion";

const Tech = () => {
    const LogoCSS = (color) =>
        `cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] ${color}`;
    const frameworkIcons = [
        {
            id: 1,
            component: (
                <BiLogoJavascript className={LogoCSS("text-orange-500")} />
            ),
        },
        {
            id: 2,
            component: <BiLogoReact className={LogoCSS("text-blue-500")} />,
        },
        {
            id: 3,
            component: <BiLogoPython className={LogoCSS("text-sky-500")} />,
        },
        {
            id: 4,
            component: (
                <BiLogoTypescript className={LogoCSS("text-blue-500")} />
            ),
        },
        {
            id: 5,
            component: <BiLogoVuejs className={LogoCSS("text-green-500")} />,
        },
    ];

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <div
                id="tech"
                className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
            >
                <motion.h1
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-light text-white md:text-6xl"
                >
                    Technologies
                </motion.h1>
                <div className="flex flex-wrap items-center justify-center gap-10 p-1">
                    {frameworkIcons.map((FI) => (
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5 }}
                            key={FI.id}
                        >
                            {FI.component}
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tech;
