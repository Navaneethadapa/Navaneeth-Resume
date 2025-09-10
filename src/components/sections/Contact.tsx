import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';


export const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const form = event.currentTarget;
    const payload = new FormData(form);
    payload.append("access_key", "37e7901f-bae0-4f3a-9bfd-82c3538e30ad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! ✨");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's build something amazing together! Reach out for collaborations, opportunities, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400">navaneethsai.adapa@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-400">Hyderabad, India</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Availability Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
            >
              <h4 className="text-white font-semibold mb-4 text-center">Availability</h4>
              <div className="text-center space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Available for Opportunities</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Open to new projects, collaborations, and exciting challenges
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">⚡</span>
                    <span className="text-blue-400 font-medium">Quick Response</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    I'll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Send a Message</h3>
            
            {/* Email reminder with playful message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-4 mb-6"
            >
              <p className="text-sm text-purple-300 text-center">
                💌 Re-check your email, just like you re-watch your crush's Insta story (no judgment 😉)
              </p>
            </motion.div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    placeholder="Your Name"
                  />
                  <label className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 bg-transparent px-1 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 peer-valid:top-2 peer-valid:text-xs">
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    placeholder="Your Email"
                  />
                  <label className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 bg-transparent px-1 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 peer-valid:top-2 peer-valid:text-xs">
                    Your Email
                  </label>
                </div>
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                />
                <label className="pointer-events-none absolute left-4 top-6 text-gray-400 transition-all duration-200 bg-transparent px-1 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 peer-valid:top-2 peer-valid:text-xs">
                  Your Message
                </label>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <Send className={`w-5 h-5 transition-transform duration-200 ${
                  isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'
                }`} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Result Messages */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    result === "Message Sent Successfully! ✨" 
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : result === "Sending...."
                      ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {result === "Message Sent Successfully! ✨" && (
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </motion.div>
                  )}
                  {result === "Sending...." && <Send className="w-5 h-5 animate-pulse" />}
                  {result !== "Message Sent Successfully! ✨" && result !== "Sending...." && <AlertCircle className="w-5 h-5" />}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {result}
                  </motion.span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};