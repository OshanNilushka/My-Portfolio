import { ArrowDownIcon, ArrowRight, Code2, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import heroPhoto from "../assets/Oshan-cutout.png";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/oshannilushka",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oshannilushka/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/oshann0804/",
    icon: FaInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/94715679926",
    icon: FaWhatsapp,
  },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Side - Intro & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 order-2 lg:order-1">
            {/* Status Pill */}


            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
              <span className="opacity-0 animate-fade-in">Hi, I&apos;m </span>
              <span className="text-primary  opacity-0 animate-fade-in-delay-1">
                Oshan
              </span>{" "}
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent opacity-0 animate-fade-in-delay-2">
                Nilushka
              </span>
            </h1>

            {/* Role Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/85 opacity-0 animate-fade-in-delay-3">
              Full Stack Developer | Tech Enthusiast | Lifelong Learner
            </h2>

            {/* Bio */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in-delay-3">
              I&apos;m a passionate Full-Stack Developer focused on building
              intelligent, scalable, and visually refined digital systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
              <a
                href="#projects"
                className="cosmic-button inline-flex items-center gap-2 px-7 py-3"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-primary/50 text-foreground hover:text-primary hover:border-primary hover:bg-primary/10 font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 opacity-0 animate-fade-in-delay-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-sm text-foreground/80 hover:text-primary hover:border-primary/60 hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Forward-Focused Cutout Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-fade-in-delay-2">
            <div className="relative group flex items-end justify-center w-[300px] h-[410px] sm:w-[350px] sm:h-[475px] lg:w-[400px] lg:h-[525px]">
              {/* Deep Cosmic Backlight Spotlight (Separates Dark Suit & Hair Forward) */}
              <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-primary/35 blur-[75px] opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-purple-400/30 blur-3xl pointer-events-none" />

              {/* Rotating Cosmic Orbit Ring with Glowing Star Nodes (Behind Subject) */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[275px] h-[275px] sm:w-[325px] sm:h-[325px] lg:w-[375px] lg:h-[375px] rounded-full border border-dashed border-primary/35 pointer-events-none animate-spinSlow">
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_14px_rgba(139,92,246,0.95)]" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(196,181,253,0.95)]" />
              </div>

              {/* Sculpted Cosmic Backdrop Circle (Subject Pops Out Above Top Edge) */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[240px] h-[240px] sm:w-[285px] sm:h-[285px] lg:w-[330px] lg:h-[330px] rounded-full bg-gradient-to-b from-primary/35 via-primary/12 to-transparent border border-primary/45 shadow-[0_0_60px_rgba(139,92,246,0.3)] backdrop-blur-[2px] pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]" />

              {/* Subtle Floating Sparkle Chip */}
              <div className="absolute top-12 right-2 sm:right-3 z-20 p-2.5 rounded-2xl border border-primary/40 bg-card/80 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.25)] text-primary animate-float">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Background-Removed Cutout Portrait (Popping Forward) */}
              <div
                className="relative z-10 w-[245px] h-[400px] sm:w-[285px] sm:h-[465px] lg:w-[315px] lg:h-[515px] pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-translate-y-2"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
                }}
              >
                <img
                  src={heroPhoto}
                  alt="Oshan Nilushka - Full Stack Developer"
                  className="w-full h-full object-cover object-top drop-shadow-[0_18px_32px_rgba(0,0,0,0.65)] drop-shadow-[0_0_28px_rgba(139,92,246,0.4)]"
                />
              </div>

              {/* Foreground Floating Glass Pill (Reinforces 3D Depth Layer) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-primary/35 bg-card/85 backdrop-blur-md shadow-[0_12px_35px_rgba(0,0,0,0.45)] whitespace-nowrap">
                <div className="p-2 rounded-xl bg-primary/20 text-primary shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-bounce z-10"
      >
        <span className="text-xs sm:text-sm mb-1.5">Scroll</span>
        <ArrowDownIcon className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};
