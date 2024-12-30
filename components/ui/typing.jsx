"use client"

import { motion } from "framer-motion";
import "./typing.css"; // Para os estilos personalizados do loader

const Typing = () => {
  return (
    <div className="flex justify-center items-center">
      <svg height="40" width="40" className="loader">
        <circle className="dot fill-yellow-400" cx="10" cy="10" r="3" />
        <circle className="dot fill-yellow-400" cx="10" cy="20" r="3" />
        <circle className="dot fill-yellow-400" cx="10" cy="30" r="3" />

        <circle className="dot2 fill-yellow-400" cx="20" cy="15" r="3" />
        <circle className="dot2 fill-yellow-400" cx="20" cy="25" r="3" />

        <circle className="dot3 fill-yellow-400" cx="30" cy="20" r="3" />
      </svg>
    </div>
  );
};

export default Typing;