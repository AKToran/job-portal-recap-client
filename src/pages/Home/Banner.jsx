import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team1.jpg"
import team2 from "../../assets/team2.jpg"


const Banner = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <motion.h1
          className="text-xl"
          animate={{
            scale: 2,
            transition: { duration: 2 },
            transformOrigin: "left",
          }}
        >
          Exclusive jobs for you.
        </motion.h1>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim perspiciatis nulla est optio error ducimus minima, nesciunt sunt dignissimos?</p>
      </div>

      <div>
        <motion.img initial={{}} className="w-80 rounded-xl" src={team1} alt="" />
        <img className="w-80 rounded-xl" src={team2} alt="" />
      </div>
    </div>
  );
};

export default Banner;
