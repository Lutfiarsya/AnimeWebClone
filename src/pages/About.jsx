import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import { FaUsers, FaBookReader, FaStar, FaHeadset } from 'react-icons/fa';
import { PhoneIcon, ClockIcon, MailIcon } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: "50K+", label: "Active Users" },
    { icon: <FaBookReader />, number: "10K+", label: "Anime & Manga" },
    { icon: <FaStar />, number: "100K+", label: "Reviews" },
    { icon: <FaHeadset />, number: "24/7", label: "Support" },
  ];

  const features = [
    "Comprehensive anime & manga database",
    "Personalized recommendations",
    "Active community discussions",
    "Real-time updates on new releases"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen mt-8 w-full bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14 lg:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto overflow-hidden"
        >

          <motion.div 
            className="text-center mb-12 sm:mb-16 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl overflow-hidden lg:text-5xl font-bold text-[--SecondColor] mb-4 sm:mb-6">
              Discover Anime
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Your Journey into the World of Japanese Animation and Comics
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 p-2 sm:p-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow"
              >
                <div className="text-2xl sm:text-3xl text-[--SecondColor] mb-2">{stat.icon}</div>
                <div className="text-lg sm:text-2xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>



          <motion.section 
            className="bg-white p-6 sm:p-10 lg:p-16 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.1)] mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="h-2 w-2 bg-[--SecondColor] rounded-full"></div>
                    <p className="text-gray-700 text-sm sm:text-base">{feature}</p>
                  </motion.div>
                ))}
              </div>
              <div className="bg-[--SecondColor]/10 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[--SecondColor]">
                  Get Started Today
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Join our community and start tracking your anime journey!
                </p>
                <button className="bg-[--SecondColor] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[--SecondColor]/80 transition-colors w-full text-sm sm:text-base">
                  Sign Up Now
                </button>
              </div>
            </div>
          </motion.section>



          <motion.section 
            className="bg-gradient-to-r from-[--SecondColor] to-[--ThirdColor] p-6 sm:p-8 rounded-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
              Need Help?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
                <div className="space-y-2 text-blue-100 text-sm sm:text-base">
                  <div className='flex flex-row items-center gap-2'>
                    <MailIcon size={20}/> 
                    <p>support@myanimelist-clone.com</p>
                  </div>

                  <div className='flex flex-row items-center gap-2'>
                    <PhoneIcon size={20}/> 
                    <p>+62 123 456 78</p>
                  </div>


                  <div className='flex flex-row items-center gap-2'>
                    <ClockIcon size={20}/> 
                    <p>24/7 Customer Support</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none text-sm sm:text-base"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none text-sm sm:text-base"
                ></textarea>
                <button className="w-full bg-white text-[--SecondColor] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base">
                  Send Message
                </button>
              </form>
            </div>
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
