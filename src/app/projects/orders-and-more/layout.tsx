import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Orders & More Use Case - Enterprise B2B Commerce OS | IKEN Technology",
  description:
    "Discover how Orders & More centralizes orders, vendors, pricing, payments, shipping, analytics, and storefront operations in one enterprise-grade B2B commerce platform.",
  openGraph: {
    title: "Orders & More Use Case - Enterprise B2B Commerce OS",
    description:
      "An enterprise B2B commerce operating system for wholesalers, retailers, distributors, and merchant teams.",
    url: "https://ikentech.netlify.app/projects/orders-and-more",
  },
  twitter: {
    title: "Orders & More Use Case - Enterprise B2B Commerce OS",
    description:
      "One platform for total B2B commerce control across orders, pricing, logistics, analytics, and storefronts.",
  },
};

export default function OrdersAndMoreLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
