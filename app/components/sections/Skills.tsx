"use client";

const skillCategories = [
  {
    title: "Languages",
    emoji: "🔤",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    emoji: "🎨",
    skills: ["React", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: ["Spring Boot", "Flask", "REST APIs"],
  },
  {
    title: "Database",
    emoji: "🗄️",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tooling",
    emoji: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "PyCharm"],
  },
  {
    title: "Foundations",
    emoji: "📐",
    skills: ["DSA", "Applied AI", "System Design", "Cloud Computing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      {/* Subtle divider */}
      <div
        className="w-full h-px max-w-6xl mx-auto mb-28"
        style={{ background: "var(--border)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-sm font-mono mb-2"
            style={{ color: "var(--accent)" }}
          >
            02. tech_stack
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            What I Build With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
              style={{ borderColor: "rgba(99,102,241,0.1)" }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.emoji}</span>
                <h3
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "var(--accent)" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--foreground)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
