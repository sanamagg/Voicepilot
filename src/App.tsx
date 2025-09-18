import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PhoneCall, Mic, FileUp, Sparkles, Rocket, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Warm Business-Friendly Theme Tokens
const theme = {
  primary: "#E07A5F", // Terracotta
  secondary: "#F4F1DE", // Soft Beige
  accent: "#81B29A", // Sage Green
  dark: "#3D3D3D", // Charcoal text
  light: "#FFFFFF",
};

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 md:px-6 ${className}`}>{children}</section>
);

export default function Landing() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]" style={{
      // CSS variables to make theming easy
      // (Tailwind utilities + inline CSS variables)
      //@ts-ignore
      "--bg": theme.secondary,
      //@ts-ignore
      "--text": theme.dark,
      //@ts-ignore
      "--primary": theme.primary,
      //@ts-ignore
      "--accent": theme.accent,
    }}>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300;1,400&family=Open+Sans:wght@400;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />

      {/* Global font stack */}
      <style>{`
        :root { --radius: 16px; }
        .font-heading { font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }
        .font-body { font-family: 'Open Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }
        .font-quote { font-family: 'Merriweather', Georgia, 'Times New Roman', serif; }
      `}</style>

      {/* Top nav */}
      <nav className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl" style={{ background: theme.primary }} />
            <span className="font-heading text-lg md:text-xl" style={{ color: theme.primary }}>VoicePilot</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#benefits" className="hover:opacity-80">Benefits</a>
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#testimonials" className="hover:opacity-80">Testimonials</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </div>
          <Button asChild className="rounded-2xl px-4 md:px-5" style={{ background: theme.primary, color: theme.light }}>
            <a href="#cta">Get Started</a>
          </Button>
        </Section>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full blur-3xl opacity-30" style={{ background: theme.accent }} />
          <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full blur-3xl opacity-30" style={{ background: theme.primary }} />
        </div>
        <Section className="flex flex-col items-center text-center py-14 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl leading-tight max-w-3xl"
            style={{ color: theme.primary }}
          >
            Turn Your Business Info into a Smart Voice Agent — Instantly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-body text-base md:text-lg text-black/70 mt-4 max-w-2xl"
          >
            Engage customers 24/7, capture the right leads, and drive actions—perfect for micro & small businesses in India and the USA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-8 flex items-center gap-3"
          >
            <Button size="lg" className="rounded-2xl px-6 py-6 text-base shadow-md hover:shadow-lg" style={{ background: theme.primary, color: theme.light }}>
              Create My Voice Agent
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl px-6 py-6 text-base border-2" style={{ borderColor: theme.primary, color: theme.primary }}>
              See How It Works
            </Button>
          </motion.div>
          <div className="mt-6 flex items-center gap-4 text-xs md:text-sm text-black/60 font-body">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> No code needed</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> 5‑minute setup</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Multilingual-ready</div>
          </div>
        </Section>
      </header>

      {/* Benefits */}
      <main>
        <Section id="benefits" className="py-12 md:py-20">
          <h2 className="font-heading text-2xl md:text-4xl mb-8" style={{ color: theme.primary }}>Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              icon: <Sparkles className="h-6 w-6" />, title: "Instant setup", desc: "Upload a PDF, brochure, document, voice note, or a message with store timings, offers, products, and services." },
              { icon: <Mic className="h-6 w-6" />, title: "24/7 voice agent", desc: "Answers FAQs, shares your offers, captures contact details, and nudges customers to act." },
              { icon: <Rocket className="h-6 w-6" />, title: "Lead focus & nurturing", desc: "Segments high-intent customers so you can prioritize follow‑ups and grow conversions." }]
            .map((b, i) => (
              <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: "#00000010" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-heading" style={{ color: theme.primary }}>
                    {b.icon}
                    {b.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-black/70">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section id="how" className="py-12 md:py-20">
          <h2 className="font-heading text-2xl md:text-4xl mb-8" style={{ color: theme.primary }}>How it works</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <FileUp className="h-6 w-6" />, title: "Upload your info", blurb: "PDF, brochure, document, or voice note." },
              { icon: <Mic className="h-6 w-6" />, title: "AI creates agent", blurb: "A friendly voice assistant tailored to your business." },
              { icon: <PhoneCall className="h-6 w-6" />, title: "Engage customers", blurb: "Answers questions, collects details, drives actions." },
              { icon: <Rocket className="h-6 w-6" />, title: "See focused leads", blurb: "View and nurture high‑intent customers first." },
            ].map((step, i) => (
              <li key={i} className="relative">
                <div className="rounded-2xl p-5 bg-white shadow-sm border border-black/5">
                  <div className="h-10 w-10 rounded-xl mb-3 flex items-center justify-center" style={{ background: theme.accent }}>
                    {step.icon}
                  </div>
                  <h3 className="font-heading text-lg" style={{ color: theme.primary }}>{step.title}</h3>
                  <p className="font-body text-sm text-black/70 mt-1">{step.blurb}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials" className="py-12 md:py-20">
          <h2 className="font-heading text-2xl md:text-4xl mb-8" style={{ color: theme.primary }}>Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: "I used to spend hours answering the same questions — now my voice agent does it all. Sales have doubled!", name: "Priya S.", role: "Boutique Owner, India" },
              { quote: "So easy to set up. I uploaded my offers and in minutes, customers could talk to my business anytime!", name: "John M.", role: "Café Owner, USA" },
            ].map((t, i) => (
              <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <p className="font-quote text-base italic text-black/80">"{t.quote}"</p>
                  <div className="mt-4 font-body text-sm text-black/70">— {t.name}, {t.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="py-12 md:py-20">
          <h2 className="font-heading text-2xl md:text-4xl mb-8" style={{ color: theme.primary }}>FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "How long does setup take?", a: "Under 5 minutes — upload your details and you're live." },
              { q: "Does it work in India & USA?", a: "Yes. It's designed for micro & small businesses in both regions." },
              { q: "Do I need technical skills?", a: "No. If you can send a voice note, you can set this up." },
              { q: "What if my timings or offers change?", a: "Upload the updated info — your agent refreshes automatically." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5 bg-white shadow-sm border border-black/5">
                <h3 className="font-heading text-lg" style={{ color: theme.primary }}>{item.q}</h3>
                <p className="font-body text-sm text-black/70 mt-1">{item.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA / Footer */}
        <Section id="cta" className="py-12 md:py-20">
          <div className="rounded-3xl p-8 md:p-12 shadow-md border border-black/5 text-center" style={{ background: theme.light }}>
            <h2 className="font-heading text-2xl md:text-4xl" style={{ color: theme.primary }}>Ready to Grow Your Business?</h2>
            <p className="font-body text-base text-black/70 mt-2 max-w-2xl mx-auto">Turn your business details into a 24/7 voice agent that drives actions and surfaces high‑intent leads.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="rounded-2xl px-6 py-6 text-base shadow-md hover:shadow-lg" style={{ background: theme.primary, color: theme.light }}>
                Get Started Now
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-6 py-6 text-base border-2" style={{ borderColor: theme.primary, color: theme.primary }}>
                Try a Demo
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mt-16 border-t border-black/10">
        <Section className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-body text-sm text-black/60">© {new Date().getFullYear()} VoicePilot • Designed for small businesses</div>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:opacity-80" href="#">Privacy</a>
            <a className="hover:opacity-80" href="#">Terms</a>
            <a className="hover:opacity-80" href="#">Support</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}