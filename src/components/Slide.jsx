import React, { useEffect, useRef, useState } from 'react';
const images = ['/src/assets/1.png', '/src/assets/2.png', '/src/assets/3.png'];


const Slide = () => {
    const slidesRef = useRef([]);
    const [slideIndex, setSlideIndex] = useState(0);

    const showSlides = (n) => {
        const slides = slidesRef.current;
        if (n >= slides.length) {
            setSlideIndex(0);
        } else if (n < 0) {
            setSlideIndex(slides.length - 1);
        } else {
            setSlideIndex(n);
        }
    };

    const plusSlides = (n) => {
        showSlides(slideIndex + n);
    };

    const currentSlide = (n) => {
        showSlides(n);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            plusSlides(1);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slideIndex]);

    return (
        <div className="relative max-w-2xl mx-auto overflow-hidden">
            {['/src/assets/1.png', '/src/assets/2.png', '/src/assets/3.png'].map((src, index) => (
                <div
                    key={index}
                    className={`mySlides fade transition-opacity duration-500 ${index === slideIndex ? 'block' : 'hidden'}`}
                    ref={(el) => (slidesRef.current[index] = el)}
                >
                    <img src={src} alt={`Slide ${index + 1}`} className="w-full" />
                </div>
            ))}
            <a className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300" onClick={() => plusSlides(-1)}>
                &#10094;
            </a>
            <a className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300" onClick={() => plusSlides(1)}>
                &#10095;
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 py-4">
                {['1', '2', '3'].map((_, index) => (
                    <span
                        key={index}
                        className={`dot h-4 w-4 bg-gray-400 rounded-full cursor-pointer transition-all duration-300 ${index === slideIndex ? 'bg-gray-700' : ''}`}
                        onClick={() => currentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slide;
