import { useEffect } from "react";
import { motion } from "framer-motion";

const firstName = "Oshan".split("");
const lastName = "Nilushka".split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.25,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const IntroScreen = ({ onFinish }) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      onFinish();
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onFinish]);

  return (
    <motion.div
      onClick={onFinish}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.06,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden select-none cursor-pointer px-4"
      aria-label="Welcome intro screen"
    >
      {/* Cosmic Glow Backdrop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.85, scale: 1.1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] rounded-full bg-primary/25 blur-[110px] pointer-events-none"
      />

      {/* Expanding Cosmic Orbit Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 45 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-[250px] h-[250px] sm:w-[370px] sm:h-[370px] rounded-full border border-dashed border-primary/30 pointer-events-none"
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_14px_rgba(139,92,246,0.95)]" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(196,181,253,0.9)]" />
      </motion.div>

      {/* Main Animated Name */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4"
        >
          <span className="inline-flex text-primary">
            {firstName.map((char, index) => (
              <motion.span
                key={`first-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>

          <span className="inline-flex text-foreground">
            {lastName.map((char, index) => (
              <motion.span
                key={`last-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Glowing Expanding Accent Beam */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 h-[2px] w-48 sm:w-72 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_18px_rgba(139,92,246,0.85)] origin-center"
        />

        {/* Subtitle Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12, letterSpacing: "0.18em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.35em" }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-xs sm:text-sm uppercase text-muted-foreground font-medium"
        >

        </motion.p>
      </div>
    </motion.div>
  );
};
