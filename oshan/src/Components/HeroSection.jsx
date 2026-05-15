
export const HeroSection = () => {
  return (
    <section id ="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10"></div>
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-light">
                <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-2">

                {""}
                Oshan</span>

                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2" > 
                    {" "}
                    Nilushka 
                    </span>

            </h1>
            <h2 className="text-lg md:text-2xl text-foreground/80 opacity-0 animate-fade-in-delay-4">
                Full Stack Developer | Tech Enthusiast | Lifelong Learner


            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
       I'm passionate Full-Stack Developer focused on  buiding intelligent and visually refined systems.
            </p>
            <div>
                <a href="#projects" className="cosmic-button opacity-0 animate-fade-in-delay-5">
                    View My Work
                </a>
            </div>

        </div>
    </section>
    );
};
