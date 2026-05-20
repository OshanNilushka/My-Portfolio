                {secondRow.length > 0 && (
                    <>
                        <div className="mt-4 flex justify-center">
                            {secondRow.map((project) => (
                                <article
                                    key={project.id}
                                    className="group w-full max-w-64 bg-card rounded-2xl overflow-hidden border shadow-xs card-hover"
                                >
                                    <div className="relative h-32 overflow-hidden bg-secondary/30">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                                    </div>

                                    <div className="p-3 flex flex-col gap-2">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-secondary/60 text-secondary-foreground border"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="text-left">
                                            <h3 className="text-sm font-semibold leading-snug mb-1.5">
                                                {project.title}
                                            </h3>

                                            <p className="text-[12px] text-muted-foreground leading-snug line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="mt-1 flex items-center gap-1">
                                            <a
                                                href={project.DemoURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open demo for ${project.title}`}
                                                className="inline-flex items-center justify-center rounded-md p-1 text-foreground/80 hover:text-primary hover:bg-secondary/40 transition-colors duration-300"
                                            >
                                                <ExternalLink size={14} />
                                            </a>

                                            <a
                                                href={project.GithubURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open GitHub repository for ${project.title}`}
                                                className="inline-flex items-center justify-center rounded-md p-1 text-foreground/80 hover:text-primary hover:bg-secondary/40 transition-colors duration-300"
                                            >
                                                <FaGithub size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>



                       

                        <div className="text-center mt-12">
                            <a
                                className="cosmic-button w-fit flex items-center mx-auto gap-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/oshannilushka"
                            >
                                View My GitHub Profile
                            </a>
                        </div>
                    </>
                )}