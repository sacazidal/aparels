import { v4 } from 'uuid';
import { NavItem } from '../models';

export const headerNavItems: NavItem[] = [
  {
    id: v4(),
    label: 'JEWELRY',
    type: 'internal_link',
    link: '',
  },
  {
    id: v4(),
    label: 'CAMPAIGNS',
    type: 'internal_link',
    link: '',
  },
  {
    id: v4(),
    label: 'PRESS',
    type: 'internal_link',
    link: '',
  },
  {
    id: 'search',
    label: 'SEARCH',
    type: 'action',
  },
  {
    id: 'cart',
    label: 'CART',
    type: 'action',
  },
];

export const footerNavItems: NavItem[] = [
  {
    id: v4(),
    label: 'ABOUT',
    type: 'internal_link',
    link: '',
  },
  {
    id: v4(),
    label: 'VALUES',
    type: 'internal_link',
    link: '',
  },
  {
    id: v4(),
    label: 'CONTACT',
    type: 'internal_link',
    link: '',
  },
  {
    id: v4(),
    label: 'POLICIES',
    type: 'internal_link',
    link: '',
  },
  {
    id: v4(),
    label: 'STOCKLIST',
    type: 'internal_link',
    link: '',
  },
  {
    id: v4(),
    label: 'INSTAGRAM',
    type: 'external_link',
    link: '',
  },
];
