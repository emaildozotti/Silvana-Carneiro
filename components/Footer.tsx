import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { SectionID } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionID.CONTACT} className="bg-stone-900 text-stone-300 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-10">

        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-50">
            O processo começa quando você se autoriza.
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Se você sentiu que esta mensagem falou com aquela parte sua que ninguém mais vê, talvez seja o seu tempo de ser cuidada. Estou aqui para quando você estiver pronta.
          </p>
        </div>

        <div className="py-6">
          <Button
            className="!bg-sage-600 hover:!bg-sage-500 !text-white text-lg px-10 py-4 shadow-lg shadow-sage-900/50"
            onClick={() => window.open(`https://wa.me/558899515151?text=${encodeURIComponent('Olá Silvana, vim através do site e gostaria de saber mais sobre o seu acompanhamento.')}`, '_blank')}
          >
            Agendar minha Sessão Inicial
          </Button>
        </div>

        <div className="pt-12 border-t border-stone-800 flex justify-center text-sm">
          <p className="opacity-60">&copy; {new Date().getFullYear()} Silvana Carneiro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};