import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to collaborate? Feel free to reach out!
                    I'm always open to discussing new opportunities
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">

                        <h3 className="text-2xl font-monospace mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6">

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
                                        href="tel:+1234567890"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (234) 567-890
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
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center justify-center text-muted-foreground">
                        Contact form coming soon...
                    </div>

                </div>

            </div>
        </section>
    );
};