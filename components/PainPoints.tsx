import React from 'react';
import { Section } from './ui/Section';
import { SectionID } from '../types';

export const PainPoints: React.FC = () => {
  return (
    <Section id={SectionID.PAIN} className="bg-stone-100">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800">
          Você se tornou especialista em cuidar de todos, mas quem olha para você?
        </h2>

        <div className="space-y-6 text-stone-600 text-lg leading-relaxed text-left md:text-center">
          <p>
            Você aprendeu a ser a "filha que não dá trabalho" e a adulta que resolve tudo sozinha.
          </p>
          <p>
            O silêncio se tornou seu escudo, e a anulação de si mesma, sua estratégia de sobrevivência.
          </p>
          <p>
            Hoje, você sente o peso invisível de não ser escolhida, de não ser prioridade e de carregar um vazio que nenhuma conquista consegue preencher.
          </p>
        </div>

        <div className="pt-8 border-t border-stone-300">
          <p className="text-xl md:text-2xl font-serif italic text-sage-800">
            "O cansaço que você sente não é só físico. É o esgotamento de quem vive tentando ser o que o outro espera, apenas para não ser abandonada."
          </p>
        </div>
      </div>
    </Section>
  );
};