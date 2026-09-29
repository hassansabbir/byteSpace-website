export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface NavigationConfig {
  mainNav: NavItem[];
  authNav: {
    login: NavItem;
    register: NavItem;
  };
  footerNav: {
    title: string;
    items: NavItem[];
  }[];
}
