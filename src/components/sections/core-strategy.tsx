"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

export function CoreStrategy() {
  return (
    <section className="relative min-h-screen bg-black py-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-gradient-emerald-diagonal opacity-10 blur-[100px]" />
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] bg-gradient-gold opacity-10 blur-[80px]" />
      
      {/* Content */}
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Left column - Main content */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-sm font-medium tracking-[0.2em] text-emerald-400 uppercase">Core Strategy</h2>
              <h3 className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-300 bg-clip-text text-transparent leading-[1.2]">
                The Digital Freedom Blueprint
              </h3>
              <p className="text-lg text-emerald-100/80 leading-relaxed max-w-xl">
                A next-generation platform empowering individuals to build sustainable online businesses through mentorship, automation, and modern digital marketing.
              </p>
            </motion.div>

            {/* Key points */}
            <div className="grid gap-6 mt-12">
              {[
                {
                  title: "Proven Framework",
                  description: "Access a globally tested online business system with clear pathways to success."
                },
                {
                  title: "Expert Mentorship",
                  description: "Learn directly from entrepreneurs who've achieved measurable success."
                },
                {
                  title: "Digital Mastery",
                  description: "Master modern marketing, automation, and brand building skills."
                },
              ].map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-emerald-500/50 before:to-transparent"
                >
                  <h4 className="font-medium text-emerald-300">{point.title}</h4>
                  <p className="mt-1 text-emerald-100/60">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column - Visual elements */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-black rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/shapes/geometric-grid.svg')] bg-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "85%", label: "Success Rate" },
                  { value: "24/7", label: "Global Support" },
                  { value: "100+", label: "Expert Mentors" },
                  { value: "$50M+", label: "Member Revenue" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-serif text-3xl bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-emerald-300/60 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}