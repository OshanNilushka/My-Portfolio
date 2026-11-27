import { useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    name: "HTML/CSS",
    category: "frontend",
    icons: [
      { icon: FaHtml5, color: "#E34F26" },
      { icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    name: "JavaScript",
    category: "frontend",
    icons: [{ icon: SiJavascript, color: "#F7DF1E" }],
  },
  {
    name: "React",
    category: "frontend",
    icons: [{ icon: SiReact, color: "#61DAFB" }],
  },
  {
    name: "TypeScript",
    category: "frontend",
    icons: [{ icon: SiTypescript, color: "#3178C6" }],
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icons: [{ icon: SiTailwindcss, color: "#06B6D4" }],
  },
  {
    name: "Next.js",
    category: "frontend",
    icons: [{ icon: SiNextdotjs, className: "text-foreground" }],
  },

  {
    name: "Node.js",
    category: "backend",
    icons: [{ icon: SiNodedotjs, color: "#339933" }],
  },
  {
    name: "Express",
    category: "backend",
    icons: [{ icon: SiExpress, className: "text-foreground" }],
  },
  {
    name: "MongoDB",
    category: "backend",
    icons: [{ icon: SiMongodb, color: "#47A248" }],
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icons: [{ icon: SiPostgresql, color: "#4169E1" }],
  },
  {
    name: "GraphQL",
    category: "backend",
    icons: [{ icon: SiGraphql, color: "#E10098" }],
  },

  {
    name: "Git/GitHub",
    category: "tools",
    icons: [
      { icon: SiGit, color: "#F05032" },
      { icon: SiGithub, className: "text-foreground" },
    ],
  },
  {
    name: "Docker",
    category: "tools",
    icons: [{ icon: SiDocker, color: "#2496ED" }],
  },
  {
    name: "Figma",
    category: "tools",
    icons: [{ icon: SiFigma, color: "#F24E1E" }],
  },
  {
    name: "VS Code",
    category: "tools",
    icons: [{ icon: VscVscode, color: "#007ACC" }],
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" ||
      skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-16 relative"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-xl shadow-sm border border-border/50 card-hover flex flex-col items-center justify-center gap-3 w-full"
            >
              <div className="flex items-center justify-center gap-2 text-4xl">
                {skill.icons.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Icon
                      key={idx}
                      className={item.className}
                      style={item.color ? { color: item.color } : undefined}
                    />
                  );
                })}
              </div>

              <h3 className="font-semibold text-base sm:text-lg text-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};