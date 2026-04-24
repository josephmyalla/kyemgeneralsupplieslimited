import { useState, useEffect, useRef } from "react";

// Define the type for a slide
interface Slide {
  url: string;
  caption: string;
  sub: string;
}

// Import your slides data - you'll need to define the type for SLIDES as well
import { SLIDES } from "../../data/slides";

const RED: string = "#DC2626";

export default function ImageSlider() {
  const [current, setCurrent] = useState<number>(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<number>(1); // 1 = forward, -1 = backward
  const [animating, setAnimating] = useState<boolean>(false);
  const timerRef = useRef<number>(null);

  const go = (next: number, direction: number): void => {
    if (animating || next === current) return;
    setDir(direction);
    setPrev(current);
    setCurrent(next);
    setAnimating(true);
    setTimeout(() => { 
      setPrev(null); 
      setAnimating(false); 
    }, 600);
  };

  const goNext = (): void => go((current + 1) % SLIDES.length, 1);
  const goPrev = (): void => go((current - 1 + SLIDES.length) % SLIDES.length, -1);

  useEffect(() => {
    timerRef.current = setInterval(goNext, 4500);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [current, animating]);

  const resetTimer = (): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(goNext, 4500);
  };

  const handlePrev = (): void => { 
    goPrev(); 
    resetTimer(); 
  };
  
  const handleNext = (): void => { 
    goNext(); 
    resetTimer(); 
  };
  
  const handleDot = (i: number): void => { 
    go(i, i > current ? 1 : -1); 
    resetTimer(); 
  };

  // Helper function to get animation class based on direction
  const getAnimationClass = (): string => {
    if (prev !== null) {
      return `slideIn${dir > 0 ? "Right" : "Left"}`;
    }
    return "";
  };

  const getPrevAnimationClass = (): string => {
    return `slideOut${dir > 0 ? "Left" : "Right"}`;
  };

  return (
    <div className="relative w-full select-none" style={{ perspective: "1200px" }}>
      {/* Main frame */}
      <div 
        className="relative overflow-hidden rounded-2xl"
        style={{
          height: 420, 
          boxShadow: `0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(220,38,38,.2)`
        }}
      >
        {/* Outgoing slide */}
        {prev !== null && (
          <div 
            className="absolute inset-0" 
            key={`prev-${prev}`}
            style={{
              backgroundImage: `url(${SLIDES[prev]?.url})`,
              backgroundSize: "cover", 
              backgroundPosition: "center",
              animation: `${getPrevAnimationClass()} .6s cubic-bezier(.77,0,.18,1) forwards`,
            }}
          />
        )}

        {/* Incoming / current slide */}
        <div 
          className="absolute inset-0" 
          key={`curr-${current}`}
          style={{
            backgroundImage: `url(${SLIDES[current]?.url})`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            animation: prev !== null
              ? `${getAnimationClass()} .6s cubic-bezier(.77,0,.18,1) forwards`
              : "none",
          }}
        >
          {/* Dark gradient overlay */}
          <div 
            className="absolute inset-0" 
            style={{ background: "linear-gradient(to top, rgba(12,1,1,.85) 0%, rgba(12,1,1,.2) 50%, transparent 100%)" }}
          />
          {/* Red accent bar */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-0.5" 
            style={{ background: `linear-gradient(to right, transparent, ${RED}, transparent)` }}
          />
        </div>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <p 
            className="fd font-extrabold text-white text-2xl leading-tight mb-1" 
            key={`cap-${current}`}
            style={{ animation: "captionIn .5s .2s ease both" }}
          >
            {SLIDES[current]?.caption}
          </p>
          <p 
            className="fb text-white/55 text-sm" 
            key={`sub-${current}`}
            style={{ animation: "captionIn .5s .35s ease both" }}
          >
            {SLIDES[current]?.sub}
          </p>
        </div>

        {/* Prev / Next arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{
            background: "rgba(12,1,1,.6)", 
            border: "1px solid rgba(220,38,38,.3)", 
            backdropFilter: "blur(8px)"
          }}
        >
          ‹
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{
            background: "rgba(12,1,1,.6)", 
            border: "1px solid rgba(220,38,38,.3)", 
            backdropFilter: "blur(8px)"
          }}
        >
          ›
        </button>

        {/* Slide counter badge */}
        <div 
          className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full fd font-bold text-xs text-white"
          style={{
            background: "rgba(220,38,38,.7)", 
            backdropFilter: "blur(6px)"
          }}
        >
          {current + 1} / {SLIDES.length}
        </div>
      </div>

      {/* Dot + thumbnail row */}
      <div className="flex items-center justify-center gap-3 mt-4">
        {SLIDES.map((s: Slide, i: number) => (
          <button 
            key={i} 
            onClick={() => handleDot(i)}
            className="relative overflow-hidden rounded-lg transition-all duration-300"
            style={{
              width: i === current ? 52 : 36,
              height: 36,
              opacity: i === current ? 1 : 0.45,
              outline: i === current ? `2px solid ${RED}` : "none",
              outlineOffset: 2,
              flexShrink: 0,
            }}
          >
            <img src={s.url} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,.08)" }}>
        <div 
          key={current} 
          className="h-full rounded-full" 
          style={{ background: RED, animation: "progressBar 4.5s linear forwards" }}
        />
      </div>
    </div>
  );
}