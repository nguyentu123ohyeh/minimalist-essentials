import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

interface CursorFollowButtonProps {
  onClick?: () => void;
}

export function CursorFollowButton({ onClick }: CursorFollowButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (isInside) {
          setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <button
        onClick={onClick}
        className={`pointer-events-auto absolute w-24 h-24 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center text-xs uppercase tracking-widest font-medium transition-all duration-300 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        style={{
          left: position.x - 48,
          top: position.y - 48,
          transform: `translate(0, 0)`,
        }}
      >
        <span>Explore</span>
        <ArrowDown className="h-4 w-4 mt-1 animate-bounce" />
      </button>
    </div>
  );
}
