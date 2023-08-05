import React from "react";
import { motion } from "framer-motion";
import "./circle.css";
type Props = {};

const Circle = (props: Props) => {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </>
  );
};

export default Circle;
