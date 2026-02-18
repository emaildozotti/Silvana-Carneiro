import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionID, AccordionItemProps } from '../types';

const faqData = [
  {
    question: "Preciso ter alguma religião?",
    answer: "Não. Minha abordagem integra uma espiritualidade consciente e universal, respeitando totalmente suas crenças ou a ausência delas."
  },
  {
    question: "É terapia ou coaching?",
    answer: "É um processo híbrido que utiliza ferramentas de ambos para garantir profundidade emocional e clareza prática para sua vida."
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: "Cura é processo, não evento. O tempo é ditado pela sua prontidão e pela complexidade da sua história. Não trabalhamos com atalhos."
  },
  {
    question: "Como funcionam as sessões?",
    answer: "São 100% online, via vídeo, garantindo que você possa estar no conforto e privacidade do seu ambiente."
  }
];

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-stone-200">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
      >
        <span className={`text-lg font-serif font-medium ${isOpen ? 'text-sage-700' : 'text-stone-800'}`}>
          {question}
        </span>
        {isOpen ? <ChevronUp className="text-sage-600" /> : <ChevronDown className="text-stone-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-stone-600 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id={SectionID.FAQ} className="bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 text-center mb-12">
          Dúvidas sobre o processo
        </h2>
        
        <div className="space-y-1">
          {faqData.map((item, idx) => (
            <AccordionItem 
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onClick={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};