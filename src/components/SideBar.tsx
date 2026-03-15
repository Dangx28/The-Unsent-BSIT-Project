import { motion } from "motion/react";
import { Link } from "react-router-dom";
const SideBar = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <motion.section
        initial={{ x: -300 }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: ["easeOut"],
        }}
        exit={{ x: -300 }}
        className="pl-2 pr-2 select-none gap-8 font-playfair font-bold flex flex-col place-items-center bg-[#57DE80] fixed h-full w-1/2 z-1 pt-20 border-r-2"
      >
        <Link
          to="/home"
          className="h-10 border-2 border-transparent hover:border-green-600 place-items-center rounded-full hover:bg-green-400 cursor-pointer flex flex-row w-full pl-5 pr-5 gap-2"
        >
          <section className="flex flex-row gap-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>

            <p>Home</p>
          </section>
        </Link>
        <Link
          to="/create"
          className="h-10 border-2 border-transparent hover:border-green-600 place-items-center rounded-full hover:bg-green-400 cursor-pointer flex h-10 border-2 border-transparent hover:border-green-600 place-items-center rounded-full hover:bg-green-400 cursor-pointer flex-row w-full pl-5 pr-5 gap-2"
        >
          <section className="flex flex-row gap-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="black"
                stroke-linejoin="round"
                stroke-width="2"
                d="m20.9532 11.7634-2.0523-2.05225-2.0523 2.05225 2.0523 2.0523 2.0523-2.0523Zm-1.3681-2.73651-4.1046-4.10457L12.06 8.3428l4.1046 4.1046 3.4205-3.42051Zm-4.1047 2.73651-2.7363-2.73638-8.20919 8.20918 2.73639 2.7364 8.2091-8.2092Z"
              />
              <path
                stroke="black"
                stroke-linejoin="round"
                stroke-width="2"
                d="m12.9306 3.74083 1.8658 1.86571-2.0523 2.05229-1.5548-1.55476c-.995-.99505-3.23389-.49753-3.91799.18657l2.73639-2.73639c.6841-.68409 1.9901-.74628 2.9229.18658Z"
              />
            </svg>

            <p>Create</p>
          </section>
        </Link>
        <Link
          to="/browse"
          className="h-10 border-2 border-transparent hover:border-green-600 place-items-center rounded-full hover:bg-green-400 cursor-pointer flex h-10 border-2 border-transparent hover:border-green-600 place-items-center rounded-full hover:bg-green-400 cursor-pointer flex-row w-full pl-5 pr-5 gap-2"
        >
          <section className="flex flex-row gap-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>

            <p>Browse</p>
          </section>
        </Link>
        <Link
          to="/"
          className="h-10 border-2 border-transparent hover:border-green-600 place-items-center rounded-full hover:bg-green-400 cursor-pointer flex h-10 border-2 border-transparent hover:border-green-600 place-items-center rounded-full hover:bg-green-400 cursor-pointer flex-row w-full pl-5 pr-5 gap-2"
        >
          <section className="flex flex-row gap-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <p>About</p>
          </section>
        </Link>
        <Link
          to="/credits"
          className="h-10 border-2 border-transparent hover:border-green-600 place-items-center rounded-full hover:bg-green-400 cursor-pointer flex h-10 border-2 border-transparent hover:border-green-500 place-items-center rounded-full hover:bg-green-400 cursor-pointer flex-row w-full pl-5 pr-5 gap-2"
        >
          <section className="flex flex-row gap-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
              />
            </svg>

            <p>Credits</p>
          </section>
        </Link>
      </motion.section>
    </section>
  );
};

export default SideBar;
