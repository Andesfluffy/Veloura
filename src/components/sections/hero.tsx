"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="fixed inset-0 z-50 bg-[#080808] overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-[0.04] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('/shapes/geometric-grid.svg')] bg-center bg-[length:32px_32px] opacity-[0.07]" />
      <div 
        className="absolute right-[-20%] top-[-20%] h-[1200px] w-[1200px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(233,211,180,0.08) 0%, rgba(233,211,180,0) 70%)",
          filter: "blur(60px)",
        }}
      />
      <div 
        className="absolute left-[-10%] bottom-[-10%] h-[800px] w-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0) 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/20 via-[#080808]/90 to-[#080808]" />

      {/* Content */}
      <Container className="relative h-screen py-4 flex items-center">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center max-h-full">
          {/* Left column - Main content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="inline-block py-1 px-3 text-xs tracking-wider uppercase rounded-full bg-emerald-950/60 text-emerald-300/90 border border-emerald-800/40">
                    Premium Digital Education
                  </span>
                </motion.div>
                <h1 className="font-serif text-[3.5rem] leading-[1.1] sm:text-7xl md:text-8xl tracking-tight">
                  <span 
                    className="block bg-gradient-to-r from-[#E6D5B8] via-[#F1E6D1] to-[#E6D5B8] bg-clip-text text-transparent"
                    style={{
                      textShadow: "0 0 80px rgba(233,211,180,0.15)"
                    }}
                  >
                    Digital Freedom
                  </span>
                  <span 
                    className="block mt-2 bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-300 bg-clip-text text-transparent"
                    style={{
                      textShadow: "0 0 80px rgba(16,185,129,0.15)"
                    }}
                  >
                    Blueprint
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-[#E6D5B8]/70 max-w-xl leading-relaxed">
                Master the modern digital economy. Build a sustainable online business. Create the lifestyle you deserve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => window.location.href = '/apply'}
                  variant="primary"
                  size="lg"
                  className="min-w-[200px] bg-gradient-to-r from-[#E6D5B8] via-[#F1E6D1] to-[#E6D5B8] hover:opacity-90 text-black font-medium"
                >
                  Start Your Journey
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => window.location.href = '/how-it-works'}
                  variant="secondary"
                  size="lg"
                  className="min-w-[200px] border border-[#E6D5B8]/20 hover:border-[#E6D5B8]/40 bg-[#E6D5B8]/5"
                >
                  Explore the Blueprint
                </Button>
              </motion.div>
            </motion.div>

            {/* Key features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-16"
            >
              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: "Expert Mentors", value: "100+" },
                  { label: "Success Rate", value: "85%" },
                  { label: "Member Revenue", value: "$50M+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E6D5B8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-6 rounded-2xl border border-[#E6D5B8]/10 bg-gradient-to-br from-[#E6D5B8]/[0.03] to-transparent backdrop-blur-sm">
                      <div className="font-serif text-3xl bg-gradient-to-r from-[#E6D5B8] to-[#F1E6D1] bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#E6D5B8]/60 mt-2 tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-[#080808] to-black border border-[#E6D5B8]/[0.03]">
              <div className="absolute inset-0 bg-[url('/textures/lava-gold.png')] bg-cover opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              
              {/* Premium design elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative h-full w-full"
              >
                {/* Geometric patterns */}
                <div className="absolute top-[10%] right-[10%] w-32 h-32 rounded-full border border-[#E6D5B8]/10" />
                <div className="absolute top-[8%] right-[8%] w-40 h-40 rounded-full border border-[#E6D5B8]/[0.06]" />
                <div className="absolute bottom-[15%] left-[10%] w-24 h-24 rounded-full border border-emerald-500/10" />
                
                {/* Premium elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-[#E6D5B8]/[0.08] to-transparent backdrop-blur-sm border border-[#E6D5B8]/10">
                    <div className="absolute inset-0 bg-noise opacity-20" />
                    <div className="relative h-full w-full p-8 flex items-center justify-center">
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#E6D5B8]/[0.08] to-transparent flex items-center justify-center">
                        <span className="text-6xl filter drop-shadow-[0_0_10px_rgba(233,211,180,0.2)]">✨</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
                </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2"
              >
                <div className="relative w-32 h-32 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 backdrop-blur-xl border border-gold-500/10 p-6 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}