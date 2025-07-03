import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ActualP } from "./components/ActualP";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration:1500, 
      once:true,
    })

  })

  return (
    <main className="bg-black text-white overflow-hidden w-screen">
      {/* Gradient image*/}
      <img className="absolute top-0 right-0 opacity-60 -z -10" src="/gradient.png" alt="Gradient-img" />

      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_300px_40px_#e99b56] -rotate-[30deg] -z-10">
      </div>

      <Header/>
      <Hero/>
      <Projects/>
      <Experience/>
      <ActualP/>
      <Contact/>
    </main>
  )
}