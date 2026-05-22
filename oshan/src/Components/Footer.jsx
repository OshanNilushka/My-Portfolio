import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return(
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12">
        <div className="container mx-auto max-w-4xl flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Oshan. All rights reserved.
            </p>
            <a href="#hero" className="text-sm text-primary hover:text-primary/80 transition-colors flex-shrink-0">
                <ArrowUp className="h-5 w-5" />
            </a>
        </div>
    </footer>
    );
};