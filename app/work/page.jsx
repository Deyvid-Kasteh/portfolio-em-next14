"use client";
import { useState } from "react";

const Work = () => {
  const [hoveredSquare, setHoveredSquare] = useState(null);



  // const images = [
  //   "https://avatars.githubusercontent.com/u/99744584?s=400&u=27f93528eef366bec2da700c466f770c167fd8f7&v=4",
  //   "https://avatars.githubusercontent.com/u/99744584?s=400&u=27f93528eef366bec2da700c466f770c167fd8f7&v=4",
  //   "https://avatars.githubusercontent.com/u/99744584?s=400&u=27f93528eef366bec2da700c466f770c167fd8f7&v=4",
  //   "https://avatars.githubusercontent.com/u/99744584?s=400&u=27f93528eef366bec2da700c466f770c167fd8f7&v=4",
  //   "https://avatars.githubusercontent.com/u/99744584?s=400&u=27f93528eef366bec2da700c466f770c167fd8f7&v=4",
  //   "https://avatars.githubusercontent.com/u/99744584?s=400&u=27f93528eef366bec2da700c466f770c167fd8f7&v=4",
  //   "https://avatars.githubusercontent.com/u/99744584?s=400&u=27f93528eef366bec2da700c466f770c167fd8f7&v=4",
  //   "https://avatars.githubusercontent.com/u/99744584?s=400&u=27f93528eef366bec2da700c466f770c167fd8f7&v=4",
  //   "https://avatars.githubusercontent.com/u/99744584?s=400&u=27f93528eef366bec2da700c466f770c167fd8f7&v=4"
  // ];


   const images = [
     "https://via.placeholder.com/150/FF0000/FFFFFF?text=1", // Imagem 1
     "https://via.placeholder.com/150/00FF00/FFFFFF?text=2", // Imagem 2
     "https://via.placeholder.com/150/0000FF/FFFFFF?text=3", // Imagem 3
     "https://via.placeholder.com/150/FFFF00/FFFFFF?text=4", // Imagem 4
     "https://via.placeholder.com/150/FF00FF/FFFFFF?text=5", // Imagem 5
     "https://via.placeholder.com/150/00FFFF/FFFFFF?text=6", // Imagem 6
     "https://via.placeholder.com/150/FF8800/FFFFFF?text=7", // Imagem 7
     "https://via.placeholder.com/150/888888/FFFFFF?text=8", // Imagem 8
     "https://via.placeholder.com/150/FFFFFF/000000?text=9", // Imagem 9
   ];



  // Função para determinar a transformação de cada quadrado
  const getTransform = (currentSquare) => {
    if (hoveredSquare === null) return "";

    // Mapa de transformações baseado no quadrado com hover
    const transformMap = {
      1: {
        2: "translate-x-4",
        3: "translate-x-4",
        4: "translate-y-4",
        5: "translate-x-4 translate-y-4",
        6: "translate-x-4 translate-y-4",
        7: "translate-y-4",
        8: "translate-x-4 translate-y-4",
        9: "translate-x-4 translate-y-4",
      },
      2: {
        1: "-translate-x-4",
        3: "translate-x-4",
        4: "-translate-x-4 translate-y-4",
        5: "translate-y-4",
        6: "translate-x-4 translate-y-4",
        7: "-translate-x-4 translate-y-4",
        8: "translate-y-4",
        9: "translate-x-4 translate-y-4",
      },
      3: {
        1: "-translate-x-4",
        2: "-translate-x-4",
        4: "-translate-x-4 translate-y-4",
        5: "-translate-x-4 translate-y-4",
        6: "translate-y-4",
        7: "-translate-x-4 translate-y-4",
        8: "-translate-x-4 translate-y-4",
        9: "translate-y-4",
      },
      4: {
        1: "-translate-y-4",
        2: "translate-x-4 -translate-y-4",
        3: "translate-x-4 -translate-y-4",
        5: "translate-x-4",
        6: "translate-x-4",
        7: "translate-y-4",
        8: "translate-x-4 translate-y-4",
        9: "translate-x-4 translate-y-4",
      },
      5: {
        1: "-translate-x-4 -translate-y-4",
        2: "-translate-y-4",
        3: "translate-x-4 -translate-y-4",
        4: "-translate-x-4",
        6: "translate-x-4",
        7: "-translate-x-4 translate-y-4",
        8: "translate-y-4",
        9: "translate-x-4 translate-y-4",
      },
      6: {
        1: "-translate-x-4 -translate-y-4",
        2: "-translate-x-4 -translate-y-4",
        3: "-translate-y-4",
        4: "-translate-x-4",
        5: "-translate-x-4",
        7: "-translate-x-4 translate-y-4",
        8: "-translate-x-4 translate-y-4",
        9: "translate-y-4",
      },
      7: {
        1: "-translate-y-4",
        2: "translate-x-4 -translate-y-4",
        3: "translate-x-4 -translate-y-4",
        4: "-translate-y-4",
        5: "translate-x-4 -translate-y-4",
        6: "translate-x-4 -translate-y-4",
        8: "translate-x-4",
        9: "translate-x-4",
      },
      8: {
        1: "-translate-x-4 -translate-y-4",
        2: "-translate-y-4",
        3: "translate-x-4 -translate-y-4",
        4: "-translate-x-4 -translate-y-4",
        5: "-translate-y-4",
        6: "translate-x-4 -translate-y-4",
        7: "-translate-x-4",
        9: "translate-x-4",
      },
      9: {
        1: "-translate-x-4 -translate-y-4",
        2: "-translate-x-4 -translate-y-4",
        3: "-translate-y-4",
        4: "-translate-x-4 -translate-y-4",
        5: "-translate-x-4 -translate-y-4",
        6: "-translate-y-4",
        7: "-translate-x-4",
        8: "-translate-x-4",
      },
    };

    // Se este é o quadrado com hover, aplica scale
    if (currentSquare === hoveredSquare) {
      return "scale-[1.3]";
    }

    // Retorna a transformação correspondente ou string vazia se não houver
    return transformMap[hoveredSquare]?.[currentSquare] || "";
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 w-fit mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <div
            key={number}
            className={`
              w-16 h-16
              bg-gray-200
              flex items-center justify-center
              transition-transform duration-300
              overflow-hidden
              ${getTransform(number)}
            `}
            onMouseEnter={() => setHoveredSquare(number)}
            onMouseLeave={() => setHoveredSquare(null)}
          >
            {/* {number} */}
            <img
              src={images[number - 1]}
              alt={`Image ${number}`}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
