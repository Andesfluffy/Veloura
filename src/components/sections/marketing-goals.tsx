"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

export function MarketingGoals() {
  const goals = [
    {
      title: "Freedom of Time",
      description: "Work remotely, set your own schedule, and prioritize what matters most to you.",
      icon: "⏱️",
    },
    {
      title: "Location Independence",
      description: "Run your business from anywhere while exploring the world on your terms.",
      icon: "🌍",
    },
    {
      title: "Financial Growth",
      description: "Build scalable income streams through proven digital business systems.",
      icon: "📈",
    },
    {
      title: "Personal Development",
      description: "Master modern skills while growing alongside ambitious entrepreneurs.",
      icon: "🎯",
    },
  ];

  return (
    <section className="relative bg-black py-24">
      {/* Background effects */}
      <div className="bg-noise absolute inset-0 opacity-[0.02]" />
      <div className="bg-gradient-gold-diagonal absolute top-0 left-0 h-[600px] w-[600px] opacity-10 blur-[100px]" />

      {/* Content */}
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left column - Visual */}
          <div className="relative aspect-square">
            <div className="from-gold-900/20 absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br to-black">
              <div className="absolute inset-0 bg-[url('/shapes/gold-slash.svg')] bg-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="from-gold-500/10 to-gold-500/5 border-gold-500/10 relative flex h-32 w-32 items-center justify-center rounded-xl border bg-gradient-to-br p-6 backdrop-blur-xl">
                  <span className="text-4xl">🎯</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2"
              >
                <div className="from-gold-500/10 to-gold-500/5 border-gold-500/10 relative flex h-40 w-40 items-center justify-center rounded-xl border bg-gradient-to-br p-6 backdrop-blur-xl">
                  <span className="text-5xl">💫</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase">
                Marketing Goals
              </h2>
              <h3 className="from-gold-300 via-gold-400 to-gold-300 bg-gradient-to-r bg-clip-text font-serif text-4xl leading-[1.2] text-transparent md:text-5xl">
                Your Journey to Digital Freedom
              </h3>
              <p className="text-gold-100/80 max-w-xl text-lg leading-relaxed">
                We empower ambitious individuals to break free from traditional employment and build
                thriving online businesses aligned with their dreams.
              </p>
            </motion.div>

            {/* Goals grid */}
            <div className="grid grid-cols-2 gap-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="from-gold-500/5 border-gold-500/10 relative rounded-xl border bg-gradient-to-br to-transparent p-6 backdrop-blur-sm"
                >
                  <span className="mb-4 block text-3xl">{goal.icon}</span>
                  <h4 className="text-gold-300 mb-2 text-lg font-medium">{goal.title}</h4>
                  <p className="text-gold-100/60 text-sm leading-relaxed">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
