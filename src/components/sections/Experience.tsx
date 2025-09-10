import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst",
    duration: "Jul 2024 – Present",
    location: "Hyderabad",
    logo: "/placeholder.svg",
    highlights: [
      "Managed lifecycle of 100+ applications, deployed to 10,000+ endpoints via Microsoft Intune.",
      "Automated packaging with 50+ PowerShell scripts, cutting manual effort by 30%.",
      "Built 5 real-time dashboards for project metrics, improving stakeholder visibility.",
      "Resolved 200+ incidents in ServiceNow and authored 50+ KB articles, boosting team efficiency.",
      "Collaborated with QA, security, and PM teams, achieving 98% UAT success rate."
    ]
  },
  {
    id: 2,
    company: "Outlier AI",
    role: "Freelance AI Trainer",
    duration: "Dec 2024 – Present",
    location: "Remote",
    logo: "/placeholder.svg",
    highlights: [
      "Refined 5000+ high-quality prompt–response pairs, improving model accuracy by 20%.",
      "Enhanced clarity and factual correctness of AI outputs by 30%.",
      "Contributed to peer-review workflows, raising overall model safety by 15%."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            💼 Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey in technology and artificial intelligence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400"></div>
          
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-black shadow-lg shadow-blue-500/30"></div>
                
                <div className="ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex items-start gap-4 mb-4 lg:mb-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg p-2 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>
                          <h4 className="text-xl text-blue-400 font-semibold mb-2">{experience.company}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{experience.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (highlightIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{highlight}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};