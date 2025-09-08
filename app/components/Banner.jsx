// components/BannerSlider.jsx
"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
    {
        id: 1,
        image: "/grass.jpg", // replace with actual image
        title: "JF Privezy Grass Wall",
        subtitle: "The Perfect Blend Of Greenery",
        buttonText: "Shop Now",
        buttonLink: "#",
    },
    {
        id: 2,
        image: "/fence.jpg", // replace with actual image
        title: "JF Chain Fence",
        subtitle: "Strong & Durable Protection",
        buttonText: "Shop Now",
        buttonLink: "#",
    },
    {
        id: 3,
        image: "/product3.jpg",
        title: "JF Premium Turf",
        subtitle: "Luxury Green For Every Space",
        buttonText: "Shop Now",
        buttonLink: "#",
    },
];

export default function Banner() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full mx-auto py-8 px-4">
        <div className="relative bg-base-200 rounded-2xl shadow-md overflow-hidden flex items-center">
            
            {/* Left Button */}
            <button
            onClick={prevSlide}
            className="absolute left-4 z-10 btn btn-circle bg-lime-400 text-white border-none hover:bg-lime-500"
            >
            <FaArrowLeft />
            </button>

            {/* Slide Content */}
            <div className="grid md:grid-cols-2 gap-6 w-full items-center">
            {/* Image */}
            <div className="flex justify-center">
                <img
                src={slides[index].image}
                alt={slides[index].title}
                className="rounded-xl w-72 h-72 object-cover"
                />
            </div>

            {/* Text */}
            <div className="pr-6">
                <h2 className="text-3xl font-bold mb-3">{slides[index].title}</h2>
                <p className="text-gray-600 mb-5">{slides[index].subtitle}</p>
                <a
                href={slides[index].buttonLink}
                className="btn bg-lime-400 hover:bg-lime-500 border-none text-white"
                >
                {slides[index].buttonText}
                </a>
            </div>
            </div>

            {/* Right Button */}
            <button
            onClick={nextSlide}
            className="absolute right-4 z-10 btn btn-circle bg-lime-400 text-white border-none hover:bg-lime-500"
            >
            <FaArrowRight />
            </button>
        </div>
        </div>
    );
}