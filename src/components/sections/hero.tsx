"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const navLinks = ["Create Your Rules", "Execute and Control", "Enjoy and Customize"];

const stats = [
  { value: "12k+", label: "Members Liberated" },
  { value: "47", label: "Countries Activated" },
  { value: "92%", label: "Launch Success Rate" },
];

const pillarCopy = [
  "Mentorship from founders who've scaled globally.",
  "Automation blueprints to reclaim time and location freedom.",
  "Story frameworks that turn your journey into magnetic influence.",
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0b0806] text-[#f8ead4]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,215,160,0.24),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(155,106,52,0.18),transparent_68%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(at_50%_140%,rgba(255,201,120,0.38),rgba(18,11,4,0.92)_60%,rgba(255,201,120,0.2)_92%)] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0906] via-[#15100c] to-[#070503]" />
        <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20 mix-blend-soft-light" />
      </div>

      <Container className="relative z-10 flex h-dvh min-h-[720px] w-full flex-col px-6 pb-10 pt-8 sm:px-10">
        <header className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.55em] text-[#f3d8b0]/70">
          <span className="flex items-center gap-2 text-[#f8ead4]/85">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#f3d8b0]/20 bg-[#15100c]/80 font-serif text-[0.65rem]">
              V
            </span>
            Veloura
          </span>
          <nav className="hidden gap-8 text-[0.6rem] tracking-[0.48em] text-[#f3d8b0]/60 sm:flex">
            {navLinks.map((link) => (
              <span key={link} className="uppercase">
                {link}
              </span>
            ))}
          </nav>
        </header>

        <main className="flex flex-1 items-center justify-center">
          <div className="relative flex w-full max-w-6xl flex-col items-center gap-12 rounded-[44px] border border-[#f6d8aa]/10 bg-[rgba(16,12,8,0.72)] px-8 pb-14 pt-12 shadow-[0_40px_140px_rgba(0,0,0,0.65)] backdrop-blur-[26px] sm:px-14">
            <div className="pointer-events-none absolute -top-48 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,204,140,0.5),transparent_70%)] blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(121,78,35,0.55),transparent_72%)] blur-[120px]" />

            <div className="flex w-full flex-col items-center gap-8 text-center">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.6em] text-[#f6d8aa]/80">
                Veloura · Digital Freedom Blueprint
              </span>
              <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-[#fdf3e4] sm:text-5xl md:text-6xl">
                Build a sovereign digital business that works anywhere you do
              </h1>
              <p className="max-w-2xl text-sm text-[#f5e3c7]/70 sm:text-base">
                Veloura is the molten-gold pathway for entrepreneurs determined to replace ordinary careers with flexible, high-impact digital ventures. We fuse elite mentorship, automation, and narrative mastery so you can grow wealth on your own terms.
              </p>
            </div>

            <div className="grid w-full gap-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
              <div className="hidden origin-center -rotate-90 items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.58em] text-[#f3d8b0]/60 lg:flex">
                Unlock creative intelligence
              </div>

              <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[34px] border border-[#f5e3c7]/25 bg-gradient-to-br from-[#f7e9d6] via-[#f0dfc8] to-[#f9e8d4] shadow-[0_36px_120px_rgba(15,10,6,0.45)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_32%,rgba(210,148,94,0.4),transparent_52%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(146,97,56,0.3),transparent_62%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent)]" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-10 py-6 text-[0.58rem] uppercase tracking-[0.5em] text-[#4c3320]/70">
                    <span>Veloura Studio</span>
                    <div className="flex gap-6 text-[#9b6a34]/70">
                      {navLinks.map((link) => (
                        <span key={link}>{link}</span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-10 grid grid-cols-2 gap-6">
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-[0.7rem] uppercase tracking-[0.45em] text-[#9b6a34]/75">Signature Systems</p>
                        <p className="mt-4 max-w-xs text-sm font-medium text-[#3d2818]">
                          Veloura redefines digital workflows, empowering you to scale premium offers, protect what matters, and unlock your revenue potential.
                        </p>
                      </div>
                      <p className="text-[0.68rem] uppercase tracking-[0.48em] text-[#aa7944]/70">Guided Launch Pods</p>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-[#fbe6cf] via-[#d7a56d] to-[#9b6538] shadow-[0_18px_45px_rgba(90,60,30,0.45)]">
                        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#f6d2a2] via-[#b7783f] to-[#2f1708] opacity-80" />
                      </div>
                      <div className="absolute inset-0">
                        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d8ba94]/50" />
                        <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-[#d8ba94]/50" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-2 w-[82%] rounded-full bg-gradient-to-r from-[#2b1d12] via-[#3d2a18] to-[#1c130c] shadow-[0_12px_30px_rgba(0,0,0,0.6)]" />
              </div>

              <div className="flex flex-col gap-5 text-left text-sm text-[#f5e3c7]/80">
                {pillarCopy.map((copy) => (
                  <p key={copy}>{copy}</p>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Button
                  onClick={() => (window.location.href = "/apply")}
                  size="lg"
                  className="min-w-[220px] border border-[#f6d8aa]/30 bg-[#f0c884] text-[#1b120a] shadow-[0_24px_80px_rgba(248,201,120,0.45)] hover:bg-[#ffd9a1]"
                >
                  Start Your Freedom Studio
                </Button>
                <Button
                  onClick={() => (window.location.href = "/experience")}
                  variant="secondary"
                  size="lg"
                  className="min-w-[220px] border border-[#f6d8aa]/30 bg-transparent text-[#f6d8aa]/80 hover:bg-[#f6d8aa]/10"
                >
                  Explore the Blueprint
                </Button>
              </div>

              <div className="grid gap-6 text-center sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-2">
                    <span className="text-3xl font-semibold text-[#fbd49a]">{stat.value}</span>
                    <p className="text-[0.58rem] uppercase tracking-[0.52em] text-[#f5e3c7]/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </Container>
    </section>
  );
}
