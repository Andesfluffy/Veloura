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
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      <div className="absolute left-0 top-0 h-[600px] w-[600px] bg-gradient-gold-diagonal opacity-10 blur-[100px]" />
      
      {/* Content */}
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left column - Visual */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 to-black rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/shapes/gold-slash.svg')] bg-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative w-32 h-32 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 backdrop-blur-xl border border-gold-500/10 p-6 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
              >
                <div className="relative w-40 h-40 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 backdrop-blur-xl border border-gold-500/10 p-6 flex items-center justify-center">
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
              <h2 className="text-sm font-medium tracking-[0.2em] text-gold-400 uppercase">Marketing Goals</h2>
              <h3 className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent leading-[1.2]">
                Your Journey to Digital Freedom
              </h3>
              <p className="text-lg text-gold-100/80 leading-relaxed max-w-xl">
                We empower ambitious individuals to break free from traditional employment and build thriving online businesses aligned with their dreams.
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
                  className="relative p-6 rounded-xl bg-gradient-to-br from-gold-500/5 to-transparent border border-gold-500/10 backdrop-blur-sm"
                >
                  <span className="text-3xl mb-4 block">{goal.icon}</span>
                  <h4 className="text-lg font-medium text-gold-300 mb-2">
                    {goal.title}
                  </h4>
                  <p className="text-sm text-gold-100/60 leading-relaxed">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}