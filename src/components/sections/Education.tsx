import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    id: 1,
    institution: "Vishnu Institute of Technology",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2020 – 2024",
    location: "Bhimavaram, India",
    cgpa: "CGPA: 8.11/10",
    achievements: [
      "Core coursework in AI, Machine Learning, Operating Systems, Computer Networks, and Advanced Math"
    ]
  },
  {
    id: 2,
    institution: "Pragati Junior College",
    degree: "Intermediate (MPC)",
    duration: "2018 – 2020",
    location: "Kakinada, India",
    cgpa: "CGPA: 9.29/10",
    achievements: [
      "Strong foundation in Mathematics and Problem Solving.", "Secured 96 percentile in JEE Mains and secured the top rank in the college."
    ]
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 via-black/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎓 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey in computer science and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                      {education.institution}
                    </h3>
                    <h4 className="text-lg text-blue-400 font-semibold mb-4">
                      {education.degree}
                    </h4>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold text-green-400">{education.cgpa}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-white font-semibold mb-3">Key Highlights:</h5>
                  {education.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (achievementIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};