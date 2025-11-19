import type {ReactNode} from 'react';
import {PhoneIcon} from '../ui/icons/akar-icons-phone.tsx';
import {EnvelopeIcon} from '../ui/icons/akar-icons-envelope.tsx';
import {ClockIcon} from '../ui/icons/akar-icons-clock.tsx';

export type ContactItem = {
   name: string;
   value: string;
   icon: ReactNode;
};

export const DEFAULT_HERO_CONTACT_ITEMS: ContactItem[] = [
   {
      name: 'Phone',
      value: '+1 (555) 123-4567',
      icon: <PhoneIcon size={22} />,
   },
   {
      name: 'Email',
      value: 'rahim@gmail.com',
      icon: <EnvelopeIcon size={22} />,
   },
   {
      name: 'Opening Time',
      value: '09:00 am - 19:00pm',
      icon: <ClockIcon size={22} />,
   },
];
