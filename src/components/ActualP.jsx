"use client";

import { Carousel } from "../features/Carousel";
export function ActualP() {
  const slideData = [
    {
      title: "Global Accelerator Program",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3534&auto=format&fit=crop",
      description: "I conducted in-depth data analysis using advanced SQL to extract, manipulate, and optimize large datasets, resulting in a 25% reduction in processing time. To support data-driven decision-making, I developed clear and impactful visualizations in Tableau, enhancing documentation usability by 30%. As part of a real-world case study, I analyzed user interaction data surrounding the Grammys' structural split, applying rigorous preprocessing and visualization techniques to conclude that the split had a positive impact on the company.",
    },
    {
      title: "Pantry Management",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1645567454567-901dc409551b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHJ5fGVufDB8fDB8fHww",
      description: "I integrated OpenAI with Google Vertex AI to develop an image recognition system that achieves 90% accuracy in identifying common pantry items. By automating the item logging process, I reduced manual data entry by 40%, significantly improving operational efficiency. Additionally, I implemented inventory tracking and expiration date management features that send automated reminders, resulting in a 10% reduction in item wastage and enhanced stock management.",
    },
    {
      title: "Airlines Assistant",
      button: "Learn More",
      src: "https://plus.unsplash.com/premium_photo-1725985758331-e1b46919d8cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUklMjBBc3Npc3RhbnR8ZW58MHx8MHx8fDA%3D",
      description: "Developed an AI assistant leveraging OpenAI APIs to provide audio-to-text and speech capabilities for flight-related queries, including flight paths, pricing information, and seat reservation. The user interface was built using Gradio, with the application developed and demonstrated in Jupyter Notebook, effectively integrating OpenAI tools to deliver an interactive and functional experience.",
    },
    {
      title: "Music Recommender",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TXVzaWN8ZW58MHx8MHx8fDA%3D",
      description: "Developed a simple recommender system that suggests songs based on a user's listening history. The system employs collaborative filtering using a K-Nearest Neighbors (KNN) algorithm to cluster similar songs. Similarity is determined through a straightforward method that compares song titles and artists to identify tracks aligned with user preferences.",
    },
  ];
  return (
    
    <section id="projects" className="flex flex-col mt-10 items-center justify-center w-full">
    <div data-aos="fade-up"
     data-aos-duration="1000"
     className="w-full max-w-4xl px-6 text-center relative">
          <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider my-8 text-yellow-600 font-bold z-10 animate-pulse">
              My Projects
          </h1>
        </div>
    <div className="relative overflow-hidden w-full h-full py-20">
        {/* <h2 className="flex items-center justify-between">Projects</h2> */}
      <Carousel slides={slideData} />
    </div>
    </section>
  );
}
