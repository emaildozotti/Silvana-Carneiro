import React from 'react';
import { Check } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionID } from '../types';

const criteria = [
  "Sente-se invisível ou desvalorizada em suas relações.",
  "Tem dificuldade de dizer \"não\" ou de se posicionar por medo da rejeição.",
  "Vive relacionamentos marcados por carência ou conflitos familiares repetitivos.",
  "Busca um acompanhamento sério, ético e focado em autoconhecimento profundo."
];

export const Audience: React.FC = () => {
  return (
    <Section id={SectionID.AUDIENCE} className="bg-sage-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 text-center mb-12">
          Este lugar foi preparado para você, se...
        </h2>

        <div className="grid md:grid-cols-1 gap-4">
          {criteria.map((text, idx) => (
            <div key={idx} className="flex items-start bg-white p-6 rounded-lg border border-sage-100 shadow-sm">
              <div className="flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-sage-600" />
              </div>
              <p className="ml-4 text-stone-700 font-medium text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};