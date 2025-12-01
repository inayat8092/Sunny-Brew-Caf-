export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Coffee' | 'Pastry' | 'Sandwich';
  image?: string;
}

export interface NavLink {
  name: string;
  href: string;
}