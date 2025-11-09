"use client";
import { useEffect, useRef, useState } from "react";

const phases = [
  {
    title: "Elevator Pitch",
    date: "Oct 20 - Oct 24, 2025",
    description: "Create and pitch your innovative business idea in 4 minutes.",
  },
  {
    title: "The Boardroom",
    date: "Oct 31, 2025, 3:00 PM",
    description: "Live discussions and defense of your business strategy.",
  },
  {
    title: "The Final Ascent",
    date: "Nov 8, 2025, 4:00 PM",
    description: "Present your complete business model to win the competition.",
  },
];

export default function CompetitionJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSet((prev) => {
          const updated = new Set(prev);
          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute("data-index"));
            if (entry.isIntersecting) updated.add(index);
            else updated.delete(index);
          });
          return updated;
        });
      },
      { threshold: 0.5 }
    );

    const items = containerRef.current?.querySelectorAll(".phase");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Competition Journey
      </h2>

      {/* Vertical connecting line */}
      <div className="absolute left-1/2 top-20 bottom-10 w-[2px] bg-gray-700 -translate-x-1/2 z-0"></div>

      <ul className="relative timeline timeline-vertical z-10">
        {phases.map((phase, i) => {
          const isVisible = visibleSet.has(i);
          const isEven = i % 2 === 0;

          return (
            <li
              key={i}
              data-index={i}
              className={`phase relative transition-all duration-700 ease-out pb-5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {isEven ? (
                <>
                  <div className="timeline-start text-left">
                    <div className="text-lg font-semibold text-white">
                      {phase.title}
                    </div>
                    <div className="text-sm text-gray-400">{phase.date}</div>
                  </div>
                  <div className="timeline-middle relative z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-purple-500 shadow-lg"></div>
                  </div>
                  <div className="timeline-end text-left">
                    <p className="text-gray-300">{phase.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="timeline-end text-right">
                    <div className="text-lg font-semibold text-white">
                      {phase.title}
                    </div>
                    <div className="text-sm text-gray-400">{phase.date}</div>
                  </div>
                  <div className="timeline-middle relative z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-purple-500 shadow-lg"></div>
                  </div>
                  <div className="timeline-start text-right">
                    <p className="text-gray-300">{phase.description}</p>
                  </div>
                </>
              )}
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
