import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:tp-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1>
              Hello I'm <br />
              <span>Deyvid Kasteh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quis ut sit similique, molestiae deserunt sint architecto natus
              perferendis quidem obcaecati, soluta porro reprehenderit! Magnam
              inventore saepe qui quaerat optio?
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="secondary">
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="text-2xl w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-12 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
