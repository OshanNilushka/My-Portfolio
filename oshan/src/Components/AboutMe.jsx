import { Briefcase, Code, User } from "lucide-react";
import oshanProfile from "../assets/Oshan.png";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden bg-background transition-colors duration-500"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Grid Pattern */}
        <div
          className="
          absolute inset-0
          opacity-30 dark:opacity-20
          bg-[radial-gradient(circle,#2563eb_1px,transparent_1px)]
          bg-[size:55px_55px]"
        />

        {/* Floating Square */}
        <div className="absolute top-20 left-16 w-20 h-20 rounded-2xl bg-primary/40 blur-sm animate-float"></div>

        {/* Bottom Circle */}
        <div className="absolute bottom-24 right-14 w-16 h-16 rounded-full border-[5px] border-primary/70 animate-pulse"></div>

        {/* Glow Effect */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

        {/* Extra Blur */}
        <div className="absolute bottom-10 left-1/4 w-52 h-52 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-foreground">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-7">

            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
              Passionate Web Developer &
              <span className="text-primary"> Tech Creator</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed text-[16px] md:text-justify">
              I'm an IIT Undergraduate at Uva Wellassa University with a strong
              passion for web development and modern technologies. I am
              currently pursuing a BSc (Hons) in Industrial Information
              Technology while continuously improving my technical and
              problem-solving skills.
            </p>

            <p className="text-muted-foreground leading-relaxed text-[16px] md:text-justify">
              I specialize in crafting responsive and dynamic web applications
              using modern frameworks and tools. From creating intuitive user
              interfaces to developing scalable backend systems, I enjoy
              turning ideas into real-world digital solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">

              <a
                href="#contact"
                className="
                px-7 py-3 rounded-full
                bg-primary text-primary-foreground
                font-medium
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
                transition-all duration-300
                text-center"
              >
                Get In Touch
              </a>

              <a
                href="/cv.pdf"
                download
                className="
                px-7 py-3 rounded-full
                border border-primary
                text-primary
                hover:bg-primary/10
                hover:scale-105
                transition-all duration-300
                text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col items-center gap-8">

            {/* Profile Image */}
            <div className="relative flex items-center justify-center">

              {/* Rotating Border */}
              <div className="absolute w-[350px] h-[430px] rounded-[45%] border border-primary/40 animate-spinSlow"></div>

              {/* Second Border */}
              <div className="absolute w-[330px] h-[410px] rounded-[45%] border-2 border-primary/60"></div>

              {/* Image Container */}
              <div
                className="
                relative w-[310px] h-[390px]
                rounded-[45%]
                overflow-hidden
                border-[6px]
                border-white/10 dark:border-white/10
                border-black/10
                shadow-[0_0_40px_rgba(37,99,235,0.35)]
                group"
              >
                <img
                  src={oshanProfile}
                  alt="Oshan"
                  className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-black/60"></div>
              </div>
            </div>

            {/* ================= INFO CARDS ================= */}
            <div className="grid gap-4 w-full">

              {/* Card 1 */}
              <div
                className="
                p-5 rounded-2xl
                border border-border
                bg-card/80
                backdrop-blur-lg
                flex items-start gap-4
                hover:border-primary/50
                hover:-translate-y-1
                transition-all duration-300"
              >
                <User className="text-primary mt-1" />

                <div>
                  <h4 className="font-semibold text-lg text-foreground">
                    Who I Am
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    A creative developer passionate about building modern and
                    engaging web experiences.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="
                p-5 rounded-2xl
                border border-border
                bg-card/80
                backdrop-blur-lg
                flex items-start gap-4
                hover:border-primary/50
                hover:-translate-y-1
                transition-all duration-300"
              >
                <Code className="text-primary mt-1" />

                <div>
                  <h4 className="font-semibold text-lg text-foreground">
                    Development
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    Building responsive, scalable, and interactive applications
                    using modern technologies.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="
                p-5 rounded-2xl
                border border-border
                bg-card/80
                backdrop-blur-lg
                flex items-start gap-4
                hover:border-primary/50
                hover:-translate-y-1
                transition-all duration-300"
              >
                <Briefcase className="text-primary mt-1" />

                <div>
                  <h4 className="font-semibold text-lg text-foreground">
                    Experience
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    Continuously learning and improving through academic and
                    real-world projects.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};