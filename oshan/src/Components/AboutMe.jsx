import { ArrowDownIcon, Briefcase, Code, User } from "lucide-react";
import oshanProfile from "../assets/oshan.jpeg";

export const AboutMe = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate Full-Stack Developer focused on building
              intelligent and visually refined systems. With a strong
              foundation in both front-end and back-end technologies, I thrive
              on creating seamless user experiences and efficient solutions.
              My journey in web development has been driven by a love for
              problem-solving and continuous learning.
            </p>

            <p className="text-muted-foreground">
              I specialize in crafting responsive and dynamic web applications,
              leveraging modern frameworks and tools to bring ideas to life.
              Whether it's developing intuitive user interfaces or architecting
              robust back-end systems, I am dedicated to delivering high-quality
              code and innovative solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative rounded-full p-[3px] bg-gradient-to-br from-primary/70 via-primary/25 to-primary/70 shadow-lg">
                <div className="rounded-full bg-background p-[3px]">
                  <div className="rounded-full bg-card p-1">
                    <img
                      src={oshanProfile}
                      alt="Oshan portrait"
                      loading="lazy"
                      className="h-52 w-52 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4">
              
              <div className="p-4 rounded-2xl border border-border bg-card flex items-start gap-4">
                <User className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Who I Am</h4>
                  <p className="text-sm text-muted-foreground">
                    A creative developer passionate about modern web experiences.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-border bg-card flex items-start gap-4">
                <Code className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Building responsive, scalable, and interactive applications.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-border bg-card flex items-start gap-4">
                <Briefcase className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuously learning and improving through real-world projects.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
            Scroll Down
         </span >

         <ArrowDownIcon className="h-5 w-5 text-primary "/>
        </div>
    </section>
  );
};