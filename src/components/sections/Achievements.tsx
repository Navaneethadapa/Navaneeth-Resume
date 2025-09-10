import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Star, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      icon: Award,
      title: 'Top 10 in Google BigQuery Skills Challenge 2023',
      description: 'Competed against thousands of participants in advanced data analytics and cloud computing challenges.',
      year: '2023',
      hue: 220, // Blue
    },
    {
      id: 2,
      icon: Trophy,
      title: '96 Percentile in JEE Mains',
      description: 'Secured 96 percentile in JEE Mains with top scores in Mathematics and Physics, and ranked 1st in the entire college.',
      year: '2020 April',
      hue: 260, // Purple
    },
    {
      id: 3,
      icon: Users,
      title: 'Mentored 150+ Students',
      description: 'Successfully guided students in mathematics, computer science, and AI concepts through personalized mentoring.',
      year: '2020 Mar-2021 Dec',
      hue: 200, // Light Blue
    },
  ];

  const stats = [
    { number: '5000+', label: 'AI Prompts Refined', icon: Award },
    { number: '100+', label: 'Apps Managed', icon: Trophy },
    { number: '4.8 ⭐️', label: 'Chegg Subject Expert', icon: Star },
    { number: '150+', label: 'Students Mentored', icon: Users },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-black via-gray-900/50 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🏆 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition and milestones that reflect dedication to excellence and innovation
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center group hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <stat.icon size={24} className="text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl">
                {/* Icon and Year */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl p-1"
                    style={{
                      background: `linear-gradient(135deg, hsl(${achievement.hue}, 70%, 60%), hsl(${achievement.hue + 30}, 65%, 55%))`
                    }}
                  >
                    <div className="w-full h-full bg-black/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <achievement.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-mono text-gray-400 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    {achievement.year}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold leading-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, hsl(${achievement.hue}, 70%, 60%), hsl(${achievement.hue + 30}, 65%, 55%))`
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 inline-block max-w-md">
            <p className="text-gray-400 text-sm">
              Passionate about continuous learning and making meaningful impact through technology
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;