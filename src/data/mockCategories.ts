import { Category } from '@/types/blog';

export const mockCategories: Category[] = [
  {
    id: 'cat-ciclos',
    name: 'Tipos de Ciclos',
    slug: 'tipos-de-ciclos',
    description: 'Protocolos completos, combinações de ciclos e guias estruturados para diferentes objetivos.',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    order: 1,
    enabled: true,
    highlighted: true,
  },
  {
    id: 'cat-ergogenicos',
    name: 'Ergogênicos',
    slug: 'ergogenicos',
    description: 'Análises detalhadas de substâncias ergogênicas, mecanismos de ação e protocolos de uso.',
    coverImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    order: 2,
    enabled: true,
    highlighted: true,
  },
  {
    id: 'cat-emagrecimento',
    name: 'Emagrecimento',
    slug: 'emagrecimento',
    description: 'Substâncias para perda de peso, protocolos e análises comparativas atualizadas.',
    coverImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    order: 3,
    enabled: true,
    highlighted: true,
  },
  {
    id: 'cat-peptideos',
    name: 'Peptídeos',
    slug: 'peptideos',
    description: 'Peptídeos individuais, stacks, combinações e conteúdo educacional sobre peptídeos.',
    coverImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    order: 4,
    enabled: true,
    highlighted: true,
  },
];
