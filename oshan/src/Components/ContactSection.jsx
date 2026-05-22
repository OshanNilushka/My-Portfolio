import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useToast } from "../Components/ui/toast";
import { useState, useRef } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon.",
                type: "success",
                duration: 5000
            });
            
            // Reset form
            if (formRef.current) {
                formRef.current.reset();
            }
            
            setIsSubmitting(false);
        }, 1500);
    };





    return (
        <section
            id="contact"
            className="py-24 px-8 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to collaborate?
                    Feel free to reach out! I'm always open to discussing
                    new opportunities.
                </p>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">

                        <h3 className="text-2xl font-semibold mb-6 ">
                            Contact Information
                        </h3>

                        <div className="space-y-6 text-left">

                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Email</h4>

                                    <a
                                        href="mailto:oshannilushka27@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        oshannilushka27@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Phone</h4>

                                    <a
                                        href="tel:+94715679926"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +94 71 5679926
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Location</h4>

                                    <p className="text-muted-foreground">
                                        Matara, Sri Lanka
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <h4 className="text-2xl font-semibold mb-6">
                                Connect with Me
                            </h4>

                            <div className="flex items-center gap-5">

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/oshannilushka/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                                >
                                    <FaLinkedin className="h-5 w-5 text-primary" />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/oshann0804/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                                >
                                    <FaInstagram className="h-5 w-5 text-primary" />
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/94700000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                                >
                                    <FaWhatsapp className="h-5 w-5 text-primary" />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="rounded-3xl border border-border bg-card p-6 max-w-lg mx-auto w-full">
                        <h3 className="text-lg font-semibold mb-4 text-center">Send a Message</h3>

                        <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition text-sm"
                                    placeholder="Pedro Machado"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition text-sm"
                                    placeholder="pedro@example.com"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-xs font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={3}
                                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none text-sm"
                                    placeholder="Your message here..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                               {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};