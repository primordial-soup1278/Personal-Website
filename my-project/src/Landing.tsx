
import type { Project } from "./Project"
import ProjectCard from "./ProjectCard"


const Landing = () => {
    // ... ProjectData stays the same ...
    const ProjectData : Project[] = [
        {
            title: "Anon-forum",
            description:"An anonymous forums users can use to ask for help and support",
            tags: ["Java", "React", "Spring Boot", "Tailwind CSS", "Supabase"],
            imageUrl : "none"
        },
        {
            title: "SFU Meetup",
            description : "A android application that allows SFU stuends to plan, join, and organize events",
            tags: ["Kotlin", "Jetpack Compose", "Firebase"],
            imageUrl: "none"
        },
        {
            title: "GeoShopper",
            description : "A chrome extension that identifies brand origins and suggests local alternatives from an Amazon shopping cart",
            tags: ["HTML", "CSS", "JavaScript"],
            imageUrl: "none"
        },
        {
            title: "Automatic badminton drop-in registration",
            description: "A python script that automates the process of registering for drop-in badminton events for a local community centre near me",
            tags : ["Python", "Selenium"],
            imageUrl : "none"
        },
        {
            title : "Unix shell implementation",
            description : "A functional shell program in C that executes user commands, handles process management, and signals",
            tags : ["C", "CMake"],
            imageUrl : "none"
        }
    ];
 
    return (
        /* Removed flex-col min-h-screen border-black to keep it clean */
        <div className="bg-[#0A0A0B] min-h-screen text-white font-sans selection:bg-blue-500/30">
            
            {/* HERO SECTION - Slimmed with max-w-3xl */}
            <div className="flex flex-col justify-center items-center py-24 px-6 text-center max-w-3xl mx-auto">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                    Hi, I'm <span className="text-blue-500">Jayden Thung</span>
                </h1>
                <h2 className="text-xl text-gray-400 font-medium leading-relaxed">
                    Computing Science student at SFU looking for internship or co-op opportunities.
                </h2>
                <div className="flex flex-row gap-4 mt-8">
                    <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/20">
                        View My Work
                    </button>
                    <button className="border border-white/20 hover:bg-white/5 transition-colors text-white font-bold py-3 px-6 rounded-xl">
                        Contact Me
                    </button>
                </div>
            </div>

            {/* PROJECTS SECTION - Grid makes it taller */}
            <div className="bg-[#0f0721]/50 py-20 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6">
                    <h4 className="text-2xl font-bold mb-10 pl-4 border-l-4 border-blue-500">Featured Projects</h4>
                    
                    {/* Changed from horizontal flex to a 2-column grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ProjectData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ABOUT & SKILLS SECTION - Two columns on desktop, stacked on mobile */}
            <div className="max-w-5xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="md:col-span-2">
                        <h4 className='text-2xl font-bold mb-6'>About Me</h4>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I'm a Computing Science student at SFU with a passion for building software that solves problems, 
                            allows me to learn, and improve my abilities. I enjoy diving into full stack applications—from 
                            architecting backends to crafting responsive interfaces with React. My goal is to apply my 
                            skills to build scalable, user-centric applications.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className='text-2xl font-bold mb-6'>Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Java", "Python", "C", "React", "Kotlin", "Spring Boot", "SQL"].map((skill) => (
                                <span key={skill} className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-blue-400 text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Jayden Thung • Simon Fraser University
            </footer>
        </div>
    );
}

export default Landing;