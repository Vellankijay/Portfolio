import React from 'react'
import { Timeline } from '../features/timeline'
const Experience = () => {
  const data = [
    {
      title: "Mobile App Developer",
      job: "Populus",
      date: "2023-2023",
      contents: [
        "Technologies Used: ReactJS, Expo, Python, TypeScript, MongoDB",
        "Successfully redesigned database, resulting in a 30% improvement in app performance and scalability.",
        "Collaborated with front-end engineers in order to meet and improve necessary design requirements.",
        "Introduced contact management, contributing to a 15% boost in user connectivity and 30% boost in new users.",
      ],
    },
    {
      title: "Lead Full Stack Developer",
      job: "Vantashala",
      date: "2023-2024",
      contents: [
        "Technologies Used: JavaScript, React, CSS, Nuxt 3, SpringBoot, Quasar, Java, MySQL",
        "Leading a sumteam of 4 engineers that help in migration from Vue to NuxtJS for SSR and SEO optimization.",
        "Crafting and refining website features, ensuring an increase in functionality and user engagement by 10%.",
        "Testing and modifying the existing API dependencies, resulting in an increased efficiency by 20%.",
        "Conducting extensive unit tests for promised output while code reviewing and optimizing subparts of the code.",
      ],
    },
    {
      title: "Software Engineer",
      job: "Research Assistant (UT Austin)",
      date: "2024-2025",
      contents: [
        "Technologies Used: Python, JavaScript, Docker, PostgreSQL, TypeScript, CSS, Flask, React, OpenAI API ",
        "Centralized and optimized API endpoints, resulting in a 30% boost in performance and a significant reduction in server response times",
        "Restructured the existing database architecture to support new features, resulting in an improved scalability and efficiency.",
        "Utilized OpenAI APIs to deliver detailed and precise feedback on student submissions, enhancing review quality.",
        "Collaborated with a team of 3 engineers to conduct rigorous unit testing on upcoming features, ensuring 99% accuracy in feedback provided.",
      ],
    },
  ];
  return (
    <div id="experience">
      <Timeline data={data}/>
    </div>
  )
}

export default Experience
