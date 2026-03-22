import { useEffect, useState } from "react";
import menu from "../assets/images/menu.png";
import SideBar from "../components/SideBar.tsx";
import { AnimatePresence, motion } from "motion/react";
import { Outlet } from "react-router-dom";
import SideBarMd from "../components/SideBarMd.tsx";

const MainLayout = () => {
  const [showSideBar, hideSideBar] = useState(false);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(e.target as Node)) {
        hideSideBar(false);
      };
    }

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {showSideBar ? <SideBar hideSidebar={() => {hideSideBar(false)}} className="md:hidden "></SideBar> : null}
      </AnimatePresence>
      <section className="bg-[#A8F2B5] mx-auto flex flex-col md:flex-row">
        <nav className="md:hidden fixed z-50 bg-[#57DE80] mx-auto w-full pl-2 pr-2 pt-1 pb-1 flex justify-between border-b-2">
          <section className="font-gochi text-[#1D7446] text-base/5 text-shadow-md text-shadow-black/25">
            The Unsent <br></br> BSIT Project
          </section>
          <section className="flex place-items-center">
            <button
              className="cursor-pointer"
              onClick={() => {
                hideSideBar(!showSideBar);
              }}
            >
              {showSideBar ? (
                <motion.svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                >
                  <path
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    opacity="0.5"
                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                  />
                </motion.svg>
              ) : (
                <motion.img animate={{ rotate: 180 }} src={menu}></motion.img>
              )}
            </button>
          </section>
        </nav>
        <div className="md:hidden"></div>
        <SideBarMd className="hidden md:flex"></SideBarMd>
        <section className="flex flex-1 justify-center items-center w-full">
          <Outlet />
        </section>
      </section>
    </>
  );
};

export default MainLayout;
