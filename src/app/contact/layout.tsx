import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us | IKEN Technology",
  description:
    "Ready to start your next project? Get in touch with IKEN Technology. We reply within 24 hours with a realistic execution plan.",
  openGraph: {
    title: "Contact Us | IKEN Technology",
    description:
      "Ready to start your next project? Get in touch with IKEN Technology. We reply within 24 hours with a realistic execution plan.",
    url: "https://ikentech.netlify.app/contact",
  },
  twitter: {
    title: "Contact Us | IKEN Technology",
    description:
      "Ready to start your next project? Get in touch with IKEN Technology. We reply within 24 hours.",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
