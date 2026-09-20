import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight, Zap, Palette, Rocket, Check, Apple, Play, Scissors, Star, Skull, Zap as Bolt } from "lucide-react";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import showcase4 from "@/assets/showcase-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const chips = [
  "A fitness tracker with streaks",
  "SaaS dashboard with charts",
  "Recipe app with AI meal plans",
  "E-commerce storefront",
];

function Index() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground" style={{ background: "var(--gradient-hero)" }}>
      {/* Grunge overlays: halftone + noise */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.15 0.02 60) 1px, transparent 1.2px)",
          backgroundSize: "6px 6px",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Torn tape strips */}
      <div className="pointer-events-none absolute left-8 top-4 z-20 h-6 w-40 rotate-[-6deg] bg-[var(--brand-pink)]/70 shadow-md" />
      <div className="pointer-events-none absolute right-10 top-24 z-20 h-5 w-28 rotate-[8deg] bg-yellow-300/80" />

      {/* Nav */}
      <header className="sticky top-0 z-50 px-4 py-3">
        <nav className="mx-auto flex max-w-5xl items-center justify-between border-[3px] border-foreground bg-[var(--brand-paper)] px-4 py-2.5" style={{ boxShadow: "var(--shadow-glow)" }}>
          <div className="flex items-center gap-2">
            <div className="grid size-9 -rotate-6 place-items-center border-[3px] border-foreground bg-[var(--brand-pink)]">
              <Skull className="size-5 text-foreground" />
            </div>
            <span className="text-2xl font-black uppercase tracking-tighter italic">NOVA/zine</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-bold uppercase underline decoration-2 underline-offset-4 hover:text-[var(--brand-pink)]">Features</a>
            <a href="#showcase" className="text-sm font-bold uppercase underline decoration-2 underline-offset-4 hover:text-[var(--brand-pink)]">Showcase</a>
            <a href="#pricing" className="text-sm font-bold uppercase underline decoration-2 underline-offset-4 hover:text-[var(--brand-pink)]">Pricing</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden text-sm font-bold uppercase hover:text-[var(--brand-pink)] sm:block">Sign in</button>
            <button className="border-[3px] border-foreground bg-foreground px-4 py-1.5 text-sm font-black uppercase tracking-wide text-background hover:bg-[var(--brand-pink)] hover:text-foreground">
              Get started »
            </button>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative mx-auto max-w-3xl px-6 pt-16 pb-24 text-center sm:pt-24">
          <div className="mb-6 inline-flex -rotate-2 items-center gap-2 border-[3px] border-foreground bg-[var(--brand-pink)] px-3 py-1 text-xs font-black uppercase tracking-widest text-foreground">
            <Bolt className="size-3 fill-foreground" />
            Ship to the App Store in ONE prompt
          </div>
          <h1 className="text-balance text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl md:text-8xl">
            <span className="inline-block -rotate-2">BUILD</span>{" "}
            <span className="inline-block rotate-1 bg-foreground px-2 text-background">APPS</span>{" "}
            <span className="inline-block italic">at the</span>{" "}
            <span className="inline-block -rotate-3 bg-[var(--brand-pink)] px-2 font-serif italic">speed</span>{" "}
            <span className="inline-block rotate-2 underline decoration-[6px] decoration-[var(--brand-pink)] underline-offset-4">of thought!!</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl border-l-[6px] border-foreground bg-[var(--brand-paper)] px-4 py-2 text-left text-base font-medium sm:text-lg">
            <span className="font-black uppercase">Nova</span> rips a prompt into a production-ready app. Loud. Fast. iOS, Android, web — <em className="bg-yellow-300 px-1">no rules.</em>
          </p>

          {/* Prompt box */}
          <div className="relative mx-auto mt-10 max-w-2xl rotate-[-1deg]">
            <div className="absolute -inset-2 -z-10 rotate-[2deg] bg-[var(--brand-pink)]" />
            <div className="relative border-[3px] border-foreground bg-[var(--brand-paper)] p-4" style={{ boxShadow: "var(--shadow-glow)" }}>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="SCREAM YOUR APP IDEA HERE..."
                className="h-28 w-full resize-none bg-transparent font-mono text-base outline-none placeholder:text-muted-foreground"
              />
              <div className="flex items-center justify-between border-t-[3px] border-dashed border-foreground pt-3">
                <span className="text-xs font-bold uppercase tracking-widest">// NOVA_AI ⚡ v.1977</span>
                <button className="inline-flex items-center gap-2 border-[3px] border-foreground bg-foreground px-4 py-2 text-sm font-black uppercase text-background transition active:translate-x-1 active:translate-y-1 hover:bg-[var(--brand-pink)] hover:text-foreground">
                  Generate!! <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {chips.map((c, i) => (
              <button key={c} onClick={() => setPrompt(c)} className={`border-[2px] border-foreground bg-[var(--brand-paper)] px-3 py-1.5 text-xs font-bold uppercase transition hover:bg-[var(--brand-pink)] ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Store badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="inline-flex -rotate-2 items-center gap-3 border-[3px] border-foreground bg-foreground px-5 py-3 transition hover:bg-[var(--brand-pink)] hover:text-foreground" style={{ boxShadow: "var(--shadow-glow)" }}>
              <Apple className="size-6 fill-current" />
              <span className="text-left">
                <span className="block text-[10px] uppercase opacity-80">Download on the</span>
                <span className="block text-sm font-black uppercase leading-tight">App Store</span>
              </span>
            </a>
            <a href="#" className="inline-flex rotate-2 items-center gap-3 border-[3px] border-foreground bg-foreground px-5 py-3 transition hover:bg-[var(--brand-pink)] hover:text-foreground" style={{ boxShadow: "var(--shadow-glow)" }}>
              <Play className="size-6 fill-current" />
              <span className="text-left">
                <span className="block text-[10px] uppercase opacity-80">Get it on</span>
                <span className="block text-sm font-black uppercase leading-tight">Google Play</span>
              </span>
            </a>
          </div>
        </section>

        {/* Showcase */}
        <section id="showcase" className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between border-b-[4px] border-foreground pb-4">
            <div>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter sm:text-5xl">Built // With // Nova</h2>
            <p className="mt-2 font-mono text-sm uppercase">{">>"} real apps. shipped this week. no filler.</p>
            </div>
            <span className="hidden -rotate-3 border-[3px] border-foreground bg-[var(--brand-pink)] px-2 py-1 text-xs font-black uppercase sm:block">LIVE!!</span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: showcase1, name: "FLUX/dash", h: 720, r: "-rotate-2" },
              { src: showcase2, name: "PULSE.fit", h: 512, r: "rotate-3" },
              { src: showcase3, name: "CHECKOUT!!", h: 512, r: "-rotate-1" },
              { src: showcase4, name: "KIND ANLTX", h: 720, r: "rotate-2" },
            ].map((s, i) => (
              <div key={s.name} className={`group relative overflow-hidden border-[3px] border-foreground bg-[var(--brand-paper)] p-2 ${s.r} ${i % 2 ? "translate-y-6" : ""}`} style={{ boxShadow: "var(--shadow-glow)" }}>
                <img src={s.src} alt={s.name} loading="lazy" width={512} height={s.h} className="h-full w-full object-cover grayscale contrast-125 transition group-hover:grayscale-0" />
                <div className="absolute left-2 top-2 rotate-[-8deg] bg-[var(--brand-pink)] px-2 py-0.5 text-[10px] font-black uppercase">#{i + 1}</div>
                <div className="absolute inset-x-2 bottom-2 border-t-[3px] border-foreground bg-[var(--brand-paper)] px-2 py-1">
                  <span className="font-mono text-xs font-black uppercase">{s.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marquee strip */}
        <section className="my-8 -rotate-1 border-y-[4px] border-foreground bg-[var(--brand-pink)] py-3 overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap font-black uppercase italic tracking-tighter text-2xl">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                Anti-Boring Software <Star className="inline size-6 fill-foreground" /> Ship it Loud <Scissors className="inline size-6" /> Prompt // Punch // Publish <Star className="inline size-6 fill-foreground" />
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">Idea → <span className="bg-foreground px-2 text-background">STORE</span> in 3 rips</h2>
            <p className="mx-auto mt-3 max-w-xl font-mono text-sm uppercase">design. code. deploy. we do the boring parts.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Zap, title: "SHIP IN MINUTES", body: "Prompt to production faster than your coffee cools.", r: "-rotate-1" },
              { icon: Palette, title: "LOUD BY DEFAULT", body: "Every app looks like it has something to say.", r: "rotate-1" },
              { icon: Rocket, title: "DEPLOY ANYWHERE", body: "One click. iOS. Android. Web. Custom domain. Done.", r: "-rotate-1" },
            ].map(({ icon: Icon, title, body, r }, i) => (
              <div key={title} className={`group relative border-[3px] border-foreground bg-[var(--brand-paper)] p-6 ${r}`} style={{ boxShadow: "var(--shadow-glow)" }}>
                <div className="absolute -top-3 -left-3 grid size-10 place-items-center rounded-full border-[3px] border-foreground bg-[var(--brand-pink)] text-sm font-black">{String(i + 1).padStart(2, "0")}</div>
                <div className="mb-4 inline-grid size-11 place-items-center border-[3px] border-foreground bg-foreground">
                  <Icon className="size-5 text-background" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
                <p className="mt-2 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-4xl px-6 py-24">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter sm:text-5xl">Pay // What // You // Play</h2>
            <p className="mt-3 font-mono text-sm uppercase">start free. go pro. no gatekeepers.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="-rotate-1 border-[3px] border-foreground bg-[var(--brand-paper)] p-8" style={{ boxShadow: "var(--shadow-glow)" }}>
              <div className="inline-block bg-foreground px-2 py-0.5 text-xs font-black uppercase tracking-widest text-background">Personal</div>
              <div className="mt-3 text-5xl font-black uppercase">FREE.99</div>
              <ul className="mt-6 space-y-3 text-sm">
                {["3 projects", "Community support", "Standard export"].map((f) => (
                  <li key={f} className="flex items-center gap-2 font-medium"><Check className="size-4" /> {f}</li>
                ))}
              </ul>
              <button className="mt-8 w-full border-[3px] border-foreground bg-[var(--brand-paper)] py-3 text-sm font-black uppercase hover:bg-foreground hover:text-background">Start free</button>
            </div>
            <div className="relative rotate-1 border-[3px] border-foreground bg-foreground p-8 text-background" style={{ boxShadow: "6px 6px 0 0 var(--brand-pink)" }}>
              <div className="absolute -top-3 right-6 rotate-3 border-[3px] border-foreground bg-[var(--brand-pink)] px-3 py-1 text-[10px] font-black uppercase text-foreground">★ POPULAR ★</div>
              <div className="inline-block bg-[var(--brand-pink)] px-2 py-0.5 text-xs font-black uppercase tracking-widest text-foreground">Pro</div>
              <div className="mt-3 text-5xl font-black uppercase">$24<span className="text-base font-medium opacity-70">/mo</span></div>
              <ul className="mt-6 space-y-3 text-sm">
                {["Unlimited projects", "Custom domains", "App Store & Google Play publishing", "Priority AI capacity"].map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="size-4 text-[var(--brand-pink)]" /> {f}</li>
                ))}
              </ul>
              <button className="mt-8 w-full border-[3px] border-[var(--brand-pink)] bg-[var(--brand-pink)] py-3 text-sm font-black uppercase text-foreground hover:bg-background">Go Pro »</button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <div className="relative overflow-hidden border-[4px] border-foreground bg-[var(--brand-paper)] p-10 text-center" style={{ boxShadow: "var(--shadow-glow)" }}>
            <div className="absolute -right-8 -top-8 size-32 rotate-12 bg-[var(--brand-pink)]" />
            <h2 className="relative text-4xl font-black uppercase italic tracking-tighter sm:text-6xl">Your next app<br/>is ONE PROMPT away.</h2>
            <p className="relative mx-auto mt-3 max-w-lg font-mono text-sm uppercase">join the makers rioting on the app store with nova.</p>
            <button className="relative mt-8 inline-flex items-center gap-2 border-[3px] border-foreground bg-foreground px-6 py-3 text-sm font-black uppercase text-background hover:bg-[var(--brand-pink)] hover:text-foreground">
              Start the riot <ArrowRight className="size-4" />
            </button>
          </div>
        </section>

        <footer className="border-t-[4px] border-foreground bg-foreground py-10 text-background">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <Skull className="size-5" />
              <span className="text-sm font-black uppercase tracking-widest">Nova/zine</span>
            </div>
            <p className="font-mono text-xs uppercase opacity-80">© 2026 nova labs // xerox &amp; ship anywhere</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
