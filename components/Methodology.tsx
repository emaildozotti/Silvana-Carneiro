import React from 'react';
import { Heart, Sun, Shield, Scale } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionID } from '../types';

const methods = [
  {
    icon: Heart,
    title: "Consciência Emocional",
    desc: "Identificar os registros de rejeição que ditam suas escolhas hoje."
  },
  {
    icon: Sun,
    title: "Espiritualidade Consciente",
    desc: "Um olhar que transcende a dor, trazendo sentido e paz interna."
  },
  {
    icon: Shield,
    title: "Responsabilidade e Dignidade",
    desc: "Trocar a dependência emocional pela autonomia de se pertencer."
  },
  {
    icon: Scale,
    title: "Presença e Ética",
    desc: "Sessões que respeitam o seu ritmo, sem pressa e sem julgamentos."
  }
];

export const Methodology: React.FC = () => {
  return (
    <Section id={SectionID.METHOD} className="bg-stone-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4">
          Um cuidado integral
        </h2>
        <p className="text-stone-500 uppercase tracking-widest text-sm">Corpo, Mente e Espírito</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {methods.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-700 mb-6">
              <item.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif text-stone-800 mb-3">{item.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};