import { useEffect, useState } from "react";

export const StarBackground = () => {
    const createStars = () => {
        if (typeof window === "undefined") return [];

        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.3 + 0.15,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        return newStars;
    };

    const createMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                opacity: Math.random(),
                delay: Math.random() * 5,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        return newMeteors;
    };

    const [stars, setStars] = useState(() => createStars());
    const [meteors] = useState(() => createMeteors());

    useEffect(() => {
        const handleResize = () => setStars(createStars());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                        width: star.size+ "px",
                        height: star.size+ "px",
                        top: star.y+ "%",
                        left: star.x+ "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration+ "s",
                    }}
                />
            ))}

            {/* Meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size + "px",
                        height: meteor.size + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};