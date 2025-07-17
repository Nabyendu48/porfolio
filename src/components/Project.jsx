const projects = [
  {
    name: "MeetTalent",
    description: "A video calling interview platform with screen sharing, recording, and secure authentication.",
    tech: "React, Next.js, Typescript, Stream, Convex, Clerk, Tailwind",
  },
  {
    name: "CodeSandbox",
    description: "Real-time collaborative document editor with autosave, formatting, and PDF export.",
    tech: "React, Node.js, Express, MongoDB, Tailwind",
  },
  {
    name: "StreamX",
    description: "A video streaming service for movies and TV shows with trailer previews and history tracking.",
    tech: "React, Node.js, MongoDB, Express, Tailwind, JWT",
  }
];

const Projects = () => (
  <section id="projects" className="py-16 px-6 bg-gray-100 text-center">
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {projects.map((p) => (
        <div key={p.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">{p.name}</h3>
          <p className="text-gray-700">{p.description}</p>
          <p className="text-sm mt-2 text-indigo-500">{p.tech}</p>
        </div>
      ))}
    </div>
  </section>
)
export default Projects
