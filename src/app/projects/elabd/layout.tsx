import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "IKEN × ELAbd Case Study — TaaS Partnership | IKEN Technology",
  description:
    "How IKEN Technology became ELAbd Patisserie's dedicated development arm through a TaaS model — delivering 45% faster time-to-market and 30% order volume increase.",
  openGraph: {
    title: "IKEN × ELAbd Case Study — TaaS Partnership",
    description:
      "How IKEN Technology became ELAbd Patisserie's dedicated development arm through a TaaS model — delivering 45% faster time-to-market and 30% order volume increase.",
    url: "https://ikentech.netlify.app/projects/elabd",
  },
  twitter: {
    title: "IKEN × ELAbd Case Study — TaaS Partnership",
    description:
      "How IKEN Technology became ELAbd Patisserie's dedicated development arm — delivering 45% faster time-to-market.",
  },
};

export default function ElAbdLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
