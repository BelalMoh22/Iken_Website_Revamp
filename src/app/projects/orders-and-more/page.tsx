"use client";
/* eslint-disable react/no-unescaped-entities */
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

import { Header } from "../../sections/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ContactSection } from "../../sections/ContactSection";


export default function OrdersAndMoreUseCasePage() {
  const reduce = useReducedMotion();

  const fadeUp = useMemo(
    () => (delay = 0) => ({
      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(4px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: reduce ? 0.2 : 0.55, ease: "easeOut" as const, delay },
      },
    }),
    [reduce],
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <motion.div
          animate={reduce ? undefined : { opacity: [0.35, 0.5, 0.35], scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-[var(--color-brand-blue-glow)] blur-[140px]"
        />
        <motion.div
          animate={reduce ? undefined : { opacity: [0.3, 0.45, 0.3], scale: [1, 1.04, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[var(--color-brand-cyan-glow)] blur-[140px]"
        />
      </div>

      <Header />

      <main className="relative z-10">
        <section id="hero" className="relative overflow-hidden border-b border-[var(--color-border-light)] py-12 sm:py-16 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-brand-blue-glow),transparent)]" />
          <div className="site-container">
            <Breadcrumbs />
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div initial="hidden" animate="visible" variants={fadeUp(0)}>
                <motion.p variants={fadeUp(0)} className="mb-2 text-4xl font-black sm:text-5xl lg:text-6xl">
                  Orders and More
                </motion.p>
                <motion.p variants={fadeUp(0.05)} className="mb-2 text-2xl font-semibold text-[var(--color-text-secondary)]">
                  Your All-in-One B2B E-Commerce Platform
                </motion.p>
                <motion.p variants={fadeUp(0.08)} className="mb-6 text-xl font-bold text-[var(--color-text-brand)]">
                  Total Control. One Platform.
                </motion.p>
                <motion.div variants={fadeUp(0.12)} className="flex flex-wrap gap-3">
                  <a href="#final-cta" className="rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-px hover:shadow-xl">Book Your Live Demo</a>
                  <a href="#control" className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-6 py-2.5 text-sm font-bold text-[var(--color-text-primary)] transition-all hover:-translate-y-px hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]">Learn More</a>
                </motion.div>
              </motion.div>
              <motion.div initial="hidden" animate="visible" variants={fadeUp(0.2)} className="rounded-3xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)]/80 p-6 shadow-2xl backdrop-blur-md">
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Orders", "Vendors", "Pricing"].map((i) => (
                    <motion.div key={i} whileHover={{ y: -2 }} className="rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] p-3 text-xs font-semibold text-[var(--color-text-secondary)]">{i}</motion.div>
                  ))}
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {["Shipping", "Analytics"].map((i) => (
                    <motion.div key={i} whileHover={{ y: -2 }} className="rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] p-3 text-xs font-semibold text-[var(--color-text-secondary)]">{i}</motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="challenge" className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <h2 className="mb-3 text-3xl font-bold sm:text-4xl">Fragmented Tools Hold You Back</h2>
            <p className="mb-8 max-w-3xl text-[var(--color-text-secondary)]">E-commerce companies across Egypt and the Middle East face a persistent challenge: managing their operations across multiple disconnected systems.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Higher Operating Costs", "Multiple subscriptions, licenses, and integration fees add up quickly"],
                ["Limited Visibility", "Data scattered across systems makes real-time decisions impossible"],
                ["Slower Growth", "Manual processes and disconnected workflows limit scaling potential"],
                ["Integration Headaches", "Custom APIs and middleware create technical debt and maintenance burden"],
              ].map(([title, desc], i) => (
                <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(i * 0.05)} whileHover={{ y: -4 }} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><p className="mb-2 font-bold">{title}</p><p className="text-sm text-[var(--color-text-secondary)]">{desc}</p></motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="control" className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <h2 className="mb-3 text-3xl font-bold sm:text-4xl">One Platform, Complete Control</h2>
            <p className="mb-2 text-[var(--color-text-secondary)]">Orders and More is a modern B2B e-commerce platform specifically engineered for wholesalers, retailers, and enterprise merchants who demand operational excellence without compromise.</p>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-text-brand)]">Built for Scale</p>
            <p className="mb-4 text-[var(--color-text-secondary)]">Whether you're managing 500 SKUs or 50,000, Orders and More provides the infrastructure you need. Our modular architecture adapts to your business requirements, growing seamlessly as your operations expand.</p>
            <ul className="mb-3 space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>End-to-end operational control from a single dashboard</li>
              <li>Modular design allows you to activate only what you need</li>
              <li>Enterprise-grade security and reliability</li>
            </ul>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-text-brand)]">Proven Performance</p>
            <p className="text-[var(--color-text-secondary)]">Leading brands in retail, food & beverage, and wholesale distribution trust Orders and More to power their digital commerce operations across Egypt and the region.</p>
          </div>
        </section>

        <section id="features" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-3 text-3xl font-bold sm:text-4xl">Comprehensive Feature Set</h2><p className="mb-8 text-[var(--color-text-secondary)]">Orders and More delivers eight integrated modules that work together seamlessly, providing complete control over your B2B e-commerce operations.</p><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Vendor & Catalog Management","Centralize product data, manage thousands of SKUs, and maintain sophisticated category hierarchies with ease."],["Order Management","Track orders in real-time, coordinate multiple vendors, and automate order processing."],["Pricing & Discounts Engine","Configure tiered pricing, volume discounts, and promotional rules that update dynamically across all channels."],["Payment & Checkout","Accept payments globally with integrated gateways and Tas-compliant invoicing."],["Delivery & Shipping Management","Automate fulfillment with real-time tracking, multi-zone delivery rules, and logistics provider integration."],["UI Manager","Launch beautiful e-commerce websites and mobile apps with predefined themes or custom development."],["Analytics & Reporting","Monitor performance with real-time dashboards, vendor KPIs, and exportable reports."],["Customer & Support Portal","Track order status in real-time and send automated notifications to keep customers informed throughout the fulfillment process."]].map(([t,d],i)=><motion.article key={t as string} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.04)} whileHover={{y:-4}} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><h3 className="mb-2 text-sm font-bold">{t as string}</h3><p className="text-xs text-[var(--color-text-secondary)]">{d as string}</p></motion.article>)}</div></div></section>

        <section id="vendor-catalog" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-2 text-3xl font-bold sm:text-4xl">Vendor & Catalog Management</h2><p className="mb-2 text-xl font-semibold text-[var(--color-text-secondary)]">Centralized Product Intelligence</p><p className="mb-3 text-[var(--color-text-secondary)]">Managing large product catalogs shouldn't require armies of data entry staff. Orders and More provides sophisticated tools to handle product information at scale, with features specifically designed for B2B complexity.</p><ul className="space-y-2 text-sm text-[var(--color-text-secondary)]"><li><b>Bulk Operations</b> Upload and update thousands of SKUs simultaneously using Excel imports or API integrations. No manual entry required.</li><li><b>Advanced Hierarchies</b> Build sophisticated category structures with unlimited depth. Support multiple classification schemes for different business units.</li><li><b>Global Ready</b> Native support for multiple languages and currencies. Display products appropriately for each market without duplicating data.</li><li><b>Real-Time Sync</b> Inventory levels update instantly across all channels. Prevent overselling and maintain accurate stock visibility.</li></ul><p className="mt-4 rounded-xl border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] p-4 text-sm font-semibold text-[var(--color-text-secondary)]">Pro Tip: Our advanced catalog management has helped retailers reduce product data errors by over 80% while cutting catalog maintenance time in half.</p></div></section>

        <section id="order-management" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-3 text-3xl font-bold sm:text-4xl">Order Management</h2><div className="grid gap-4 md:grid-cols-2">{[["1","Real-Time Order Tracking","Monitor every order from placement through fulfillment with detailed status updates. Buyers and vendors see the same information simultaneously, eliminating confusion and support calls."],["2","Multi-Vendor Coordination","When a single order contains items from multiple suppliers, Orders and More automatically splits and routes sub-orders to the appropriate vendors while maintaining unified tracking for the buyer."],["3","Bulk Processing Power","Process hundreds of orders efficiently with fulfillment, and invoicing. Perfect for high-volume operations where speed matters."],["4","Automated Documentation","Generate compliant invoices and delivery notes automatically. Export data seamlessly to accounting and ERP systems."]].map(([n,t,d],i)=><motion.div key={t as string} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.05)} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><p className="mb-2 text-xs font-bold text-[var(--color-text-brand)]">{n as string}</p><h3 className="mb-2 text-lg font-bold">{t as string}</h3><p className="text-sm text-[var(--color-text-secondary)]">{d as string}</p></motion.div>)}</div></div></section>

        <section id="pricing-engine" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-2 text-3xl font-bold sm:text-4xl">Pricing & Discounts Engine</h2><p className="mb-2 text-xl font-semibold text-[var(--color-text-secondary)]">Sophisticated Pricing Logic</p><div className="grid gap-4 md:grid-cols-3">{[["Tiered Pricing","Set custom price lists by customer segment, individual account, or vendor. Create as many pricing tiers as your business requires."],["Volume Discounts","Reward larger purchases automatically with quantity-based pricing rules. Configure breakpoints, discount percentages, and promotional codes."],["Dynamic Updates","Price changes propagate instantly across all channels4website, mobile app, and API. No delays, no inconsistencies."]].map(([t,d],i)=><motion.div key={t as string} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.05)} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><h3 className="mb-2 text-lg font-bold">{t as string}</h3><p className="text-sm text-[var(--color-text-secondary)]">{d as string}</p></motion.div>)}</div></div></section>

        <section id="payment-checkout" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-2 text-3xl font-bold sm:text-4xl">Payment & Checkout</h2><p className="mb-2 text-xl font-semibold text-[var(--color-text-secondary)]">Flexible Payment Processing</p><ul className="space-y-2 text-sm text-[var(--color-text-secondary)]"><li>Connect with leading payment gateways including Fawry, PayMob, and international providers</li><li>Accept credit cards, bank transfers, and digital wallets</li><li>Multi-currency support for cross-border transactions</li></ul><p className="mt-4 rounded-xl border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] p-4 text-sm font-semibold text-[var(--color-text-secondary)]">Built for Egypt: Full compliance with Egyptian regulations and seamless integration with local payment providers ensures smooth operations for Egyptian businesses.</p></div></section>

        <section id="shipping" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-2 text-3xl font-bold sm:text-4xl">Delivery & Shipping Management</h2><p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-text-brand)]">NEW: Complete logistics control from a single platform</p><div className="grid gap-4 md:grid-cols-2">{[["01","Real-Time Shipment Tracking","Monitor deliveries from warehouse to doorstep with live status updates and GPS tracking integration."],["02","Logistics Provider Integration","Pre-built connections with Aramex, Bosta, and other regional carriers. Add your preferred providers easily."],["03","Fleet Management","Support for both in-house delivery teams and outsourced logistics. Optimize routes and track driver performance."],["04","Smart Delivery Rules","Configure multi-zone delivery with custom scheduling, blackout dates, and automated fee calculation based on distance, weight, and urgency."]].map(([n,t,d],i)=><motion.div key={t as string} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.04)} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><p className="mb-2 text-xs font-bold text-[var(--color-text-brand)]">{n as string}</p><h3 className="mb-2 text-lg font-bold">{t as string}</h3><p className="text-sm text-[var(--color-text-secondary)]">{d as string}</p></motion.div>)}</div><p className="mt-5 text-sm italic text-[var(--color-text-secondary)]">"Delivery management is often the bottleneck in e-commerce operations. Orders and More eliminates this constraint completely."</p></div></section>

        <section id="ui-manager" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-2 text-3xl font-bold sm:text-4xl">UI Manager: Your Digital Storefront</h2><p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-text-brand)]">NEW: Launch beautiful e-commerce experiences without separate development projects</p><div className="grid gap-4 lg:grid-cols-2"><div className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><h3 className="mb-2 text-lg font-bold">Predefined Themes</h3><ul className="space-y-2 text-sm text-[var(--color-text-secondary)]"><li>Launch your website and mobile apps from one platform</li><li>Full synchronization with backend systems4catalog, pricing, inventory, and shipping</li><li>Customizable branding, colors, and layouts</li><li>No technical expertise required for basic customization</li></ul></div><div className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><h3 className="mb-2 text-lg font-bold">Custom Theme Development</h3><ul className="space-y-2 text-sm text-[var(--color-text-secondary)]"><li>Bespoke designs that perfectly match your brand identity</li><li>Advanced functionality tailored to your business processes</li><li>Custom domain support and app store publishing</li><li>Ongoing optimization and enhancement</li></ul></div></div></div></section>

        <section id="analytics" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-2 text-3xl font-bold sm:text-4xl">Analytics & Reporting</h2><p className="mb-2 text-xl font-semibold text-[var(--color-text-secondary)]">Data-Driven Decision Making</p><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[["Real-Time Dashboards","Monitor critical metrics as they happen. Sales performance, order volumes, inventory levels, and customer behavior4all updated live."],["Vendor Performance","Track fulfillment speed, order accuracy, and customer satisfaction by vendor. Identify top performers and areas for improvement."],["Inventory Intelligence","Understand stock turnover, identify slow-moving items, and optimize reorder points based on historical patterns."],["Seamless Exports","Export reports directly to your ERP, accounting systems, or spreadsheets. Compatible with standard formats and APIs."]].map(([t,d],i)=><motion.div key={t as string} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.04)} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><h3 className="mb-2 text-lg font-bold">{t as string}</h3><p className="text-sm text-[var(--color-text-secondary)]">{d as string}</p></motion.div>)}</div></div></section>

        <section id="how-it-works" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-2 text-3xl font-bold sm:text-4xl">How It Works: Six Steps to Success</h2><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[["1","Onboarding","Quick vendor and buyer account setup with guided configuration. Import existing customer and vendor data or start fresh."],["2","Catalog Setup","Bulk upload your product catalog with all associated data4pricing, images, descriptions, and inventory. Our team assists with data mapping and validation."],["3","Orders & Checkout","Configure your order workflow, payment methods, and checkout process. Test the buyer journey to ensure smooth operations."],["4","Shipping & Delivery","Integrate logistics providers, define delivery zones, and set up automated fulfillment rules. Test end-to-end delivery tracking."],["5","Storefront Launch","Choose your theme or work with our team on custom development. Configure branding, launch your website and mobile apps."],["6","Analytics & Growth","Monitor performance with real-time insights. Continuously optimize based on data. Scale operations as your business grows."]].map(([n,t,d],i)=><motion.div key={t as string} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.03)} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><p className="mb-2 text-xs font-bold text-[var(--color-text-brand)]">{n as string}</p><h3 className="mb-2 text-lg font-bold">{t as string}</h3><p className="text-sm text-[var(--color-text-secondary)]">{d as string}</p></motion.div>)}</div></div></section>

        <section id="pricing-options" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-2 text-3xl font-bold sm:text-4xl">Flexible Pricing Options</h2><div className="grid gap-4 lg:grid-cols-3">{[["Annual Cloud Subscription","$5,000","per year",["All eight platform modules","Delivery & shipping management","UI Manager with predefined themes","Cloud hosting and infrastructure","Automatic updates and new features","SLA-guaranteed uptime","Standard support and maintenance"]],["One-Time License (Module-Based Pricing)","Custom Quote","Single Upfront Investment - no recurring license fees",["Perpetual license for all modules","Self-hosted deployment","Full source code access","Initial setup and configuration","90 days of post-launch support","Optional: 25% annual support fee for ongoing updates, maintenance, and technical support"]],["Enterprise Plan (multiple vendors - B2B)","Custom Quote","For large-scale B2B and multi-vendor commerce operations",["Designed for companies managing a large number of stores and vendors.","Includes everything in Option 1 with enterprise-grade scalability.","Advanced infrastructure support, high availability, and performance optimization.","Tailored pricing and deployment based on your business model."]]].map(([n,v,p,items],i)=><motion.div key={n as string} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.04)} whileHover={{y:-4}} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6"><p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text-brand)]">{n as string}</p><p className="mt-2 text-3xl font-black">{v as string}</p><p className="mt-1 text-xs text-[var(--color-text-muted)]">{p as string}</p><ul className="mt-4 space-y-2 text-sm text-[var(--color-text-secondary)]">{(items as string[]).map((it)=><li key={it}>{it}</li>)}</ul></motion.div>)}</div></div></section>

        <section id="taas" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-2 text-3xl font-bold sm:text-4xl">Team-as-a-Service for E-Commerce</h2><div className="mb-6 grid gap-4 sm:grid-cols-3">{[["3x","Faster Delivery"],["40%","Cost Savings"],["100%","Scalable"]].map(([v,t],i)=><motion.div key={t as string} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.06)} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5 text-center"><p className="text-3xl font-black text-[var(--color-text-brand)]">{v as string}</p><p className="text-sm font-bold">{t as string}</p></motion.div>)}</div><div className="grid gap-4 md:grid-cols-3">{[["1","Monthly Retainer"],["2","Milestone-Based"],["3","Hybrid Model"]].map(([n,t],i)=><motion.div key={t as string} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.04)} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"><p className="mb-2 text-xs font-bold text-[var(--color-text-brand)]">{n as string}</p><h3 className="text-lg font-bold">{t as string}</h3></motion.div>)}</div></div></section>

        <section id="why-om" className="border-b border-[var(--color-border-light)] py-12 lg:py-20"><div className="site-container"><h2 className="mb-3 text-3xl font-bold sm:text-4xl">Why Orders and More?</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{["Proven Success","Modular Architecture","Integrated Delivery & Storefront","Lower Total Cost","IKEN Technology Expertise"].map((t,i)=><motion.div key={t} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp(i*0.04)} whileHover={{y:-4}} className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5 text-sm font-bold">{t}</motion.div>)}</div><p className="mt-6 text-sm italic text-[var(--color-text-secondary)]">"Orders and More isn’t just a platform4it’s a partnership. The IKEN team understands our business and continuously helps us optimize our operations."</p></div></section>

        <section id="final-cta" className="border-b border-[var(--color-border-light)] py-12 sm:py-16 lg:py-28"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><h2 className="mb-3 text-3xl font-black sm:text-5xl">Ready to Transform Your E-Commerce Operations?</h2><p className="mb-2 text-xl font-semibold text-[var(--color-text-secondary)]">Let’s scale your business together</p><a href="/contact" className="inline-flex rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-px hover:shadow-xl">Book Your Live Demo</a><div className="mt-8 grid gap-3 sm:grid-cols-3 text-left"><div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-brand)]">Email</p><p className="text-sm text-[var(--color-text-secondary)]">mustafa@iken.tech</p></div><div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-brand)]">Website</p><p className="text-sm text-[var(--color-text-secondary)]">www.iken.tech</p></div><div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-brand)]">Phone</p><p className="text-sm text-[var(--color-text-secondary)]">+20 10 5054 9994</p></div></div></div></section>

        <section id="thank-you" className="py-12 sm:py-16"><div className="site-container text-center"><h2 className="mb-2 text-3xl font-black">Thank You</h2><p className="mb-3 text-[var(--color-text-secondary)]">We look forward to partnering with you on your e-commerce journey</p><p className="font-semibold">Orders and More</p><p className="text-[var(--color-text-brand)]">Total Control. One Platform.</p><p className="mt-2 text-sm text-[var(--color-text-secondary)]">www.iken.tech | mustafa@iken.tech | +20 10 5054 9994</p></div></section>
      </main>

      <ContactSection />
    </div>
  );
}



