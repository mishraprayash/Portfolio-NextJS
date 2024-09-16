import { animate, delay, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
// calcuating a reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* rendering 6 motion div as each representing a step of the stairs
  Each div will have the same animation defined by the stairsAnimation object.
  The delay for each div is calculated sinamically based on it's reversed index,
  creating a staggered effect with decreasing delay for each subsequent step.
  
  */}
      {[...Array(6)].map((_, index) => {
        return <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.25,
            ease:"easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full relative bg-white"
        />;
      })}
    </>
  );
};

export default Stairs;
