

import 'boxicons/css/boxicons.min.css';
import {motion, AnimatePresence} from 'framer-motion'
import {useState} from "react"

const Header = () => {

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu')

        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        }else{
            mobileMenu.classList.add('hidden');
        }
    }
 
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]">
            JV
        </h1>

        {/* <nav data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"className="md:flex hidden space-x-8 z-50">
        {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
                        <motion.a
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stuffness: 100,
                                damping: 20,
                                delay: 0.7 + index * 0.2,
                            }}
                            className="relative text-gray-600 dark: text-gray-200 hover:orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300 group"
                            href="#">
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300">
                            </span>

                        </motion.a>
                    ))}
        </nav> */}
        <nav className='hidden md:flex items-center gap-12'>
            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">
                Home
            </a>
            <a 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#aboutMe">
                About
            </a>
            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#experience">
                Experience
            </a>
            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#projects">
                Projects
            </a>
        </nav>

        <button 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className='hidden md:block bg-[#a7a7] text-black py-3 px-8 rounded-full transition-all duration-500 hover:bg-white cursor-pointer z-50'
        onClick={() => {
            const section = document.getElementById("contactMe");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            Contact Me
        </button>


        <button onClick = {toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
            <i class='bx bx-menu-alt-right' ></i>
        </button>

        <motion.div  id='mobileMenu' className=' hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
            <nav className='flex flex-col gap-6 items-center'>
                <a className = "relative text-gray-600 dark: text-gray-200 hover:orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300 group z-50" href="#">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a onClick={toggleMobileMenu}
                className = "relative text-gray-600 dark: text-gray-200 hover:orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300 group z-50" href="#aboutMe">
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                onClick={toggleMobileMenu}
                className = "relative text-gray-600 dark: text-gray-200 hover:orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300 group z-50" href="#experience">
                    Experience
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                onClick={toggleMobileMenu}
                className = "relative text-gray-600 dark: text-gray-200 hover:orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300 group z-50" href="#projects">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <button className="md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium
                    transition-all duration-500 hover:bg-white cursor-pointer z-50"
                    onClick={() => {
                        const section = document.getElementById("contactMe");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                        toggleMobileMenu();
                      }}>
                    Contact Me
                </button>
            </nav>
        </motion.div>



    </header>
  )
}

export default Header
