"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import a1 from '@/app/assetes/agriculture/a1.png';
import a2 from '@/app/assetes/agriculture/a2.png';
import a3 from '@/app/assetes/agriculture/a3.png';
import a4 from '@/app/assetes/agriculture/a4.png';

export default function ProductSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

const products = [
    {
        id: 1,
        img: a1,
        title: "JF Barbed Wire – 270 GSM",
        price: "₹4,995.00",
    },
    {
        id: 2,
        img: a2,
        title: "FGC RustFree Fencing Poles",
        price: "₹499.00 – ₹1,589.00",
    },
    {
        id: 3,
        img: a3,
        title: "GI Poultry Mesh",
        price: "₹1,260.00 – ₹10,750.00",
    },
    {
        id: 4,
        img: a4,
        title: "JF Bluelink Mesh",
        price: "₹3,067.50 – ₹6,382.50",
    },
    {
        id: 5,
        img: a1,
        title: "JF Barbed Wire – 270 GSM",
        price: "₹4,995.00",
    },
    {
        id: 6,
        img: a2,
        title: "FGC RustFree Fencing Poles",
        price: "₹499.00 – ₹1,589.00",
    },
    {
        id: 7,
        img: a3,
        title: "GI Poultry Mesh",
        price: "₹1,260.00 – ₹10,750.00",
    },
    {
        id: 8,
        img: a4,
        title: "JF Bluelink Mesh",
        price: "₹3,067.50 – ₹6,382.50",
    }
];
    // Responsive card counts
    const getVisibleCount = () => {
        if (typeof window !== "undefined") {
        if (window.innerWidth < 640) return 1; // mobile
        if (window.innerWidth < 1024) return 2; // tablet
        if (window.innerWidth < 1280) return 3; // small laptop
        }
        return 4; // desktop
    };

    const totalProducts = products.length;
    const visibleCount = getVisibleCount();

    const nextSlide = () => {
        if (currentIndex < totalProducts - visibleCount) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

return (
    <div className="max-w-7xl mx-auto my-20">
        <h2 className="font-medium text-3xl lg:text-[42px]">Agricultural Products</h2>
        <div className="relative flex items-center overflow-hidden">
            {/* Left Button */}
            <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-200 disabled:opacity-50 cursor-pointer"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Cards Wrapper */}
            <div className="w-full overflow-hidden">
                <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
                >
                {products.map((product) => (
                    <div
                    key={product.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-2"
                    >
                    <div className="card w-72 md:w-full mx-auto shadow-md rounded-xl p-3 h-full bg-gray-50">
                        <Image
                            src={product.img}
                            alt={product.title}
                            width={200}
                            height={150}
                            className="h-40 object-contain mx-auto"
                        />
                        <div className="card-body p-4">
                        <h2 className="text-sm font-semibold">{product.title}</h2>
                        <p className="text-gray-600 text-sm">{product.price}</p>
                        <div className="card-actions mt-2">
                            <button className="btn btn-sm bg-[#B0DD1D] rounded-3xl hover:bg-lime-500 text-black">
                            Shop Now
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                disabled={currentIndex >= totalProducts - visibleCount}
                className="absolute right-0 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-200 disabled:opacity-50 cursor-pointer"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    </div>
    );
}