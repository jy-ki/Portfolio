import { cn } from "@/lib/cn";

/**
 * A small claymorphism-style character sitting cross-legged with a
 * laptop, ringed by floating mood-board props — hand-drawn as plain SVG
 * shapes (no external illustration asset) in the site's warm ivory/ink
 * system plus the one orange accent and the existing mint/sky/pink/
 * butter tag pastels, so it reads as part of the same visual system
 * rather than a dropped-in stock graphic.
 *
 * The floating props use plain CSS @keyframes (see globals.css), not
 * framer-motion, so the site-wide reduced-motion rule freezes them for
 * free with no JS branching.
 */
export function HeroCharacter({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 320"
      className={cn("pointer-events-none select-none", className)}
    >
      {/* Floating mood-board swatches */}
      <rect
        x="18"
        y="38"
        width="38"
        height="38"
        rx="9"
        className="fill-mint [animation:float-a_6s_ease-in-out_infinite]"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transform="rotate(-10 37 57)"
      />
      <rect
        x="252"
        y="56"
        width="34"
        height="34"
        rx="8"
        className="fill-pink [animation:float-b_7s_ease-in-out_infinite]"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transform="rotate(12 269 73)"
      />
      <rect
        x="248"
        y="168"
        width="30"
        height="30"
        rx="7"
        className="fill-sky [animation:float-c_5.5s_ease-in-out_infinite]"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transform="rotate(-8 263 183)"
      />

      {/* Coffee cup */}
      <g
        className="[animation:float-b_6.5s_ease-in-out_infinite]"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M50,206 Q64,208 51,223"
          fill="none"
          className="stroke-ink/70"
          strokeWidth={4}
          strokeLinecap="round"
        />
        <rect x="18" y="197" width="32" height="30" rx="6" className="fill-ink/85" />
        <ellipse cx="34" cy="197" rx="16" ry="5" className="fill-ink/70" />
        <path
          d="M28,182 Q31,175 28,169 M38,182 Q41,175 38,169"
          fill="none"
          className="stroke-ink/25"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      </g>

      {/* Small plant */}
      <g
        className="[animation:float-a_7.5s_ease-in-out_infinite]"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path d="M242,268 L280,268 L274,246 L248,246 Z" className="fill-orange/80" />
        <ellipse cx="261" cy="228" rx="10" ry="20" className="fill-mint" transform="rotate(-18 261 228)" />
        <ellipse cx="261" cy="228" rx="10" ry="20" className="fill-mint" transform="rotate(18 261 228)" />
        <ellipse cx="261" cy="222" rx="9" ry="19" className="fill-mint/80" />
      </g>

      {/* Ground shadow */}
      <ellipse cx="160" cy="268" rx="60" ry="9" className="fill-ink/10" />

      {/* Seat cushion */}
      <rect x="90" y="215" width="140" height="45" rx="22" className="fill-butter/70" />

      {/* Torso */}
      <path
        d="M125,150 C125,130 135,120 160,120 C185,120 195,130 195,150 L205,215 C205,222 195,228 160,228 C125,228 115,222 115,215 Z"
        className="fill-orange"
      />

      {/* Arms reaching toward the laptop */}
      <ellipse cx="137" cy="175" rx="12" ry="28" className="fill-orange" transform="rotate(-15 137 175)" />
      <ellipse cx="183" cy="175" rx="12" ry="28" className="fill-orange" transform="rotate(15 183 175)" />
      <circle cx="140" cy="197" r="9" className="fill-[#f0c9a0]" />
      <circle cx="180" cy="197" r="9" className="fill-[#f0c9a0]" />

      {/* Laptop */}
      <g transform="rotate(-4 160 172)">
        <rect x="130" y="190" width="60" height="8" rx="4" className="fill-ink" />
        <rect x="132" y="150" width="56" height="42" rx="6" className="fill-ink" />
        <rect x="140" y="160" width="30" height="3" rx="1.5" className="fill-mint" />
        <rect x="140" y="168" width="22" height="3" rx="1.5" className="fill-sky" />
        <rect x="140" y="176" width="26" height="3" rx="1.5" className="fill-butter" />
      </g>

      {/* Head + hair */}
      <circle cx="160" cy="84" r="44" className="fill-[#2e2119]" />
      <circle cx="160" cy="88" r="40" className="fill-[#f0c9a0]" />
      <rect x="116" y="95" width="14" height="50" rx="7" className="fill-[#2e2119]" />
      <rect x="190" y="95" width="14" height="50" rx="7" className="fill-[#2e2119]" />
      <path d="M122,78 Q160,50 198,78 Q160,68 122,78 Z" className="fill-[#2e2119]" />

      {/* Face */}
      <ellipse cx="135" cy="96" rx="8" ry="5" className="fill-pink/60" />
      <ellipse cx="185" cy="96" rx="8" ry="5" className="fill-pink/60" />
      <path
        d="M140,88 Q145,82 150,88 M170,88 Q175,82 180,88"
        fill="none"
        className="stroke-[#2e2119]"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M150,102 Q160,110 170,102"
        fill="none"
        className="stroke-[#2e2119]"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}
