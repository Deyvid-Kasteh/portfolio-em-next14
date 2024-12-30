"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "Sobre mim",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae quaerat harum itaque a voluptatem temporibus corporis quo consectetur, ad id veritatis fuga enim officia sint sit quisquam vitae nisi.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Deyvid Kasteh",
    },
    {
      fieldName: "Experiência",
      fieldValue: "+3 anos de experiência em projetos",
    },
    {
      fieldName: "Whatsapp",
      fieldValue: "+55 21 98531-7520",
    },
    {
      fieldName: "E-mail",
      fieldValue: "kasteh21@gmail.com",
    },
    {
      fieldName: "Linguagens",
      fieldValue: "Português, Inglês, Espanhol",
    },
  ],
};

const experience = {
  title: "Experiência",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      company: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
    {
      company: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
    {
      company: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
    {
      company: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
    {
      company: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
    {
      company: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>
          <div className="min-h-[80vh] w-full overflow-hidden">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-semibold">{experience.title}</h3>
                <p className="text-lg leading-snug max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg-items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="text-lg leading-snug max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col items-center gap-2 group w-full h-[150px] bg-[#232329] py-6 px-10 rounded-xl justify-center gap-1]"
                        >
                          <div className="text-6xl group-hover:text-accent transition-all duration-500">
                            {skill.icon}
                          </div>

                          <p>{skill.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div>
                <h3 className="text-4xl font-semibold">{about.title}</h3>
                <p>{about.description}</p>
                <ul>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="
                        text-white/80
                        bg-[#232329]
                        m-4
                        p-4
                        after:content-['']
                        after:block after:h-1 after:bg-[#FFD700] after:w-0 hover:after:w-full after:transition-all after:duration-1000"
                      >
                        <spam className="text-lg font-semibold">{`${item.fieldName}: ${item.fieldValue}`}</spam>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
