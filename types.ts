import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export enum SectionID {
  HERO = 'hero',
  PAIN = 'pain',
  VIDEO = 'video',
  ABOUT = 'about',
  METHOD = 'method',
  AUDIENCE = 'audience',
  FAQ = 'faq',
  TESTIMONIALS = 'testimonials',
  CONTACT = 'contact'
}