import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";


const calculateRandomBlockDelay = (rowIndex: number, totalRows: number) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const Transition = ({ children }:{ children: React.ReactNode }) => {

  const blocksContainer = 'fixed top-0 left-0 w-[100vw] h-[100vh] flex flex-col pointer-events-none z-[200]';
  const row = 'flex flex-1 w-full';
  const block = 'relative flex-1 bg-[#414141] -m-[0.25px]';

  const router = usePathname();


  return (
    <AnimatePresence mode="wait">
      <div key={router} className={`blocks-container transition-in ${blocksContainer}`}>
        {Array.from({ length: 10}).map((_, rowIndex) => (
          <div className={`${row}`} key={rowIndex}>
            {Array.from({length: 11}).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className={`${block} origin-top`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10)
                }}
              >

              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <div key={router} className={`blocks-container transition-out ${blocksContainer}`}>
        {Array.from({ length: 10}).map((_, rowIndex) => (
          <div className={`${row}`} key={rowIndex}>
            {Array.from({length: 11}).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className={`${block} origin-bottom`}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10)
                }}
              >

              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {children}
    </AnimatePresence>
  )
};
 
export default Transition;