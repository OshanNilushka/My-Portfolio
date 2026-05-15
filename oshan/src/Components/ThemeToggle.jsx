import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className } = {}) => {

  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;


    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  });


  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((v) => !v);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
      "p-2 rounded-full transition-colors duration-300 focus:outline-none",
      className
      )}
      >
    
      {isDarkMode ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};