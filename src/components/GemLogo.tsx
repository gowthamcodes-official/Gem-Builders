import React from 'react';

interface GemLogoProps {
  showSlogan?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  colorTheme?: 'light' | 'dark';
}

export default function GemLogo({ 
  showSlogan = true, 
  size = 'md', 
  className = '', 
  colorTheme = 'light' 
}: GemLogoProps) {
  
  // Dimensions based on size for the combined vector SVG container
  const logoDimensions = {
    sm: { combinedWidth: 156, combinedHeight: 40, subSize: 'text-[9px]', sloganSize: 'text-[10px]' },
    md: { combinedWidth: 234, combinedHeight: 60, subSize: 'text-[10px] md:text-xs', sloganSize: 'text-[11px] md:text-xs' },
    lg: { combinedWidth: 390, combinedHeight: 100, subSize: 'text-xs sm:text-sm md:text-base', sloganSize: 'text-[10px] sm:text-xs md:text-sm' },
    xl: { combinedWidth: 534, combinedHeight: 137, subSize: 'text-sm sm:text-base md:text-lg', sloganSize: 'text-xs sm:text-sm md:text-base' }
  }[size];

  // Determine gap colors in the logo segments for dynamic background suitability
  const gapColor = colorTheme === 'light' ? '#FFFFFF' : '#0B2545';
  const buildersTextColor = colorTheme === 'light' ? 'text-slate-900' : 'text-slate-100';

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Upper Logo block: Fully Integrated Vector SVG with Diamond + Mosaic GEM Letters */}
      <div 
        style={{ width: '100%', maxWidth: logoDimensions.combinedWidth, height: 'auto', aspectRatio: '390/100' }} 
        className="transition-all duration-300 hover:scale-[1.02] shrink-0"
      >
        <svg 
          viewBox="0 0 390 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
        >
          {/* ==================== 1. STYLIZED DIAMOND VECTOR (LEFT SIDE) ==================== */}
          <g transform="translate(10, -14) scale(1.46)">
            {/* LEFT HALF OF DIAMOND */}
            {/* Top-Left segment (Green) */}
            <path 
              d="M 24 16 L 50 16 L 44 32 L 20 26 Z" 
              fill="#1B9D47" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            {/* Leftmost side top (Orange/Yellow) */}
            <path 
              d="M 20 26 L 44 32 L 32 46 L 8 36 Z" 
              fill="#F9A825" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            {/* Left vertical bold pillar segment (Red-Green-Blue) */}
            <path 
              d="M 50 16 L 50 48 L 44 48 L 44 32 Z" 
              fill="#DC2626" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            {/* Leftmost side bottom (Blue) */}
            <path 
              d="M 8 36 L 32 46 L 50 74 L 26 56 Z"
              fill="#0F4CAC" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            {/* Bottom-left inner facet (Red Stripe) */}
            <path 
              d="M 32 46 L 44 48 L 50 74 Z"
              fill="#C62828" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            {/* Deep Purple Chevron base connector */}
            <path 
              d="M 44 48 L 50 48 L 50 74 Z" 
              fill="#5A1F8D" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />

            {/* RIGHT HALF OF DIAMOND - OUTER FACETS ENCLOSING HOLLOW CENTER */}
            {/* Mirror Right top segment (Red) */}
            <path 
              d="M 76 16 L 50 16 L 56 32 L 80 26 Z" 
              fill="#DC2626" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            {/* Mirror Right upper edge segment (Yellow) */}
            <path 
              d="M 80 26 L 56 32 L 68 46 L 92 36 Z" 
              fill="#F9A825" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            {/* Mirror Right middle outer edge segment (Orange) */}
            <path 
              d="M 92 36 L 68 46 L 50 74 L 74 56 Z" 
              fill="#F69C13" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            {/* Mirror Right bottom slant segment (Blue) */}
            <path 
              d="M 68 46 L 56 48 L 50 74 Z"
              fill="#0F4CAC" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            {/* Mirror Purple bottom connector */}
            <path 
              d="M 56 48 L 50 48 L 50 74 Z" 
              fill="#5A1F8D" 
              stroke={gapColor} 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
          </g>

          {/* ==================== 2. VECTOR MOSAIC "GEM" LETTERS (RIGHT SIDE) ==================== */}
          <g transform="translate(162, 0)">
            
            {/* LETTER G */}
            <g>
              {/* Top Arch Left (Green) */}
              <polygon points="36,5 12,18 24,37 36,27" fill="#1B9D47" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Top Arch Right (Red) */}
              <polygon points="36,5 60,18 48,37 36,27" fill="#DC2626" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Left Upper (Yellow) */}
              <polygon points="12,18 2,45 20,47 24,37" fill="#F9A825" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Left Lower (Blue) */}
              <polygon points="2,45 8,72 24,63 20,47" fill="#0F4CAC" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Bottom Left (Purple) */}
              <polygon points="8,72 36,95 36,73 24,63" fill="#5A1F8D" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Bottom Right (Dark Red) */}
              <polygon points="36,95 60,78 48,63 36,73" fill="#C62828" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Right Lower (Orange) */}
              <polygon points="60,78 70,55 52,51 48,63" fill="#F69C13" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Bar Front Red Segment */}
              <polygon points="70,55 70,41 40,41 40,55 52,51" fill="#DC2626" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Right Upper (Red) */}
              <polygon points="60,18 70,41 52,41 48,37" fill="#DC2626" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
            </g>

            {/* LETTER E */}
            <g transform="translate(82, 0)">
              {/* Top Left (Blue) */}
              <polygon points="0,5 28,5 18,28 0,28" fill="#0F4CAC" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Top Right (Yellow) */}
              <polygon points="28,5 62,5 62,28 18,28" fill="#FBC02D" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Middle Left (Green) */}
              <polygon points="0,28 0,65 18,50" fill="#1B9D47" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Middle Center (Orange) */}
              <polygon points="18,50 18,38 46,38 46,50" fill="#F69C13" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Middle Right (Red) */}
              <polygon points="18,50 46,50 33,62 18,62" fill="#DC2626" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Bottom Left (Purple) */}
              <polygon points="0,65 26,65 18,95 0,95" fill="#5A1F8D" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Bottom Right (Red) */}
              <polygon points="26,65 62,65 62,95 18,95" fill="#DC2626" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
            </g>

            {/* LETTER M */}
            <g transform="translate(154, 0)">
              {/* Left Leg Upper (Green) */}
              <polygon points="0,5 20,5 20,50 0,38" fill="#1B9D47" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Left Leg Lower (Red) */}
              <polygon points="0,38 20,50 20,95 0,95" fill="#DC2626" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              
              {/* Right Leg Upper (Blue) */}
              <polygon points="48,5 68,5 68,38 48,50" fill="#0F4CAC" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* Right Leg Lower (Yellow) */}
              <polygon points="48,50 68,38 68,95 48,95" fill="#F9A825" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              
              {/* V-Slant Left Upper (Yellow) */}
              <polygon points="20,5 34,44 20,50" fill="#FBC02D" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* V-Slant Left Lower (Orange) */}
              <polygon points="20,50 34,44 34,70" fill="#F69C13" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              
              {/* V-Slant Right Upper (Green) */}
              <polygon points="48,5 34,44 48,50" fill="#1B9D47" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              {/* V-Slant Right Lower (Purple) */}
              <polygon points="48,50 34,44 34,70" fill="#5A1F8D" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
              
              {/* Center Floating Jewel (Purple) */}
              <polygon points="34,76 41,84 34,92 27,84" fill="#5A1F8D" stroke={gapColor} strokeWidth="1.5" strokeLinejoin="round" />
            </g>

          </g>
        </svg>
      </div>

      {/* "Builders & Developers" in solid professional typeface directly under GEM logo */}
      <h3 className={`font-sans font-black tracking-[0.2em] uppercase text-center mt-2.5 ${buildersTextColor} ${logoDimensions.subSize} leading-none`}>
        Builders <span className="text-[#7388F4] font-extrabold">&</span> Developers
      </h3>

      {/* Breathing life in Concrete in red italics under double flank lines */}
      {showSlogan && (
        <div className="flex items-center justify-center gap-3 mt-3 w-full max-w-[280px] md:max-w-md">
          <div className="h-[1px] bg-red-600/35 grow" />
          <p className={`font-cursive text-red-600 font-extrabold tracking-wider italic text-center whitespace-nowrap ${logoDimensions.sloganSize} select-text`}>
            Breathing life in Concrete
          </p>
          <div className="h-[1px] bg-red-600/35 grow" />
        </div>
      )}
    </div>
  );
}
