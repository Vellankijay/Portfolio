"use client";;
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick,
  activePlaqueIndex,
  setActivePlaqueIndex
}) => {

  const handleExploreClick = (e) => {
    e.stopPropagation(); // Don't bubble up to slide click
    setActivePlaqueIndex(activePlaqueIndex === index ? null : index);
  };
  
  const isActive = current === index;
  const showPlaque = activePlaqueIndex === index;

  const slideRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { description, src, button, title } = slide;

  return (
  <div className="[perspective:1200px] [transform-style:preserve-3d]">
    <li
      ref={slideRef}
      className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isActive ? "scale(1) rotateX(0deg)" : "scale(0.98) rotateX(8deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
      }}>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out ${
          showPlaque ? 'backdrop-blur-md' : ''
        }`}
        style={{
          transform: isActive
            ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
            : "none",
        }}>
        <img
          className={`absolute inset-0 w-[120%] h-[120%] object-cover transition-opacity duration-600 ease-in-out ${
            showPlaque ? "blur-sm brightness-75" : ""
          }`}
          style={{ opacity: isActive ? 1 : 0.5 }}
          alt={slide.title}
          src={slide.src}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
        />
        {isActive && (
          <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
        )}
      </div>

      <article
        className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
          isActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">
          {slide.title}
        </h2>
        <div className="flex justify-center">
          <button
            onClick={handleExploreClick}
            className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            {slide.button}
          </button>
        </div>

        {showPlaque && (
          <div data-aos="flip-right" className="mt-4 p-4 text-sm bg-white/90 text-black rounded-xl shadow-lg transition-opacity duration-500 max-w-md mx-auto">
            <p>
              {slide.description}
            </p>
          </div>
        )}
      </article>
    </li>
  </div>
);

};

const CarouselControl = ({
  type,
  title,
  handleClick
}) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}>
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [activePlaqueIndex, setActivePlaqueIndex] = useState(null);
  const containerRef = useRef(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  // 🔸 Close plaque on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setActivePlaqueIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            activePlaqueIndex={activePlaqueIndex}
            setActivePlaqueIndex={setActivePlaqueIndex}
          />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}