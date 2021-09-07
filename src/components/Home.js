import React from "react";
import image from "../assets/01.jpg";
import { motion } from "framer-motion";
import {
  BsFillCameraVideoFill,
  BsCamera,
  BsLaptop,
  BsEye,
} from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-intro">
          <motion.div
            animate={{ x: 50 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div className="home-intro-heading">
              <h1>Hi, I am Mukhammadrasul</h1>
              <h2>Frontend engineer with React.js framework</h2>
              <button>View my work</button>
            </div>
          </motion.div>
          <motion.div
            animate={{ x: -50 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div className="home-intro-image">
              <img src={image} alt="#" className="my-img" />
            </div>{" "}
          </motion.div>
        </div>

        <div className="home-specialization">
          <h2>I Specialize in</h2>
          <div className="bottom-line"></div>
          <p>
            Photography as well as creating digital masterpieces and UI/UX
            layouts for websites and mobile application.
          </p>
        </div>

        <div className="home-specialization-grid">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div>
              <BsCamera size={40} />
              <h3>Photography</h3>
              <p>
                I create high quality images with my professional Photography
                equipment and edit them with Adobe Photoshop. Photography is my
                best skill.
              </p>
            </div>
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div>
              <BsFillCameraVideoFill size={40} />
              <h3>Video editing</h3>
              <p>
                I create high quality videos with my professional computer
                equipment and edit them with Adobe Premier pro. Photography is
                my best skill.
              </p>
            </div>
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div>
              <BsLaptop size={40} />
              <h3>Logo design</h3>
              <p>
                I create high quality designs with my professional Photography
                equipment and edit them with Adobe Photoshop. Logo design is my
                another best skill.
              </p>
            </div>
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div>
              <BsEye size={40} />
              <h3>UI/UX</h3>
              <p>
                As UX/ UI is my passion I am creating user-friendly masterpieces
                layouts for websites and mobile applications and my clients
                absolutely love them
              </p>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
