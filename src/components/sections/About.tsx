import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Palette, Rocket } from 'lucide-react';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who Am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">I?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Computer Science Engineer passionate about AI and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-lg leading-relaxed space-y-4 text-gray-300">
              <p>
                Hello! I'm <span className="text-blue-400 font-semibold">Navaneeth Sai Adapa</span>, 
                a Computer Science Engineer from Andhra Pradesh with an insatiable passion for 
                technology and innovation.
              </p>
              
              <p>
                My journey spans across <span className="text-purple-400 font-semibold">Artificial Intelligence</span>, 
                <span className="text-blue-400 font-semibold"> Generative AI</span>, and 
                <span className="text-purple-400 font-semibold"> UI/UX Design</span>. I thrive at the 
                intersection where human creativity meets machine intelligence.
              </p>
              
              <p>
                My ambition is to build innovative AI-powered solutions that not only solve complex 
                problems but also enhance human potential. I'm particularly excited about 
                <span className="text-blue-400 font-semibold"> Prompt Engineering</span> and 
                the future of human-AI collaboration.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What Drives Me</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Building AI solutions that make a real impact</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Creating seamless user experiences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Staying at the forefront of technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Continuous learning and innovation</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Image & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* User Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center overflow-hidden group hover:bg-white/10 transition-all duration-300">
                  <img 
                    src={profilePlaceholder} 
                    alt="Navaneeth Sai Adapa" 
                    className="w-72 h-72 rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, title: 'AI/ML Innovation', description: 'Generative AI & NLP' },
                { icon: Code, title: 'Systems Engineering', description: 'Scalable Solutions' },
                { icon: Palette, title: 'UI/UX Design', description: 'Beautiful Experiences' },
                { icon: Rocket, title: 'Tech Leadership', description: 'Innovation Focus' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '6+', label: 'Projects Completed' },
            { number: '1.5+', label: 'Years Experience' },
            { number: '25+', label: 'Technologies' },
            { number: '∞', label: 'Learning Never Stops' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;