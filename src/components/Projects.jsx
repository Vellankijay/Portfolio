import React from 'react'
import { useState } from 'react';
import { Frameworks } from '../features/Frameworks';
const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'Project Alpha is a powerful React-based dashboard for real-time analytics.',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'Project Beta helps users track their fitness goals using personalized AI suggestions.',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'Project Gamma integrates blockchain for secure file storage and access control.',
  },
];

const Projects = () => {
    const [actId, setActId] = useState(null);
    const toggleProj = (id) => {
      setActId((prev) => (prev == id ? null : id));
    };
  
    return (
      <section id="aboutMe" className="flex flex-col mt-10 items-center justify-center w-full">
        {/* Title + Intro */}
        <div className="w-full max-w-4xl px-6 text-center relative">
          <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider my-8 text-yellow-600 font-bold z-10 animate-pulse">
              About Me
          </h1>
        </div>
  
        {/* Grid Section */}
        <div className="w-full max-w-7xl px-4 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[18rem] gap-4 mt-6">
            <div className="flex items-end bg-neutral-900 grid-1">
            <img
                src="assets/coding-pov.png"
                className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                />
              <div className="z-10 p-4">
              <p className="headtext">Hey, I am Jay Vellanki</p>
                <p className="subtext mb-6">
                A versatile software engineer with a strong foundation in full-stack development, machine learning, and the software cycle, with hands-on 
                experience building scalable web and AI-driven applications across startups and research.
                </p>
                <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-neutral-600" />
              </div>
            </div>
            <div className="flex items-end bg-[#BF5700] grid-2">
            <img
              src="/assets/tower.webp"
              alt="Project Preview"
              className="w-full h-full object-cover object-top"
            />
            </div>
            <div className="flex items-end bg-neutral-900 grid-3">
            <div data-aos="fade-up"
     data-aos-duration="3000"
     className="z-10 p-4">
              {/* <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-neutral-600" /> */}
                <p className="subtext mb-6">
                At the University of Texas at Austin, I am pursuing a double major in Computer Science and Actuarial Science, combining a strong 
                technical foundation with analytical and problem-solving skills. Beyond academics, I have been an active member of the campus community through my 
                involvement in the Association for Computing Machinery (ACM) and the Robotics Club, where I collaborated with peers on hands-on projects and technical 
                workshops that deepened my interest in engineering and innovation. I have also dedicated time to volunteering at youth coding camps and STEM outreach events, 
                mentoring younger students and encouraging early engagement in technology. 
                </p>
                <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-neutral-600" />
              </div>
            </div>
            {/* <div className="flex items-end bg-red-300 grid-4"></div> */}
            <div className="flex items-end bg-neutral-900 grid-5">
            <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default Projects
