import React from "react";
import { motion } from "framer-motion";
import toDoListImage from "../assets/toDoList.png";
import carRegistrationImage from "../assets/carReg.png";
import mealsApp from "../assets/mealsApp.jpg";
import caloriesApp from "../assets/calories.jpg";
import "../App.scss";

const Projects = () => {
  const ProjectsData = [
    {
      id: 1,
      name: "TodoList App",
      img: toDoListImage,
      link: "https://github.com/nurmukhamedov/randomChoicePicker",
    },
    {
      id: 2,
      name: "Car Registration Website",
      img: carRegistrationImage,
      link: "https://github.com/nurmukhamedov/randomChoicePicker",
    },
    {
      id: 3,
      name: "Meals App",
      img: mealsApp,
      link: "https://github.com/nurmukhamedov/randomChoicePicker",
    },
    {
      id: 4,
      name: "Calorie Tracker App",
      img: caloriesApp,
      link: "https://github.com/nurmukhamedov/randomChoicePicker",
    },
  ];
  const handleCLick = url => {
    window.open(url);
  };
  return (
    <div className="projects">
      <div className="container">
        <div className="projects-heading">
          <h2>My Work...</h2>
          <div className="bottom-line"></div>
        </div>

        <div className="projects-grid">
          {ProjectsData.map(item => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={item.id}
              onClick={() => handleCLick(item.link)}
            >
              <img src={item.img} alt="#" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
