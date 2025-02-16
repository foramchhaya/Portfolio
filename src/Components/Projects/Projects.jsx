import React, { Children } from "react";
import Img1 from "../../assets/Images/1.png";
import Img2 from "../../assets/Images/2.png";
import Img3 from "../../assets/Images/3.png";
import { motion } from "framer-motion";

const Projects = () => {
    const projectsData = [
        {
            image: Img1,
            Title: "Full Stack Project",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            technologies: [
                "html",
                "css",
                "javascript",
                "react",
                "postGreSQL",
                "supabase",
            ],
        },
        {
            image: Img2,
            Title: "Javascript Project",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            technologies: ["html", "css", "javascript"],
        },
    ];

    const ScrollReveal = ({ children }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {children}
            </motion.div>
        );
    };

    const ProjectCard = ({ project }) => {
        return (
            <ScrollReveal>
                <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
                    <img
                        src={project?.image}
                        alt=""
                        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
                    />
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <div className="text-xl font-semibold">
                                {project?.title}
                            </div>
                            <p className="text-gray-400">
                                {project?.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {project?.technologies?.map((tech, index) => (
                                <span
                                    key={index}
                                    className="rounded-lg bg-black p-3"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        );
    };

    return (
        <>
            <div
                id="projects"
                className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
            >
                <ScrollReveal>
                    <h1 className="text-4xl font-light text-white md:text-6xl">
                        My Projects
                    </h1>
                </ScrollReveal>
                <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
