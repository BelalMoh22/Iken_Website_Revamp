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
    children: [
      { label: "Product Discovery", href: "/#services" },
      { label: "Web Development", href: "/#services" },
      { label: "Mobile Applications", href: "/#services" },
      { label: "E-Commerce", href: "/#services" },
      { label: "Team as a Service", href: "/#models" },
      { label: "Development Partnership", href: "/#models" },
    ],
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
      { label: "Why IKEN", href: "/#why-iken" },
      { label: "Models", href: "/#models" },
      { label: "FAQ", href: "/faq" },
    ],
  }
];
