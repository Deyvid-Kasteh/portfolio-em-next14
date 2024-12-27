"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Desenvolvimento Web",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptate.",
    href: "",
  },
  {
    num: "02",
    title: "BackEnd",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptate.",
    href: "",
  },
  {
    num: "03",
    title: "Desenvolvimento Mobile",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptate.",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptate.",
    href: "",
  },
  {
    num: "05",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptate.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                <div>
                  <div>{service.num}</div>
                  <Link href={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
