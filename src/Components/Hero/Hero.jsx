import React from "react";
import Fimage from "../../assets/Images/Foram.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            <div
                id="home"
                className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
            >
                <div className="flex flex-col items-center justify-center gap-10 text-white">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src={Fimage}
                            alt="image"
                            className="w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-3 hover:scale-103 hover:shadow-2x1 hover:shadow-indigo-600 md:w-[250px]"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex max-w-[900px] flex-col items-center justify-center gap-3 text-center"
                    >
                        <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
                            Foram Chhaya
                        </h1>
                        <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
                            Full Stack Developer
                        </h3>
                        <p className="md:text-base text-pretty text-sm text-gray-400">
                            Enthusiastic and self-motivated Frontend Developer
                            with 6+ years of experience in web development,
                            specializing in frontend frameworks such as
                            JavaScript (ES5/ES6), jQuery, Vue.js, React,
                            Angular, and Shopify. Expert in e-commerce
                            development and management, delivering high-quality,
                            responsive user interfaces. Skilled in HTML5,
                            Tailwind CSS, SASS, Material UI, and Bootstrap to
                            create modern, visually appealing designs. Strong
                            backend experience with technologies like Node.js,
                            ASP.NET, MVC architecture, Django, PHP, and
                            proficient in both SQL and NoSQL databases like
                            MongoDB. Well-versed in CMS platforms such as
                            WordPress, with a solid understanding of SEO
                            optimization techniques. Familiar with cloud
                            technologies like AWS and containerization with
                            Docker. Proven experience with version control and
                            agile methodologies, thriving in fast-paced
                            environments.
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Hero;
