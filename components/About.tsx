import React from 'react';
import { Section } from './ui/Section';
import { SectionID } from '../types';

export const About: React.FC = () => {
  return (
    <Section id={SectionID.ABOUT} className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-sage-100 transform -translate-x-4 translate-y-4 rounded-lg -z-10"></div>
          <img
            src="https://i.imgur.com/cVHrn17.jpeg"
            alt="Silvana Carneiro"
            className="rounded-lg shadow-md w-full object-cover aspect-[4/5]"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
            Eu sustento no outro aquilo que precisei aprender a sustentar em mim.
          </h2>

          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Olá, eu sou <strong>Silvana Carneiro</strong>. Minha história foi marcada pelo abandono e pela sensação de que meu sentir era motivo de vergonha. Por muito tempo, vivi refém da carência e de escolhas afetivas que só repetiam o meu abandono.
            </p>
            <p>
              Minha virada não veio com uma fórmula mágica, mas com o deslocamento do olhar: eu parei de esperar o espelho do outro e comecei a construir o meu próprio.
            </p>
            <p>
              Hoje, como terapeuta e coach, minha missão é acompanhar você nesse mesmo caminho. Não para te "consertar" — pois você não está quebrada —, mas para te ajudar a dar nome às suas dores e lugar à sua existência.
            </p>
          </div>

          <div className="pt-4">
            <span className="font-serif text-2xl text-sage-700 italic">Silvana Carneiro</span>
          </div>
        </div>
      </div>
    </Section>
  );
};