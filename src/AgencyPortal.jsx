// src/AgencyPortal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  CheckCircle2,
  ArrowUpRight,
  Zap,
  Sparkles,
  Globe,
  Target,
  Calendar,
  ShieldCheck,
  Menu,
  X,
  Star,
  Dumbbell,
  Stethoscope,
  Wrench,
  Scissors,
  Users,
  TrendingUp,
  Clock,
  ChevronRight,
  Code2,
  MapPin,
  Bot,
  Search,
  Rocket,
  Phone,
} from "lucide-react";

export default function AgencyPortal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const WHATSAPP_URL = "https://wa.me/919876543210?text=Hello%20Codecraft%20Media,%20I%20want%20to%20digitally%20transform%20my%20business!";

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Why Us", href: "#comparison" },
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-emerald-400" />,
      title: "Digital Presence",
      tagline: "Custom Web Architectures",
      description: "Ultra-fast, pixel-perfect React landing pages built for conversion. No drag-and-drop clutter. Just precision-crafted digital storefronts that load in under 1 second.",
      features: ["Custom React Architecture", "Mobile-First Design", "0.8s Average Load Time", "SEO Optimized"],
      borderColor: "hover:border-emerald-500/30",
    },
    {
      icon: <Search className="w-8 h-8 text-blue-400" />,
      title: "Local SEO & Maps",
      tagline: "Google Business Dominance",
      description: "We own your local search real estate. From Google Business Profile setup to 1st-page ranking strategies that put your competitors 3 clicks behind.",
      features: ["Google Business Setup", "1st Page Ranking", "Local Citation Building", "Review Stack System"],
      borderColor: "hover:border-blue-500/30",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: "WhatsApp Lead Funnels",
      tagline: "Instant Direct Conversations",
      description: "Kill the boring contact form. Let clients message you directly on WhatsApp with one tap. Automated greeting sequences keep leads warm 24/7.",
      features: ["One-Tap WhatsApp CTA", "Automated Response Flows", "Lead Tagging & Scoring", "Instant Notifications"],
      borderColor: "hover:border-green-500/30",
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      title: "Automated Bookings",
      tagline: "Smart Appointment Systems",
      description: "Convert profile visitors directly into scheduled appointments without back-and-forth messaging. Real-time calendar synchronization.",
      features: ["Real-Time Calendar Sync", "Instant Reminders", "No-Show Protection", "Zero Friction UX"],
      borderColor: "hover:border-purple-500/30",
    },
  ];

  const targetIndustries = [
    { icon: <Dumbbell className="w-6 h-6 text-emerald-400" />, label: "Gyms & Trainers" },
    { icon: <Scissors className="w-6 h-6 text-emerald-400" />, label: "Salons & Spas" },
    { icon: <Stethoscope className="w-6 h-6 text-emerald-400" />, label: "Health Clinics" },
    { icon: <Wrench className="w-6 h-6 text-emerald-400" />, label: "Home Services" },
  ];

  const comparisons = [
    { feature: "Development Speed", traditional: "3 to 6 Weeks", codecraft: "48 to 72 Hours" },
    { feature: "Technology Stack", traditional: "Slow WordPress / Drag & Drop", codecraft: "Custom Ultra-Fast React Engine" },
    { feature: "Lead Capture System", traditional: "Static Contact Forms (High Dropoff)", codecraft: "Direct One-Tap WhatsApp Funnel" },
    { feature: "SEO Performance", traditional: "Generic Plugins", codecraft: "Custom Local SEO & Google Maps Dominance" },
    { feature: "Maintenance Cost", traditional: "High Monthly Retainers", codecraft: "Zero Technical Overhead" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black font-sans">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-wider">
            <Code2 className="w-8 h-8 text-emerald-400" />
            <span>CODECRAFT<span className="text-emerald-400">.MEDIA</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="text-zinc-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20">
            <MessageCircle className="w-5 h-5" />
            <span>Get Digital Audit</span>
          </a>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-zinc-400 hover:text-white">
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-emerald-400 py-2">
                {link.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-emerald-500 text-black font-bold py-3 rounded-full mt-2">
              <MessageCircle className="w-5 h-5" />
              <span>Get Digital Audit</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" /> Next-Gen Agency Architecture
        </div>

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight mb-8">
          We Turn Offline Businesses Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">High-Ticket Digital Engines</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          High-performance React web systems, local SEO domination, and instant WhatsApp conversion funnels tailored for modern businesses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-xl shadow-emerald-500/25">
            <MessageCircle className="w-6 h-6" />
            <span>Book Strategy Call via WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Target Industries */}
      <section id="industries" className="py-12 border-y border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-zinc-500 uppercase tracking-widest text-xs font-semibold mb-8">Tailored Solutions For Growth-Minded Niches</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetIndustries.map((ind, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                {ind.icon}
                <span className="font-medium text-zinc-300">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Precision Engineering Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Built from ground up to convert local traffic into high-value paying clients.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className={`p-8 rounded-2xl bg-zinc-900/40 border border-white/10 transition-all duration-300 ${srv.borderColor}`}>
              <div className="mb-6">{srv.icon}</div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">{srv.tagline}</span>
              <h3 className="text-2xl font-bold mt-1 mb-4">{srv.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{srv.description}</p>
              <ul className="grid grid-cols-2 gap-3 border-t border-white/5 pt-6">
                {srv.features.map((ft, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{ft}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Codecraft Media?</h2>
          <p className="text-zinc-400">See how custom code outpaces outdated web development practices.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-zinc-400 text-sm uppercase">
                <th className="py-4 px-6">Feature</th>
                <th className="py-4 px-6 text-zinc-500">Traditional Agencies</th>
                <th className="py-4 px-6 text-emerald-400 bg-emerald-500/5 rounded-t-xl">Codecraft Engine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisons.map((row, idx) => (
                <tr key={idx}>
                  <td className="py-4 px-6 font-semibold text-zinc-200">{row.feature}</td>
                  <td className="py-4 px-6 text-zinc-500">{row.traditional}</td>
                  <td className="py-4 px-6 font-bold text-emerald-400 bg-emerald-500/5">{row.codecraft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-20 px-6 border-t border-white/10 text-center bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready To Scale Your Business Digitally?</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Claim your free digital audit and custom high-converting web preview today.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-xl shadow-emerald-500/20">
            <MessageCircle className="w-6 h-6" />
            <span>Connect On WhatsApp</span>
          </a>
          <p className="text-zinc-600 text-xs mt-12">© {new Date().getFullYear()} Codecraft Media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
