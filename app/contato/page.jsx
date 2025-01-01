const Contato = () => {
  return (
    <div className="container mx-auto">
      <div className="transform transition-all duration-300 hover:translate-x-4 hover:scale-105">
        Movimento com Escala
      </div>
      {/* Direita */}
      <div className="transform transition-transform hover:translate-x-4">
        Direita
      </div>

      {/* Esquerda */}
      <div className="transform transition-transform hover:-translate-x-4">
        Esquerda
      </div>

      {/* Diagonal */}
      <div className="transform transition-transform hover:translate-x-4 hover:translate-y-4">
        Diagonal
      </div>
      <div className="transform transition-all duration-300 hover:translate-x-4 hover:opacity-75">
        Movimento com Fade
      </div>
      <div className="transform transition-transform duration-500 ease-steps-3 hover:translate-x-8">
        Movimento em Etapas
      </div>
      <div className="group hover:cursor-pointer">
        <div className="transform transition-transform group-hover:translate-x-4">
          Move quando hover no pai
        </div>
      </div>
      <div className="transform transition-transform hover:translate-x-2 md:hover:translate-x-4 lg:hover:translate-x-6">
        Movimento Responsivo
      </div>
      <div className="transform transition-transform duration-300 delay-150 hover:translate-x-4">
        Movimento com Delay
      </div>
      {/* Movimento Suave Lento */}
      <div className="transform transition-all duration-700 ease-in-out hover:translate-x-8 hover:text-blue-500">
        Movimento Lento
      </div>

      {/* Movimento Rápido com Bounce */}
      <div className="transform transition-all duration-300 ease-bounce hover:translate-x-6">
        Movimento com Bounce
      </div>
      {/* Movimento com Rotação e Escala */}
      <div className="transform transition-all duration-500 hover:translate-x-4 hover:rotate-12 hover:scale-110">
        Movimento Complexo
      </div>

      {/* Movimento em Zigue-Zague */}
      <div className="transform transition-all duration-500 hover:translate-x-4 hover:-translate-y-2">
        Movimento Diagonal
      </div>
      <div className="group flex gap-4">
        <div className="transform transition-all duration-300 group-hover:translate-x-2">
          Primeiro
        </div>
        <div className="transform transition-all duration-300 delay-100 group-hover:translate-x-4">
          Segundo
        </div>
        <div className="transform transition-all duration-300 delay-200 group-hover:translate-x-6">
          Terceiro
        </div>
      </div>
      <div
        className="transform transition-all duration-300
            hover:translate-x-4
            active:translate-x-8
            focus:translate-x-2"
      >
        Múltiplos Estados
      </div>
      <div
        className="transform transition-all duration-300
            w-32
            hover:w-48
            hover:translate-x-4
            overflow-hidden
            whitespace-nowrap"
      >
        Texto que expande
      </div>
      <div
        className="transform transition-all duration-500
            hover:translate-x-4
            hover:shadow-lg
            hover:shadow-blue-500/50
            p-4
            rounded-lg"
      >
        Movimento com Sombra
      </div>
      <div className="relative w-16 h-16">
        <div
          className="absolute w-full h-full
              transform transition-all duration-[2000ms]
              hover:rotate-[360deg]
              rounded-full
              border-2 border-blue-500"
        ></div>
      </div>

      <div
        className="transform transition-all duration-300
            border-2
            hover:translate-x-4
            hover:border-l-4
            hover:border-r-4
            hover:border-blue-500"
      >
        Borders Animados
      </div>
      <div
        className="transform transition-all duration-500
            hover:translate-x-2
            sm:hover:translate-x-4
            md:hover:translate-x-6
            lg:hover:translate-x-8
            hover:bg-gradient-to-r
            hover:from-blue-500
            hover:to-purple-500
            p-4
            rounded-lg"
      >
        Responsivo com Gradiente
      </div>
      {/* Pai */}
      <div className="group flex gap-4">
        {/* Rápido */}
        <div className="transform transition-all duration-150 group-hover:translate-x-4">
          Rápido
        </div>
        {/* Médio */}
        <div className="transform transition-all duration-300 group-hover:translate-x-4">
          Médio
        </div>
        {/* Lento */}
        <div className="transform transition-all duration-700 group-hover:translate-x-4">
          Lento
        </div>
      </div>

      {/* Transição completa */}
      <div
        className="transition-all duration-300 ease-in-out delay-150
            hover:scale-110 hover:translate-x-4 hover:bg-blue-500"
      >
        Efeito Complexo
      </div>

      {/* Transição com Cores */}
      <div
        className="transition-colors duration-500 ease-in
            hover:bg-red-500 hover:text-white"
      >
        Mudança de Cor
      </div>

      {/* Transição com Opacidade */}
      <div
        className="transition-opacity duration-700 ease-out
            hover:opacity-50"
      >
        Fade Effect
      </div>

      {/* Transição com Shadow */}
      <div
        className="transition-shadow duration-300 ease-in-out
            hover:shadow-xl"
      >
        Shadow Effect
      </div>
      <div className="group flex gap-2">
        <div
          className="transition-all duration-300 delay-0
              group-hover:translate-x-4"
        >
          Primeiro
        </div>
        <div
          className="transition-all duration-300 delay-150
              group-hover:translate-x-4"
        >
          Segundo
        </div>
        <div
          className="transition-all duration-300 delay-300
              group-hover:translate-x-4"
        >
          Terceiro
        </div>
      </div>

      <div className="grid grid-rows-3 gap-4 w-fit mx-auto">
        {/* Primeira linha */}
        <div className="grid grid-cols-3 gap-4 group">
          <div
            className="w-16 h-16 bg-gray-200 flex items-center justify-center
                    transition-transform duration-300
                    group-hover:hover:scale-110
                    group-hover:-translate-x-4 group-hover:-translate-y-4"
          >
            1
          </div>
          <div
            className="w-16 h-16 bg-gray-200 flex items-center justify-center
                    transition-transform duration-300
                    group-hover:hover:scale-110
                    group-hover:-translate-y-4"
          >
            2
          </div>
          <div
            className="w-16 h-16 bg-gray-200 flex items-center justify-center
                    transition-transform duration-300
                    group-hover:hover:scale-110
                    group-hover:translate-x-4 group-hover:-translate-y-4"
          >
            3
          </div>
        </div>

        {/* Segunda linha */}
        <div className="grid grid-cols-3 gap-4 group">
          <div
            className="w-16 h-16 bg-gray-200 flex items-center justify-center
                    transition-transform duration-300
                    group-hover:hover:scale-110
                    group-hover:-translate-x-4"
          >
            4
          </div>
          <div
            className="w-16 h-16 bg-gray-200 flex items-center justify-center
                    transition-transform duration-300
                    group-hover:hover:scale-110"
          >
            5
          </div>
          <div
            className="w-16 h-16 bg-gray-200 flex items-center justify-center
                    transition-transform duration-300
                    group-hover:hover:scale-110
                    group-hover:translate-x-4"
          >
            6
          </div>
        </div>

        {/* Terceira linha */}
        <div className="grid grid-cols-3 gap-4 group">
          <div
            className="w-16 h-16 bg-gray-200 flex items-center justify-center
                    transition-transform duration-300
                    group-hover:hover:scale-110
                    group-hover:-translate-x-4 group-hover:translate-y-4"
          >
            7
          </div>
          <div
            className="w-16 h-16 bg-gray-200 flex items-center justify-center
                    transition-transform duration-300
                    group-hover:hover:scale-110
                    group-hover:translate-y-4"
          >
            8
          </div>
          <div
            className="w-16 h-16 bg-gray-200 flex items-center justify-center
                    transition-transform duration-300
                    group-hover:hover:scale-110
                    group-hover:translate-x-4 group-hover:translate-y-4"
          >
            9
          </div>
        </div>
      </div>

      <div className="grid grid-rows-3 gap-4 w-fit mx-auto">
        {/* Primeira linha */}
        <div className="grid grid-cols-3 gap-4">
          <div className="peer/one w-16 h-16 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            1
          </div>
          <div className="peer/two w-16 h-16 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            2
          </div>
          <div className="peer/three w-16 h-16 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            3
          </div>
        </div>

        {/* Segunda linha */}
        <div className="grid grid-cols-3 gap-4">
          <div className="peer/four w-16 h-16 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            4
          </div>
          <div
            className="peer/five w-16 h-16 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110
                    peer-hover/one:translate-x-4 peer-hover/one:translate-y-4
                    peer-hover/two:translate-y-4
                    peer-hover/three:translate-x-4 peer-hover/three:translate-y-4
                    peer-hover/four:translate-x-4
                    peer-hover/six:translate-x-4
                    peer-hover/seven:translate-x-4 peer-hover/seven:-translate-y-4
                    peer-hover/eight:-translate-y-4
                    peer-hover/nine:translate-x-4 peer-hover/nine:-translate-y-4"
          >
            5
          </div>
          <div className="peer/six w-16 h-16 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            6
          </div>
        </div>

        {/* Terceira linha */}
        <div className="grid grid-cols-3 gap-4">
          <div className="peer/seven w-16 h-16 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            7
          </div>
          <div className="peer/eight w-16 h-16 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            8
          </div>
          <div className="peer/nine w-16 h-16 bg-gray-200 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            9
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
