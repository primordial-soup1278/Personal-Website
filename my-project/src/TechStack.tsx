const techStack = [
  {
    title: "Programming Languages",
    items: [
      "C", "C++", "Python", "JavaScript", "Java",
      "Kotlin", "MATLAB", "R", "SQL", "HTML", "CSS"
    ],
  },
  {
    title: "Frameworks and Libraries",
    items: [
      "React", "React Native", "Jetpack Compose", "Flask",
      "ExpressJS", "TailwindCSS", "Spring Boot", "NumPy", "Pandas"
    ],
  },
  {
    title: "Databases",
    items: ["SQLite", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Development Tools",
    items: [
      "Git", "Selenium", "VSCode", "Neovim",
      "Visual Studio", "Cursor", "Docker", "ChatGPT"
    ],
  },
];

export default function TechStack() {
  return (
    <div>
      <h4 className="text-2xl font-bold mb-6">Tech Stack</h4>

      <div className="space-y-4">
        {techStack.map((group) => (
          <div key={group.title} className="text-sm">
            <span className="font-semibold text-white">
              {group.title}:
            </span>{" "}
            <span className="text-blue-400">
              {group.items.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
