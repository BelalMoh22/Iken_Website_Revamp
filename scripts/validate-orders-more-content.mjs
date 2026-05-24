import { readFileSync } from "node:fs";

const file = readFileSync("src/app/projects/orders-and-more/page.tsx", "utf8");

const required = [
  "Orders and More",
  "Your All-in-One B2B E-Commerce Platform",
  "Total Control. One Platform.",
  "Fragmented Tools Hold You Back",
  "One Platform, Complete Control",
  "Comprehensive Feature Set",
  "Vendor & Catalog Management",
  "Order Management",
  "Pricing & Discounts Engine",
  "Payment & Checkout",
  "Delivery & Shipping Management",
  "UI Manager: Your Digital Storefront",
  "Analytics & Reporting",
  "How It Works: Six Steps to Success",
  "Flexible Pricing Options",
  "Team-as-a-Service for E-Commerce",
  "Why Orders and More?",
  "Ready to Transform Your E-Commerce Operations?",
  "500 SKUs",
  "50,000",
  "80%",
  "$5,000",
  "90 days",
  "25%",
  "3x",
  "40%",
  "100%",
  "Fawry",
  "PayMob",
  "Aramex",
  "Bosta",
  "mustafa@iken.tech",
  "www.iken.tech",
  "+20 10 5054 9994",
];

const missing = required.filter((s) => !file.includes(s));

if (missing.length > 0) {
  console.error("Missing required strings:");
  missing.forEach((m) => console.error(`- ${m}`));
  process.exit(1);
}

console.log("Orders and More content validation passed.");
