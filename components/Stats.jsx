"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Anos de experiência" },
  { num: 5, text: "Projetos concluídos" },
  { num: 8, text: "Tecnologias dominadas" },
  { num: 500, text: "Commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 py-12">
      <div className="container mx-auto justify-center items-center">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-autp xl:max-w-none justify-between items-center">
          {stats.map((Item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={Item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${Item.text.length < 40 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                  {Item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
