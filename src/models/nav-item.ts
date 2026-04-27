export interface LinkNavItem {
  id: string;
  label: string;
  link: string;
  type: 'internal_link' | 'external_link';
}

export type ActionId = 'search' | 'cart';

export interface ActionNavItem {
  id: ActionId;
  label: string;
  type: 'action';
}

export type NavItem = LinkNavItem | ActionNavItem;
