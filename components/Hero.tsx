import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { SectionID } from '../types';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 bg-gradient-to-b from-stone-50 to-sage-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
        >
          <span className="text-stone-500 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
            Para quem aprendeu cedo a se sentir sem importância...
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight font-serif text-stone-900">
            EXISTE UM <span className="italic text-sage-700">CAMINHO DE VOLTA</span> PARA SI MESMA.
          </h1>

          <p className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-xl">
            Um espaço seguro para curar as feridas de rejeição e invisibilidade, resgatando a dignidade de ocupar o seu próprio lugar no mundo e nas suas relações. Sem promessas rápidas, com profundidade e respeito ao seu tempo.
          </p>

          <div className="pt-4">
            <Button onClick={() => window.open(`https://wa.me/558899515151?text=${encodeURIComponent('Olá Silvana, vim através do site e gostaria de saber mais sobre o processo terapêutico.')}`, '_blank')}>
              Quero iniciar meu processo de volta
            </Button>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="order-2 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl border-4 border-white/50">
            {/* Placeholder for Silvana Carneiro's portrait */}
            <img
              src="https://i.imgur.com/qIjVBkN.jpeg"
              alt="Silvana Carneiro - Terapeuta e Coach"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};