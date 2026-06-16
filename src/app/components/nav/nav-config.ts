export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export const navigationData: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Work",
    children: [
      { label: "Results We Delivered", href: "/#work" },
      { label: "Sectors", href: "/sectors" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", href: "/#about" },
      { label: "Clients", href: "/#clients" },
      { label: "FAQ", href: "/faq" },
    ],
  }
];
