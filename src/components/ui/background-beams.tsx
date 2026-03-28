import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
  color?: string;
}

export function BackgroundBeams({
  className,
  color = "rgba(139, 177, 157, 0.15)",
}: BackgroundBeamsProps) {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
    "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 696 876"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke={color}
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              pathLength: { duration: 4, delay: i * 0.3, ease: "easeInOut" },
              opacity: {
                duration: 4,
                delay: i * 0.3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              },
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}

        {/* Glowing highlight beams */}
        {[paths[2], paths[5], paths[8]].map((path, i) => (
          <motion.path
            key={`glow-${i}`}
            d={path}
            stroke={color}
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 5,
              delay: i * 1.5 + 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}

        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
