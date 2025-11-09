"use client";
import { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate email sending logic (e.g., via email API)
    console.log("Form submitted:", formData);
    alert("Message sent!"); 
    setFormData({ name: "", email: "", message: "" });
  };

  return (
<div className="bg-[#0d002e]/60 backdrop-blur-md border border-[#a200ff33] text-[#d4bfff] rounded-xl p-6 max-w-3xl mx-auto shadow-neon space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Contact Us
      </h2>

      {/* Contact Info */}
      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center gap-4 text-[#c0b3ff]">
          <FaEnvelope className="text-[#a200ff] drop-shadow-neon" />
          <span className="font-medium">official@sciencetheatre.com</span>
        </div>
        <div className="flex items-center justify-center gap-4 text-[#c0b3ff]">
          <FaMapMarkerAlt className="text-[#a200ff] drop-shadow-neon" />
          <span className="font-medium">BRAC University, Dhaka, Bangladesh</span>
        </div>
        <div className="flex justify-center gap-20 mt-6 text-4xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a200ff] hover:text-[#ff5aff] transition drop-shadow-neon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a200ff] hover:text-[#ff5aff] transition drop-shadow-neon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a200ff] hover:text-[#ff5aff] transition drop-shadow-neon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-[#1a0033]/50 border border-[#a200ff66] text-[#d4bfff] focus:outline-none focus:ring-2 focus:ring-[#ff5aff] placeholder-[#c0b3ff]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-[#1a0033]/50 border border-[#a200ff66] text-[#d4bfff] focus:outline-none focus:ring-2 focus:ring-[#ff5aff] placeholder-[#c0b3ff]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-2 rounded-lg bg-[#1a0033]/50 border border-[#a200ff66] text-[#d4bfff] focus:outline-none focus:ring-2 focus:ring-[#ff5aff] placeholder-[#c0b3ff]"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg neon-btn text-lg font-bold tracking-widest uppercase"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
