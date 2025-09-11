import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  message: string;
  linkedinUrl: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Vaishnavi Dasika",
    role: "MS CS@CU Student",
    company: "Columbia University",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    message: "Collaborating with Navaneeth in tech projects was really an good experience. His technical expertise, professionalism, and passion for AI/ML is OutStanding. A true asset to any team.",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-dasika/",
    rating: 5
  },
  {
    id: "2", 
    name: "Dhanush Dasari",
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    message: "Working with Navaneeth has been exceptional. His deep understanding of mathematics and AI algorithms, combined with his ability to translate complex concepts into practical solutions, makes him an invaluable collaborator.",
    linkedinUrl: "https://www.linkedin.com/in/dhanushdhm/",
    rating: 5
  },
  {
    id: "3",
    name: "Dr. Emily Watson",
    role: "Research Director",
    company: "FutureTech Institute",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    message: "Navaneeth's passion for technology and mathematics is evident in every project. His analytical thinking and problem-solving skills are remarkable. He approaches challenges with enthusiasm and delivers innovative solutions consistently.",
    linkedinUrl: "https://www.linkedin.com/in/emily-watson-research",
    rating: 5
  },
  {
    id: "4",
    name: "James Thompson",
    role: "Chief Technology Officer",
    company: "NextGen Dynamics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    message: "His professionalism and dedication to excellence are unmatched. Navaneeth's expertise in AI and technology development has been instrumental in driving our innovation forward. Highly recommended for any technical role.",
    linkedinUrl: "https://www.linkedin.com/in/james-thompson-cto",
    rating: 5
  },
  {
    id: "5",
    name: "Priya Sharma",
    role: "AI Research Lead",
    company: "Quantum Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    message: "Navaneeth combines technical brilliance with exceptional work ethic. His enthusiasm for AI and mathematical modeling is contagious, and his ability to deliver complex projects on time is impressive. A true professional.",
    linkedinUrl: "https://www.linkedin.com/in/priya-sharma-ai",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const handleProfileClick = (linkedinUrl: string) => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional testimonials from colleagues and collaborators who've experienced my work firsthand.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group h-full"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-blue-400 opacity-60" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Message */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    "{testimonial.message}"
                  </p>

                  {/* Profile Section */}
                  <motion.div
                    onClick={() => handleProfileClick(testimonial.linkedinUrl)}
                    className="flex items-center gap-3 cursor-pointer group/profile"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/20 group-hover/profile:border-blue-400 transition-colors duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                        <ExternalLink className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm group-hover/profile:text-blue-300 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Ready to work together? 
            <span className="text-blue-400 ml-1">Let's create something amazing!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};