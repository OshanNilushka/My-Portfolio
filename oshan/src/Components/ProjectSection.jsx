import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "MyCourtConnect",
        description:
            "The lawyer Management & internship portal is a frontend and backend web application built using JavaScript, PHP & MySQL. It provides a platform for lawyers to manage their cases, clients, and internships efficiently.",
        image: "/Projects/Project1.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        DemoURL: "#",
        GithubURL: "#",
    },

    {
        id: 2,
        title: "School Management System",
        description:
            "The school Management & student portal is a frontend and backend web application built using JavaScript, PHP & MySQL. It provides a platform for schools to manage their students, teachers, and courses efficiently.",
        image: "/Projects/Project2.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        DemoURL: "#",
        GithubURL: "#",
    },

    {
        id: 3,
        title: "The Noble Collection",
        description:
            "The Noble Collection is a frontend web application built using HTML & CSS. It provides a platform for users to buy and sell products online.",
        image: "/Projects/Project3.png",
        tags: ["HTML", "CSS"],
        DemoURL: "#",
        GithubURL: "#",
    },

    {
        id: 4,
        title: "DataBloom",
        description:
            "DataBloom is a Python-based data analysis and visualization project that utilizes libraries such as Pandas to analyze and visualize complex datasets.",
        image: "/Projects/Project4.png",
        tags: ["Python", "Pandas"],
        DemoURL: "#",
        GithubURL: "#",
    },


    {
        id: 5,
        title: "MyPortfolio",
        description:
            "MyPortfolio is a React-based portfolio website that showcases my skills and projects.",
        image: "/Projects/Project5.png",
        tags: ["React", "JavaScript", "tailwind CSS"],

        DemoURL: "#",
        GithubURL: "#",
    },
];

export const ProjectSection = () => {
    const visibleProjects = projects.slice(0,100);

    return (
        <section id="projects" className="py-24 px-16 relative">
            <div className="container mx-auto max-w-5xl relative z-10">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Featured
                    <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on, showcasing my
                    skills and experience in web development and data analysis.
                    Each project demonstrates my ability to create functional
                    and visually appealing applications.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {visibleProjects.map((project) => (
                        <article
                            key={project.id}
                            className="group w-full max-w-64 overflow-hidden rounded-3xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-s card-hover"
                        >
                            <div className="relative overflow-hidden bg-secondary/30 aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                            </div>

                            <div className="p-5 flex flex-col gap-3">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-secondary/50 text-foreground/80 border border-border/60"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-left flex-1">
                                    <h3 className="text-lg font-semibold leading-snug mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed max-h-[4rem] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent pr-2">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-2 flex items-center gap-1">
                                    <a
                                        href={project.DemoURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open demo for ${project.title}`}
                                        className="inline-flex items-center justify-center rounded-md p-1.5 text-foreground/80 hover:text-primary hover:bg-secondary/40 transition-colors duration-300"
                                    >
                                        <ExternalLink size={14} />
                                    </a>

                                    <a
                                        href={project.GithubURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open repository for ${project.title}`}
                                        className="inline-flex items-center justify-center rounded-md p-1.5 text-foreground/80 hover:text-primary hover:bg-secondary/40 transition-colors duration-300"
                                    >
                                        <FaGithub size={14} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/oshannilushka"
                    >
                        Check my Github <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};