"use client";
import React from "react";

type Logo = { src: string; href: string };

export default function PartnersSponsors({
  title,
  logos,
}: {
  title: string;
  logos: Logo[];
}) {
  return (
    <div className="text-center space-y-8 py-4">
      <h2 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_#a200ff]">
        {title}
      </h2>

     <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl bg-[#0a00111a] border border-[#a200ff55] shadow-[0_0_35px_#a200ff44] p-8">
        <div className="flex animate-scroll gap-14">
          {logos.concat(logos).map((logo, i) => (
            <a
              key={i}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-500 hover:scale-110"
            >
              <div className="h-30 w-30 rounded-full bg-[#1a002255] border-2 border-[#a200ff55] flex items-center justify-center shadow-[0_0_30px_#a200ff33] hover:shadow-[0_0_40px_#a200ffcc] transition-all duration-500">
                <img
                  src={logo.src}
                  alt="logo"
                  className="h-25 w-25 object-contain rounded-full drop-shadow-[0_0_6px_#a200ffcc]"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
