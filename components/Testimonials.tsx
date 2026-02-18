import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { SectionID } from '../types';

const testimonials = [
    {
        text: "Cheguei na Silvana com um 'pé atrás', admito. Já tinha tentado de tudo e achava que meu caso não tinha solução. Mas o olhar dela é diferente. Ela não foca só no problema, ela enxerga a gente por inteiro. Foi a primeira vez que me senti realmente vista e compreendida na minha dor. Hoje, as crises que eu tinha ficaram no passado.",
        author: "Renata M.",
        role: "42 anos, Arquiteta",
        initial: "R"
    },
    {
        text: "Eu tinha muito medo de mexer em feridas antigas e não aguentar. A Silvana conduziu tudo com um respeito e uma leveza que eu nunca tinha experimentado. Ela me ajudou a entender que eu não sou o que me aconteceu, mas sim quem eu escolho ser agora. Recuperei minha dignidade e meu lugar na vida.",
        author: "Bia F.",
        role: "35 anos, Nutricionista",
        initial: "B"
    },
    {
        text: "Sempre fui a que cuidava de todos e me esquecia. Me sentia invisível até dentro de casa. O processo com a Silvana foi um resgate. Aprendi a ocupar meu espaço sem culpa. Minhas relações melhoraram muito porque eu parei de esperar que o outro me desse o valor que só eu poderia me dar.",
        author: "Luciana P.",
        role: "48 anos, Empresária",
        initial: "L"
    }
];

export const Testimonials: React.FC = () => {
    return (
        <Section id={SectionID.TESTIMONIALS} className="bg-stone-100">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4 italic">
                    Vidas que se reencontraram
                </h2>
                <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-sage-400 text-sage-400" />
                    ))}
                </div>
                <p className="text-stone-500 uppercase tracking-widest text-sm">Depoimentos Reais</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                    >
                        <div>
                            <Quote className="text-sage-300 mb-6 w-8 h-8 opacity-50" />
                            <p className="text-stone-700 leading-relaxed italic mb-8 relative z-10">
                                "{t.text}"
                            </p>
                        </div>

                        <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                            <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-700 font-serif text-xl border border-sage-100 shrink-0">
                                {t.initial}
                            </div>
                            <div>
                                <h4 className="font-semibold text-stone-900">{t.author}</h4>
                                <p className="text-xs text-stone-500 uppercase tracking-wider">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center space-y-8">
                <p className="text-stone-600 font-serif italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    "O maior testemunho da eficácia desse caminho não está nas palavras, mas no brilho de volta aos olhos de cada mulher que decide se pertencer."
                </p>

                <div className="pt-4">
                    <Button onClick={() => window.open(`https://wa.me/558899515151?text=${encodeURIComponent('Olá Silvana, vi os depoimentos e senti que este é o momento de iniciar meu processo.')}`, '_blank')}>
                        Quero iniciar minha transformação
                    </Button>
                </div>
            </div>
        </Section>
    );
};
