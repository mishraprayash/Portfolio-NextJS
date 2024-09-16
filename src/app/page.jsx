import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Custom Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-[16px] md:text-[24px]">Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <p className="text-accent textanimation max-w-fit">Prayash Mishra</p>
            </h1>
            <p className="text-md max-w-[400px] lg:text-xl lg:max-w-[600px]  mb-9 text-white/80 pt-5 leading-tight">I excel at crafting elegant digital experiences and I am proficient in various
              programming language and technologies
            </p>
            {/* Download CV */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-500">
                <span>Download CV</span>
                <FiDownload className="bounce"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
