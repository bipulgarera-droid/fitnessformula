
import { Service, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Packages', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    number: '₹699/-',
    title: '1 WEEK',
    italicWord: 'TRIAL',
    description: 'Get started with a 1 week trial to experience our customized diet plans.',
    image: '/images/fitness_service_1.png',
  },
  {
    id: '2',
    number: '₹2199/-',
    title: '21 DAYS',
    italicWord: 'CHALLENGE',
    description: 'Kickstart your fitness journey with our 21 days challenge.',
    image: '/images/fitness_service_2.png',
  },
  {
    id: '3',
    number: '₹3499/-',
    title: '60 DAYS',
    italicWord: 'TRANSFORMATION',
    description: 'Commit to a 60 days transformation and see incredible results.',
    image: '/images/fitness_service_3.png',
  },
  {
    id: '4',
    number: '₹6999/-',
    title: '12 KGS',
    italicWord: 'TRANSFORMATION',
    description: 'Customized plan focusing on a 12 Kgs healthy transformation.',
    image: '/images/fitness_service_4.png',
  },
  {
    id: '5',
    number: '₹11999/-',
    title: '16 KGS',
    italicWord: 'TRANSFORMATION',
    description: 'Achieve your goals with our 16 Kgs transformation package.',
    image: '/images/fitness_service_5.png',
  },
  {
    id: '6',
    number: '₹24999/-',
    title: '20 KGS',
    italicWord: 'TRANSFORMATION',
    description: 'Our ultimate 20 Kgs transformation journey for a new you.',
    image: '/images/fitness_service_6.png',
  },
];
