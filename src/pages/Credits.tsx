import Card from "../components/Card";
import cj from "../assets/images/cj.png";
import ig from "../assets/images/instagram.png";
import fb from "../assets/images/facebook.png";
import gm from "../assets/images/gmail.png";
import li from "../assets/images/linkedin.png";
import { motion } from "motion/react";
const Credits = () => {
  return (
    <>
      <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="pl-5 pr-5 md:pl-20 md:pr-20 pt-20 md:pt-10 md:pb-10 overflow-y-scroll w-full h-screen flex flex-col place-items-center gap-5 md:gap-20">
        <section className="w-full text-center flex flex-col gap-2">
          <section className="font-gochi text-[#1D7446] text-4xl/10 md:text-5xl text-shadow-lg text-shadow-black/30">
            The Unsent <br></br> BSIT Project
          </section>
          <p className="font-playfair text-xs text-black/60">
            Encode your unsaid thoughts and deploy them!
          </p>
        </section>
        <Card>
          <section className="w-full font-arima flex flex-col gap-2 text-justify place-items-center">
            <h1 className="text-xl font-bold text-black/70">Website Goal</h1>
            <p className="text-black/60">
              This website intends to serve as a way for BSIT students in Cavite
              State University to share their thoughts; not the whole CEIT, not
              anywhere else in the campus, just BSIT. This website serves as an
              isolated ground for BSIT students to make the community feel
              closer and exclusive than ever.
            </p>
            <section className="w-full grid grid-cols-3 grid-rows-2 gap-5">
              <section className="flex w-full justify-center items-center w-20 h-8 pl-2 pr-2 text-[12px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>Figma</p>
              </section>
              <section className="flex w-full justify-center items-center w-20 h-8 pl-2 pr-2 text-[12px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>HTML5</p>
              </section>
              <section className="flex w-full justify-center items-center w-20 h-8 pl-2 pr-2 text-[10px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>Tailwind CSS</p>
              </section>
              <section className="flex w-full justify-center items-center w-20 h-8 pl-2 pr-2 text-[10px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>JavaScript ES6+</p>
              </section>
              <section className="flex w-full justify-center items-center w-20 h-8 pl-2 pr-2 text-[12px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>React</p>
              </section>
              <section className="flex w-full justify-center items-center w-20 h-8 pl-2 pr-2 text-[12px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>Firebase</p>
              </section>
            </section>
          </section>
        </Card>
        <Card className="w-full">
          <section className="gap-2 font-arima flex flex-col justify-center items-center w-full">
            <img src={cj}></img>
            <section className="flex flex-col gap-1 text-center">
              <h3 className="font-bold text-xl text-black/70">Cj Danga</h3>
              <p className="text-xs text-black/50">Lead Developer</p>
            </section>
            <section className="grid grid-cols-2 grid-rows-2 gap-5 w-full place-items-center">
              <section className="w-full flex justify-center items-center w-20 h-8 pl-2 pr-2 text-[12px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>STEM Grad</p>
              </section>
              <section className="w-full flex justify-center items-center w-20 h-8 pl-2 pr-2 text-[12px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>BSIT Student</p>
              </section>
              <section className="w-full flex justify-center items-center w-20 h-8 pl-2 pr-2 text-[12px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>1st Year</p>
              </section>
              <section className="w-full flex justify-center items-center w-20 h-8 pl-2 pr-2 text-[12px] shadow-md shadow-black/30 rounded-full bg-[#9BF9A8] text-black/50 font-playfair font-bold text-center">
                <p>Web Dev</p>
              </section>
            </section>
          </section>
        </Card>
        <section className="w-full flex flex-row justify-between items-center">
            <motion.a whileHover={{scale: 1.5, rotate: 20}} href="https://www.facebook.com/cjdanga12342/" target="_blank" className="cursor-pointer">
                <img className="w-15 drop-shadow-lg drop-shadow-black/50" src={fb}></img>
            </motion.a>
            <motion.a whileHover={{scale: 1.5, rotate: 20}} href="https://www.instagram.com/cjdangx.qt/" target="_blank" className="cursor-pointer">
                <img className="w-9 drop-shadow-lg drop-shadow-black/50" src={ig}></img>
            </motion.a>
            <motion.a whileHover={{scale: 1.5, rotate: 20}} href="https://www.linkedin.com/in/cj-danga-7803583b3/" target="_blank" className="cursor-pointer">
                <img className="w-15 drop-shadow-lg drop-shadow-black/50" src={li}></img>
            </motion.a>
            <motion.a whileHover={{scale: 1.5, rotate: 20}} href="https://mail.google.com/mail/?view=cm&fs=1&to=cjdanga39@gmail.com&su=Hello&body=Hey!" target="_blank" className="cursor-pointer">
                <img className="w-15 drop-shadow-lg drop-shadow-black/50" src={gm}></img>
            </motion.a>
        </section>
      </motion.section>
    </>
  );
};

export default Credits;
