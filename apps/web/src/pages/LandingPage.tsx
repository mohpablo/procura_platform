import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  LineChart,
  Network,
  Route as RouteIcon,
  ScanSearch,
  Sparkles,
  Timer,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "200K+", label: "RESTAURANTS & CAFÉS" },
  { value: "1.5B", label: "EGP MONTHLY VOLUME" },
  { value: "15K", label: "EGP AVG. SPEND / MONTH" },
  { value: "100%", label: "VERIFIED SUPPLIERS" },
];

const problems = [
  "Finding reliable suppliers takes days",
  "Prices swing wildly between vendors",
  "Orders live in phone calls and WhatsApp",
  "Comparing products is nearly impossible",
  "Purchases fragmented across suppliers",
  "Zero transparency, zero tracking",
];

const features = [
  {
    icon: BadgeCheck,
    title: "Verified suppliers",
    body: "Every supplier is vetted before listing, so sourcing starts with trust instead of guesswork.",
  },
  {
    icon: ScanSearch,
    title: "Instant price comparison",
    body: "Line up products side by side across suppliers and see the real cost before you commit.",
  },
  {
    icon: Boxes,
    title: "Multi-supplier ordering",
    body: "Build one basket across your whole supplier list and send it out in a single flow.",
  },
  {
    icon: Timer,
    title: "Live order tracking",
    body: "Follow every order from confirmation to delivery without a single follow-up call.",
  },
  {
    icon: BarChart3,
    title: "Procurement history",
    body: "A permanent digital record of what you bought, from whom, and at what price.",
  },
  {
    icon: Sparkles,
    title: "AI recommendations",
    body: "Predictive purchasing and smart supplier suggestions built on your own buying patterns.",
  },
];

const steps = [
  {
    n: "01",
    title: "Search",
    body: "Find verified suppliers by category, location, and rating.",
  },
  {
    n: "02",
    title: "Compare",
    body: "Put products and prices side by side in seconds.",
  },
  {
    n: "03",
    title: "Order",
    body: "Purchase from multiple suppliers in one checkout flow.",
  },
  {
    n: "04",
    title: "Track",
    body: "Monitor deliveries and keep a full procurement record.",
  },
];

