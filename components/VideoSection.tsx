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
            className="relative w-full aspect-[9/16] bg-black rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border-[8px] border-white ring-1 ring-stone-900/5"
          >
            <iframe
              src="https://drive.google.com/file/d/1mOS8tbCaHwcbwmSchoCf5YZAwqV5mgQM/preview"
              className="w-full h-full border-none"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
};