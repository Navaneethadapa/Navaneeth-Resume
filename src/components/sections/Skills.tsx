import { useState } from 'react';
import { 
  Brain, 
  Code, 
  Database, 
  Cloud, 
  Settings,
  Zap,
  Layers,
  Globe
} from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Languages',
      icon: Code,
      color: 'primary',
      skills: [
        { name: 'Python', logo: '🐍' },
        { name: 'Java', logo: '☕' },
        { name: 'SQL', logo: '🗄️' }
      ]
    },
    {
      category: 'AI/ML',
      icon: Brain,
      color: 'secondary',
      skills: [
        { name: 'PyTorch', logo: '🔥' },
        { name: 'TensorFlow', logo: '🧠' },
        { name: 'Hugging Face', logo: '🤗' },
        { name: 'Scikit-learn', logo: '🔬' },
        { name: 'NLP', logo: '💬' },
        { name: 'Computer Vision', logo: '👁️' },
        { name: 'GenAI', logo: '✨' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'accent',
      skills: [
        { name: 'AWS', logo: '☁️' },
        { name: 'GCP', logo: '🌩️' },
        { name: 'Azure', logo: '🔷' },
        { name: 'Docker', logo: '🐳' },
        { name: 'Kubernetes', logo: '⛵' },
        { name: 'Jenkins', logo: '🔧' },
        { name: 'GitLab CI/CD', logo: '🦊' }
      ]
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'primary',
      skills: [
        { name: 'MySQL', logo: '🐬' },
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'MongoDB', logo: '🍃' },
        { name: 'SQL Server', logo: '🗄️' }
      ]
    },
    {
      category: 'Core CS',
      icon: Settings,
      color: 'secondary',
      skills: [
        { name: 'Data Structures', logo: '🌳' },
        { name: 'OOP', logo: '🧱' },
        { name: 'Operating Systems', logo: '💻' },
        { name: 'Computer Networks', logo: '🌐' }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap = {
      primary: 'text-primary border-primary/30 bg-primary/5',
      secondary: 'text-secondary border-secondary/30 bg-secondary/5',
      accent: 'text-accent border-accent/30 bg-accent/5'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-16 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, cloud technologies, and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${getColorClass(category.color)} mr-4`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg text-center transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {skill.logo}
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </div>
                    </div>

                    {/* Tooltip */}
                    {hoveredSkill === skill.name && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur border border-white/20 px-3 py-1 rounded-lg text-sm whitespace-nowrap z-20 animate-scale-in text-white">
                        {skill.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Tech Stack Highlights
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Next.js', 'React', 'TypeScript', 'Node.js', 'Express',
              'FastAPI', 'Django', 'Tailwind CSS', 'Framer Motion',
              'Figma', 'ProCreate', 'Git', 'Linux', 'REST APIs', 'GraphQL', 'Microservices'
            ].map((tech, index) => (
              <div
                key={tech}
                className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-lg hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;