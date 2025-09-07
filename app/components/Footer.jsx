"use client";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
    <div>
        <div className="bg-gradient-to-b from-[#053163] to-[#012a57] rounded-3xl mx-10">
            <footer className="max-w-7xl mx-auto text-white rounded-2xl mt-10 py-20">
                <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-baseline md:items-center justify-between gap-10">
                    {/* Left - Newsletter */}
                    <div>
                        <h2 className="text-xl font-semibold">Join Our JF Products</h2>
                        <p className="mt-2 text-gray-300 text-sm">
                            We’ll tell you about store updates and discounts
                        </p>

                        <div className="mt-4 space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#123b66] placeholder-gray-400 rounded-3xl p-3"
                            />
                            <label className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-neutral border-white" />
                                Yes, subscribe me to your newsletter.
                            </label>
                            <button className="btn btn-block mt-4 rounded-full bg-white text-black hover:bg-gray-200">
                            Join Now
                            </button>
                        </div>
                    </div>

                    {/* Middle - Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Information</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Shop</a></li>
                            <li><a href="#" className="hover:text-white">Our Story</a></li>
                            <li><a href="#" className="hover:text-white">Blogs</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right - Helpful */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Helpful</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">FAQs</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white">My Account</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mx-3">
                    {/* Logo + Branches */}
                    <div className="mt-6 flex items-center gap-4">
                        <div className="bg-white rounded-full p-2">
                            <img
                                src="/logo.png"
                                alt="JF Logo"
                                className="w-20"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold">Our Branches</h3>
                            <p className="text-sm text-gray-300">
                                Coimbatore, Chennai, Hyderabad, Goa, Kochi
                            </p>
                        </div>
                    </div>
                    <button className="btn mt-6 rounded-full bg-lime-400 text-black hover:bg-lime-500">
                        Contact Us
                    </button>
                </div>
            </footer>
        </div>
        {/* Bottom - Copyright + Socials */}
        <div className="flex flex-col md:flex-row items-center justify-around text-center py-6">
            <p className="text-base">
            Copyright © 2025 JF Products. All rights reserved
            </p>
            <div className="flex justify-center gap-6 mt-4">
                <a href="#" className="bg-[#F2F4F6] p-2 rounded-full"><FaFacebook className="w-5 h-5 hover:text-blue-400" /></a>
                <a href="#" className="bg-[#F2F4F6] p-2 rounded-full"><FaInstagram className="w-5 h-5 hover:text-pink-400" /></a>
                <a href="#" className="bg-[#F2F4F6] p-2 rounded-full"><FaYoutube className="w-5 h-5 hover:text-red-500" /></a>
            </div>
        </div>
    </div>
    );
}