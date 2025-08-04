import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";

const Banner = () => {
  return (
    <div className="flex p-8 items-center ">
      <div className="flex-1 p-8">
        <motion.h1
          className="text-xl font-semibold"
          animate={{
            scale: 2,
            transition: { duration: 2 },
            transformOrigin: "left",
          }}
        >
          Exclusive{" "}
          <motion.span
            className="font-bold"
            animate={{
              color: ["#ff7733", "#ff5777", "#fffff", "#ff5123", "#ff2233"],
              transition: { duration: 4, repeat: Infinity },
            }}
          >
            jobs
          </motion.span>{" "}
          for you.
        </motion.h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          enim perspiciatis nulla est optio error ducimus minima, nesciunt sunt
          dignissimos?
        </p>
      </div>

      <div className="flex-1">
        
        <motion.img
          animate={{
            y: [0, 80, 0],
            transition: { duration: 6, delay:2, repeat: Infinity },
          }}
          className="w-80 rounded-t-3xl rounded-r-3xl border-s-4 border-b-4 border-amber-400"
          src={team2}
          alt=""
        />
        <motion.img
          animate={{
            x: [50, 100, 50],
            transition: { duration: 8, delay:3, repeat: Infinity },
          }}
          className="w-80 rounded-t-3xl rounded-r-3xl border-s-4 border-b-4 border-amber-400"
          src={team1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
