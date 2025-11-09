"use client";
import React, { useState } from "react";

export default function About() {
  const [showFullWhy, setShowFullWhy] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
      {/* About the Competition */}
      <div className="bg-[#0d002e]/70 backdrop-blur-md border border-[#a200ff33] rounded-xl p-8 shadow-neon">
        <h2 className="text-4xl font-bold mb-6 text-center">
          About the Competition
        </h2>
        <p className="text-[#FFFFFF] text-base tracking-wider leading-relaxed text-justify">
          The Science Theatre is a national STEM communication 
          competition designed for young learners to present 
          scientific concepts through storytelling, enhanced 
          with visual content such as animations, comics, or 
          motion illustrations. Participants explain complex 
          ideas in a simple, engaging, and layman-friendly 
          manner, combining clarity, energy, and creativity.
        </p>
        <p className="text-[#FFFFFF] mt-6">
          The competition includes core segments of solo or 
          group presentations and extended segments like poster 
          and project presentations. Regional rounds are held 
          both online and offline, culminating in the national 
          round at BRAC University, where participants showcase 
          their polished concepts to a panel of academicians 
          and industry experts.        
        </p>
        <p className="text-[#FFFFFF] mt-6">
          Whether you're here to compete, connect, or create, SCIENCE THEATRE 2025 is
          your stage to shine. Join us in redefining the future of STEM
          communication.
        </p>
      </div>

      {/* Why Participate + About Science Theatre */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Why Participate */}
        <div className="bg-[#0d002e]/60 backdrop-blur-md border border-[#a200ff33] rounded-xl p-6 shadow-neon flex flex-col min-h-[200px]">
          <h3 className="text-3xl font-bold mb-6 text-center">Why Participate?</h3>
          <p className="text-[#FFFFFF] text-base tracking-wider leading-relaxed text-justify">
            By taking part in The Science Theatre, students 
            gain the opportunity to develop public speaking, 
            critical thinking, collaboration, and leadership 
            skills while nurturing their ability to communicate 
            science effectively.
          </p>

          {showFullWhy && (
            <p className="text-[#FFFFFF] text-base tracking-wider leading-relaxed text-justify mt-4">
              Participants receive mentorship from professional comic artists, animators, and STEM 
              experts to craft their ideas into compelling visual content. Beyond personal skill development, the 
              competition encourages curiosity, creativity, and the joy of sharing science with a broader audience, 
              with rewards including certificates, mentorship, internships, industry visits, and a wild card entry 
              to the first international round.
            </p>
          )}

          <button
            onClick={() => setShowFullWhy(!showFullWhy)}
            className="mt-2 self-center neon-btn px-4 py-2 text-sm"
          >
            {showFullWhy ? "See Less" : "See More"}
          </button>
        </div>

        {/* Right: About Science Theatre */}
        <div className="bg-[#0d002e]/60 backdrop-blur-md border border-[#a200ff33] rounded-xl p-6 shadow-neon flex flex-col min-h-[200px]">
          <h3 className="text-3xl font-bold mb-6 text-center">About Science Theatre</h3>
          <p className="text-[#FFFFFF] text-base tracking-wider leading-relaxed text-justify">
            The Science Theatre is a science communication competition 
            where young learners will explain different notions of STEM 
            through storytelling with the aid of visual entertaining 
            content(s).
          </p>

          {showFullAbout && (
            <p className="text-[#FFFFFF] text-base tracking-wider leading-relaxed text-justify mt-4">
              This content(s) can be motion illustration, comic, or animation. Both the delivered speech and visual content 
              has to be laymen friendly. Unlike the lectures or papers, content should contain essence, energy and empathy, 
              should provoke curiosity, and help our audiences to connect with mesmerizing concepts of science without 
              having any previous knowledge of it. The content that young learners will deliver has to be non-expert audience friendly, 
              debunking the hurdles of jargons or elitism. On one hand, this programme will assist us to communicate with science, 
              on the other hand it will develop skills of public speaking, critical thinking, communication, collaboration and leadership. 
              Our young participants will nurture the skill of future leaders of STEM who can both understand and communicate the science. 
              A young participant will be able to realize her/his ability as well as responsibility to communicate about the application & significance 
              of knowledge of science with the community, especially non-expert community.
            </p>
          )}

          <button
            onClick={() => setShowFullAbout(!showFullAbout)}
            className="mt-2 self-center neon-btn px-4 py-2 text-sm"
          >
            {showFullAbout ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
}