const marquee = [
  "Verified suppliers",
  "Transparent pricing",
  "Centralized procurement",
  "Faster purchasing",
  "Digital records",
  "Logistics optimization",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-outline-variant/60 bg-surface/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-360 items-center justify-between px-4 md:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative flex size-8 items-center justify-center rounded-lg bg-primary">
              <Network className="size-4 text-on-primary" strokeWidth={2.2} />
            </span>
            <span className="text-title-md tracking-tight font-semibold">
              Procura
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {["Platform", "How it works", "Suppliers", "Vision"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {l}
              </a>
            ))}
          </div>
          <Link
            to="/Auth"
            className="rounded-lg bg-primary px-4 py-2 text-body-md font-semibold text-on-primary transition-transform duration-200 hover:scale-[1.03]"
          >
            Sign in
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 -right-32 size-152 rounded-full opacity-40 blur-3xl animate-drift"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary-container, #e0f2fe), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute top-40 -left-40 size-128 rounded-full opacity-50 blur-3xl animate-drift"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary-fixed, #dbeafe), transparent 70%)",
            animationDelay: "3s",
          }}
        />

        <div className="relative mx-auto grid max-w-360 items-center gap-12 px-4 pt-16 pb-20 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-24 lg:pb-28">
          <div>
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full rounded-full bg-secondary animate-pulse-ring" />
                <span className="relative inline-flex size-1.5 rounded-full bg-secondary" />
              </span>
              <span className="text-label-sm uppercase text-on-surface-variant font-medium">
                Now launching in Cairo &amp; Giza
              </span>
            </div>

            <h1 className="animate-rise animate-delay-100 mt-6 text-[40px] leading-11.5 font-bold tracking-[-0.02em] md:text-display-lg">
              Procurement for restaurants,
              <br className="hidden sm:block" />{" "}
              <span className="relative inline-block">
                <span className="relative z-10">rebuilt as one platform.</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-secondary-container/70" />
              </span>
            </h1>

            <p className="animate-rise animate-delay-200 mt-6 max-w-xl text-body-lg text-on-surface-variant">
              Procura connects restaurants and cafés with verified suppliers —
              compare prices, order across vendors, and track every purchase
              from one intelligent dashboard.
            </p>

            <div className="animate-rise animate-delay-300 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-body-lg font-semibold text-on-primary transition-transform duration-200 hover:scale-[1.03]"
              >
                Start sourcing
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#suppliers"
                className="inline-flex items-center gap-2 rounded-lg border border-outline px-6 py-3.5 text-body-lg font-semibold text-on-surface transition-colors hover:bg-surface-container"
              >
                Join as a supplier
              </a>
            </div>

            <dl className="animate-rise animate-delay-500 mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-outline-variant pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-headline-lg font-bold">{s.value}</dt>
                  <dd className="mt-1 text-label-sm uppercase text-on-surface-variant font-medium">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-rise animate-delay-300 relative">
            <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-[0_24px_60px_-24px_rgba(19,27,46,0.35)]">
              <img
                src="network-hero.jpg"
                alt="Connected network of suppliers, warehouses and delivery routes"
                width={1408}
                height={1008}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-4 shadow-[0_16px_40px_-20px_rgba(19,27,46,0.4)] sm:block">
              <p className="text-label-sm uppercase text-on-surface-variant font-medium">
                Best price found
              </p>
              <p className="mt-1 text-title-md font-bold">
                −18%{" "}
                <span className="text-body-md font-normal text-secondary">
                  vs. last order
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-outline-variant bg-surface-container-lowest py-4">
          <div className="flex w-max animate-marquee gap-10 pr-10">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-3 text-label-sm uppercase text-on-surface-variant font-medium"
              >
                <span className="size-1.5 rounded-full bg-secondary" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-360 px-4 py-20 md:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-label-sm uppercase text-secondary font-semibold">
              The problem
            </p>
            <h2 className="mt-4 text-headline-lg font-bold">
              Buying supplies still runs on phone calls and guesswork.
            </h2>
            <p className="mt-4 max-w-md text-body-lg text-on-surface-variant">
              Manual procurement wastes hours every week, inflates costs, and
              leaves owners without visibility into what they actually spend.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((p) => (
              <div
                key={p}
                className="h-full rounded-lg border border-outline-variant bg-surface-container-lowest p-5 transition-all duration-300 hover:-translate-y-1 hover:border-outline"
              >
                <p className="text-body-lg font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="platform"
        className="bg-surface-container-lowest py-20 lg:py-28"
      >
        <div className="mx-auto max-w-360 px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="text-label-sm uppercase text-secondary font-semibold">
              The platform
            </p>
            <h2 className="mt-4 text-headline-lg font-bold">
              Everything procurement needs, in one clean workspace.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group h-full rounded-xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface-container"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary-container transition-colors duration-300 group-hover:bg-secondary">
                  <f.icon className="size-5 text-on-primary" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-title-md font-bold">{f.title}</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-360 px-4 py-20 md:px-8 lg:py-28"
      >
        <div className="max-w-2xl">
          <p className="text-label-sm uppercase text-secondary font-semibold">
            How it works
          </p>
          <h2 className="mt-4 text-headline-lg font-bold">
            Four steps from search to delivery.
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-outline-variant bg-outline-variant sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="h-full bg-surface-container-lowest p-7 transition-colors duration-300 hover:bg-surface-container-low"
            >
              <span className="text-label-sm uppercase text-on-surface-variant font-medium">
                {s.n}
              </span>
              <h3 className="mt-4 text-title-md font-bold">{s.title}</h3>
              <p className="mt-2 text-body-md text-on-surface-variant">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Value split */}
      <section
        id="suppliers"
        className="mx-auto max-w-360 px-4 pb-20 md:px-8 lg:pb-28"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="h-full rounded-xl bg-primary-container p-8 lg:p-12">
            <p className="text-label-sm uppercase text-on-primary-container font-semibold">
              For buyers
            </p>
            <h3 className="mt-4 text-headline-lg text-inverse-on-surface font-bold">
              Spend less time sourcing and less money doing it.
            </h3>
            <ul className="mt-8 space-y-4">
              {[
                { icon: Wallet, t: "Reduce procurement costs" },
                { icon: Timer, t: "Save hours every single week" },
                { icon: LineChart, t: "Full visibility into spending" },
              ].map((x) => (
                <li
                  key={x.t}
                  className="flex items-center gap-3 text-body-lg text-primary-fixed"
                >
                  <x.icon className="size-5 text-secondary-fixed-dim" />
                  {x.t}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full rounded-xl border border-outline-variant bg-secondary-container p-8 lg:p-12">
            <p className="text-label-sm uppercase text-on-secondary-container font-semibold">
              For suppliers
            </p>
            <h3 className="mt-4 text-headline-lg text-on-secondary-fixed font-bold">
              Reach thousands of businesses without a sales team.
            </h3>
            <ul className="mt-8 space-y-4">
              {[
                { icon: Boxes, t: "Digitize catalog management" },
                { icon: BarChart3, t: "Grow sales with new buyers" },
                { icon: ScanSearch, t: "Insights on what buyers want" },
              ].map((x) => (
                <li
                  key={x.t}
                  className="flex items-center gap-3 text-body-lg text-on-secondary-fixed"
                >
                  <x.icon className="size-5 text-on-secondary-fixed-variant" />
                  {x.t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        id="vision"
        className="bg-surface-container-lowest py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-360 gap-12 px-4 md:px-8 lg:grid-cols-2">
          <div>
            <p className="text-label-sm uppercase text-secondary font-semibold">
              Logistics vision
            </p>
            <h2 className="mt-4 text-headline-lg font-bold">
              One delivery network instead of a dozen separate trucks.
            </h2>
            <p className="mt-4 text-body-lg text-on-surface-variant">
              Procura will consolidate orders from multiple suppliers into a
              single coordinated delivery — cutting cost, time, traffic, and
              operational chaos in one move.
            </p>
            <a
              href="#cta"
              className="group mt-8 inline-flex items-center gap-2 text-body-lg font-semibold text-on-surface"
            >
              See where we&apos;re heading
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: RouteIcon,
                t: "Route planning",
                d: "Consolidated multi-stop pickups.",
              },
              {
                icon: Network,
                t: "Supplier mesh",
                d: "One network, many vendors.",
              },
              {
                icon: Sparkles,
                t: "Predictive buying",
                d: "Reorder before you run out.",
              },
              {
                icon: LineChart,
                t: "Spend analytics",
                d: "Category-level cost insight.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="h-full rounded-xl border border-outline-variant p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-low"
              >
                <x.icon className="size-5 text-secondary" />
                <h3 className="mt-4 text-title-md font-bold">{x.t}</h3>
                <p className="mt-1 text-body-md text-on-surface-variant">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline-variant">
        <div className="mx-auto flex max-w-360 flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary">
              <Network className="size-3.5 text-on-primary" />
            </span>
            <span className="text-body-lg font-semibold">Procura</span>
          </div>
          <p className="text-body-md text-on-surface-variant">
            B2B procurement marketplace · Cairo &amp; Giza
          </p>
        </div>
      </footer>
    </div>
  );
}
