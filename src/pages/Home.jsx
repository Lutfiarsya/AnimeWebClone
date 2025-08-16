import imageBanner from "../assets/banner.jfif";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full relative h-screen flex flex-col justify-center items-center homePage">
        <div className="relative z-10 flex h-full w-full flex-col justify-center items-center">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-semibold text-7xl overflow-hidden text-white"
          >
            Welcome to{" "}
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-[--SecondColor]"
            >
              MyAnimeList
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-normal text-white text-md mt-2"
          >
            Sebuah platform untuk mengelola dan menemukan anime
          </motion.p>
          
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/explore")}
            className="bg-[--SecondColor] text-white py-2 px-4 rounded-md mt-4 hover:bg-[--ThirdColor] transition-colors duration-500"
          >
            Let's Explore
          </motion.button>
        </div>
        
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          src={imageBanner}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
