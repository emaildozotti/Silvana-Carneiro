import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionID } from '../types';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'JsCnkfdcmlI';

  return (
    <Section id={SectionID.VIDEO} className="bg-stone-50 !py-20">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 text-center mb-12 italic">
          O seu lugar te espera.
        </h2>
        {/* Container with decorative elements */}
        <div className="relative">
          {/* Subtle decorative glow */}
          <div className="absolute -inset-4 bg-sage-100/30 blur-2xl rounded-full -z-10 group-hover:bg-sage-200/40 transition-colors duration-500"></div>

          <div
            className="relative w-full aspect-[9/16] bg-stone-200 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden group cursor-pointer border-[8px] border-white ring-1 ring-stone-900/5"
            onClick={() => !isPlaying && setIsPlaying(true)}
          >
            {!isPlaying ? (
              <>
                {/* Clean Minimalist Background */}
                <div className="absolute inset-0 bg-stone-900 flex flex-col items-center justify-center p-8">
                  {/* Subtle Background Pattern/Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-900/40 to-transparent opacity-50"></div>

                  {/* DÊ O PLAY Text */}
                  <h3 className="relative font-serif text-4xl md:text-5xl text-stone-100 tracking-[0.15em] mb-12 drop-shadow-lg">
                    DÊ O <span className="italic">PLAY</span>
                  </h3>

                  {/* Vibrating Play Button */}
                  <div className="relative">
                    {/* Ping Animation Layer */}
                    <div className="absolute inset-0 bg-white/40 rounded-full animate-ping"></div>

                    {/* Main Button */}
                    <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-10 h-10 text-stone-900 ml-1 fill-stone-900" />
                    </div>
                  </div>

                  {/* Bottom Hint */}
                  <p className="absolute bottom-12 text-stone-400 text-[10px] uppercase tracking-[0.3em] font-light">
                    Assista à mensagem
                  </p>
                </div>
              </>
            ) : (
              <div className="relative w-full h-full bg-black">
                <iframe
                  src="https://drive.google.com/file/d/1mOS8tbCaHwcbwmSchoCf5YZAwqV5mgQM/preview"
                  className="w-full h-full border-none"
                  allow="autoplay"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};