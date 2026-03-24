import { motion } from "motion/react";
import MessageCard from "../components/MessageCard";
import { Link } from "react-router-dom";
import wowowee from "../assets/images/wowowee.jpg";
import multo from "../assets/images/multo.jpeg";
import rickroll from "../assets/images/rickroll.jpeg";

const MotionMC = motion(MessageCard);

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-10 md:pt-0 overflow-y-scroll w-full h-screen font-playfair flex flex-col place-items-center"
    >
      <section className="w-full pl-5 pr-5 pt-10 pb-10 md:pb-30 flex flex-col gap-15 md:gap-30">
        <header className="text-center flex flex-col gap-2">
          <h1 className="text-5xl font-bold">
            WANT A SAFE SPACE TO <br></br> EXPRESS YOURSELF?
          </h1>
          <p className="text-sm text-black/60">You're at the right place!</p>
        </header>
        <section className="overflow-hidden grid grid-rows-3 gap-y-5">
          <motion.section
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "spring"}}
            className="text-xs md:text-lg justify-self-end justify-center items-center flex col-start-2 col-end-3 rounded-full bg-[#47DFF7] w-fit pt-2 pb-2 pl-4 pr-4"
          >
            <p>yo, pwede ba mag rant?</p>
          </motion.section>
          <motion.section
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring"}}
            className="text-xs md:text-lg justify-center items-center flex row-start-2 row-end-3 rounded-full bg-white w-fit pt-2 pb-2 pl-4 pr-4"
          >
            <p>ayoko nga</p>
          </motion.section>
          <motion.section
            initial={{ x: 350 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1, type: "spring"}}
            className="text-xs md:text-lg justify-self-end justify-center items-center flex row-start-3 row-end-4 col-start-2 col-end-3 rounded-full bg-[#47DFF7] w-fit pt-2 pb-2 pl-4 pr-4"
          >
            <p>ge, sa the unsent bsit project nalang.</p>
          </motion.section>
        </section>
      </section>
      <section className="w-full pl-5 pr-5 pt-20 pb-20 md:pb-30 flex flex-col gap-10 md:gap-20 bg-[#B4A9FC]">
        <section className="text-center flex flex-col gap-2">
          <h1 className="text-5xl font-bold">
            CREATE ANONYMOUS MESSAGES FROM THE GET GO!
          </h1>
          <p className="text-sm text-black/60">
            It's quick, easy, and customizable!
          </p>
        </section>
        <section className="flex flex-col gap-10 md:gap-20">
          <MotionMC
            initial={{ scale: 0, rotate: 20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            color="gold"
            size="header"
            section="BSIT 1-4"
            receiver="Cj"
            date="2/14, 6:07 PM"
            message="hello po! ang sarap mo raw po- ang sarap bentukan"
            image={wowowee}
            song="Wowowee"
            author="Willie Revillame"
            link="https://open.spotify.com/track/3LpFbCk9iwjIyXIEMr2CNS"
          ></MotionMC>
          <MotionMC
            initial={{ scale: 0, rotate: 20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            color="green"
            size="header"
            section="BSIT 1-9"
            receiver="Jornales"
            date="3/14, 4:50 AM"
            message="ra valo!"
            image={rickroll}
            song="Never Gonna Give You Up"
            author="Rick Astley"
            link="https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8"
          ></MotionMC>
          <MotionMC
            initial={{ scale: 0, rotate: 20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            color="blue"
            size="header"
            section="BSIT 1-4"
            receiver="Carl"
            date="3/10, 11:11 PM"
            message="miss na kita."
            image={multo}
            song="Multo"
            author="Cup of Joe"
            link="https://open.spotify.com/track/5tlb0AxuzsMWL2GtEppXGX"
          ></MotionMC>
        </section>
      </section>
      <section className="pl-5 pr-5 pt-20 pb-20 md:pt-40 md:pb-40 flex flex-col gap-20 md:gap-40 bg-[#FFB2C6]">
        <section className="text-center flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold">
            IT'S A SMALL COMMUNITY!
          </h1>
          <p className="text-xs md:text-sm text-black/60">
            Only exclusively within the BSIT program of Cavite State University,
            making the community feel closer than ever.
          </p>
        </section>
        <section className="text-center flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold">
            SO WHAT ARE YOU WAITING FOR?
          </h1>
          <p className="text-xs md:text-sm text-black/60">
            You can start creating your anonymous message by clicking “Create”
            at the navigation bar. Or if you’re not feeling expressive yet, you
            can browse what others have sent on the “Browse” button.
          </p>
        </section>
      </section>
      <footer className="flex flex-row justify-between text-white p-5 md:pl-10 md:pr-10 bg-black w-full">
        <section className="text-center flex flex-col justify-between pt-2 pb-2">
          <section className="font-gochi text-[#1D7446] text-3xl/7 text-shadow-md text-shadow-white/10">
            The Unsent <br></br> BSIT Project
          </section>
          <p className="text-[10px]">
            © TheUnsentBSITProject. All Rights Reserved.
          </p>
        </section>
        <section className="justify-items-center gap-y-5 md:gap-x-20 grid grid-cols-2">
          <Link
            className="w-25 text-center border-t-1 border-transparent hover:border-white"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="w-25 text-center border-t-1 border-transparent hover:border-white"
            to="/create"
          >
            Create
          </Link>
          <Link
            className="w-25 text-center border-t-1 border-transparent hover:border-white"
            to="/browse"
          >
            Browse
          </Link>
          <Link
            className="w-25 text-center border-t-1 border-transparent hover:border-white"
            to="/"
          >
            About
          </Link>
          <Link
            className="w-25 text-center border-t-1 border-transparent hover:border-white"
            to="/credits"
          >
            Credits
          </Link>
        </section>
      </footer>
    </motion.section>
  );
};

export default About;
