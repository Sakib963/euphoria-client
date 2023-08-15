import { useEffect, useState } from "react";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateSlide(true);
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 6000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [slides.length]);

  const handleAnimationEnd = () => {
    setAnimateSlide(false); // Reset animation state
  };

  const handleDotClick = (index) => {
    setAnimateSlide(true);
    setCurrentSlide(index);
  };

  const slideRightStyle = {
    backgroundImage: `url(${slides[currentSlide].imgRight})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:max-h-[500px]">
        <img
          className={`w-full md:w-1/2 h-auto ${
            animateSlide ? "slider-animation" : ""
          }`}
          src={slides[currentSlide].imgLeft}
          alt=""
          onAnimationEnd={handleAnimationEnd}
        />
        <div
          className={`w-full py-14 lg:py-8 md:w-1/2 h-auto flex flex-col items-center justify-center ${
            animateSlide ? "slider-animation" : ""
          }`}
          style={slideRightStyle}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="max-w-[300px] max-h-[100px] mb-8">
            <img
              className="w-full h-full max-h-[100px]"
              src={slides[currentSlide].logo}
              alt=""
            />
          </div>
          <p className="text-xl lg:text-4xl font-bold mb-3">
            {slides[currentSlide]?.mottoOne}
          </p>
          <p className="text-xl lg:text-4xl font-bold mb-6">
            {slides[currentSlide]?.mottoTwo}
          </p>
          <button className="border-2 border-[#000000] px-9 py-2 rounded-lg text-2xl">
            Explore
          </button>
        </div>
      </div>
      {/* slider dots */}
      <div className="flex gap-1 items-center justify-center my-5">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-[#002482]" : "bg-[#c4c4c4]"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Slider;
