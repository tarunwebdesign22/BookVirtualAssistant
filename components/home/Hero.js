"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Star,
  Building2,
  TrendingUp,
  MessageSquare,
  Calendar,
  BarChart3,
  CheckCircle2,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import Badge from "../Badge";
import CTAButton from "../CTAButton";
import GlassCard from "../GlassCard";
import StatsCard from "../StatsCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { value: "300+", label: "Virtual Employees", className: "absolute -left-2 top-8 z-20 sm:-left-6 sm:top-4" },
  { value: "100+", label: "Business Domains", className: "absolute -right-2 top-16 z-20 sm:-right-8 sm:top-8" },
  { value: "15+", label: "Years Experience", className: "absolute -left-4 bottom-24 z-20 sm:-left-10 sm:bottom-20" },
  { value: "98%", label: "Client Satisfaction", className: "absolute -right-4 bottom-8 z-20 sm:-right-6 sm:bottom-4" },
];

function FloatingParticle({ style, delay = 0 }) {
  return (
    <motion.div
      className="absolute h-1.5 w-1.5 rounded-full bg-accent/60"
      style={style}
      animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function HeroVisual() {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);
  const parallaxXReverse = useSpring(useTransform(mouseX, [-0.5, 0.5], [8, -8]), springConfig);
  const parallaxYReverse = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[540px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      aria-hidden="true"
    >
      {/* Glow orbs */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute right-8 top-12 h-32 w-32 rounded-full bg-secondary/15 blur-[60px]" />
      <div className="absolute bottom-16 left-8 h-40 w-40 rounded-full bg-accent/20 blur-[70px]" />

      {/* Particles */}
      <FloatingParticle style={{ top: "15%", left: "20%" }} delay={0} />
      <FloatingParticle style={{ top: "30%", right: "18%" }} delay={1.2} />
      <FloatingParticle style={{ bottom: "35%", left: "12%" }} delay={0.6} />
      <FloatingParticle style={{ bottom: "20%", right: "25%" }} delay={1.8} />
      <FloatingParticle style={{ top: "55%", left: "45%" }} delay={2.4} />

      {/* Stats cards — asymmetric layout */}
      {stats.map((stat, i) => (
        <StatsCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          className={stat.className}
          delay={0.4 + i * 0.12}
          floatDuration={5 + i * 0.5}
        />
      ))}

      {/* Central composition */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-8 sm:inset-10"
      >
        {/* Main Dashboard */}
        <GlassCard
          className="relative z-10 h-full w-full overflow-hidden p-4 sm:p-5"
          delay={0.2}
          float
          floatDuration={7}
          floatY={6}
          ariaLabel="Dashboard preview"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-xs font-medium text-body">Team Dashboard</span>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2">
            {[
              { label: "Active", value: "24", color: "from-primary-dark to-accent" },
              { label: "Tasks", value: "186", color: "from-primary to-secondary" },
              { label: "Done", value: "94%", color: "from-emerald-500 to-teal-400" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/30 bg-white/40 p-2.5 backdrop-blur-sm"
              >
                <p className="text-[10px] font-medium text-body">{item.label}</p>
                <p className={`font-heading text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Chart bars */}
          <div className="mb-3 flex h-20 items-end gap-1.5 rounded-lg border border-white/20 bg-white/30 p-3">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary-dark to-accent"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["var(--primary-dark)", "var(--primary)", "var(--accent)", "var(--secondary)"].map((color, i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="text-xs text-body">12 team members online</span>
          </div>
        </GlassCard>
      </motion.div>

      {/* AI Assistant — top left */}
      <motion.div style={{ x: parallaxXReverse, y: parallaxYReverse }} className="absolute left-0 top-0 z-30">
        <GlassCard className="p-3 sm:p-3.5" delay={0.35} float floatDuration={5.5} floatY={5}>
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-dark to-primary shadow-lg shadow-primary/30">
              <Bot className="h-5 w-5 text-white" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">AI Assistant</p>
              <p className="text-[10px] text-emerald-500">Online • Ready</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Chat Widget — bottom left */}
      <motion.div
        style={{ x: parallaxX, y: parallaxYReverse }}
        className="absolute bottom-16 left-0 z-30 sm:bottom-20"
      >
        <GlassCard className="w-44 p-3 sm:w-48" delay={0.45} float floatDuration={6.2} floatY={4}>
          <div className="mb-2 flex items-center gap-2">
            <MessageSquare className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-semibold text-foreground">Live Chat</span>
          </div>
          <div className="space-y-1.5">
            <div className="rounded-md rounded-tl-none bg-primary/10 px-2.5 py-1.5 text-[10px] text-body">
              How can I help today?
            </div>
            <div className="ml-auto w-[85%] rounded-md rounded-tr-none bg-gradient-to-r from-primary-dark to-primary px-2.5 py-1.5 text-[10px] text-white">
              Schedule a meeting
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Calendar — top right */}
      <motion.div style={{ x: parallaxXReverse, y: parallaxY }} className="absolute right-0 top-4 z-30 sm:top-0">
        <GlassCard className="w-36 p-3 sm:w-40" delay={0.5} float floatDuration={5.8} floatY={5}>
          <div className="mb-2 flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-secondary" />
            <span className="text-[10px] font-semibold text-foreground">Today</span>
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className="text-[8px] text-body">
                {d}
              </span>
            ))}
            {Array.from({ length: 7 }, (_, i) => (
              <span
                key={i}
                className={`rounded-md py-0.5 text-[9px] ${
                  i === 2
                    ? "bg-gradient-to-r from-primary-dark to-primary font-semibold text-white"
                    : "text-body"
                }`}
              >
                {i + 10}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Analytics — right */}
      <motion.div
        style={{ x: parallaxXReverse, y: parallaxYReverse }}
        className="absolute -right-2 top-1/2 z-30 -translate-y-1/2 sm:-right-4"
      >
        <GlassCard className="p-3" delay={0.55} float floatDuration={6.5} floatY={4}>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-accent" />
            <div>
              <p className="text-[10px] text-body">Revenue</p>
              <p className="font-heading text-sm font-bold text-foreground">
                +32%
                <ArrowUpRight className="ml-0.5 inline h-3 w-3 text-emerald-500" />
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Productivity card — bottom right */}
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute bottom-0 right-2 z-30 sm:right-0">
        <GlassCard className="p-3" delay={0.6} float floatDuration={5.3} floatY={6}>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <div>
              <p className="text-[10px] text-body">Productivity</p>
              <p className="font-heading text-sm font-bold text-foreground">+47% boost</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Hover glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(38,70,171,0.06), transparent 40%)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-hero-mid to-hero-end" />

      {/* Background orbs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[400px] w-[400px] rounded-full bg-secondary/8 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-none"
          >
            <motion.div variants={itemVariants}>
              <Badge>Trusted by 300+ Businesses Worldwide</Badge>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="font-heading mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
            >
              Hire{" "}
              <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
                Elite Virtual Professionals
              </span>{" "}
              That Scale Your Business
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-relaxed text-body sm:text-xl"
            >
              Build a world-class remote team without the hiring headaches. We connect
              you with pre-vetted virtual experts who integrate seamlessly and deliver
              from day one.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <CTAButton href="#hire" variant="primary" size="lg">
                Hire Virtual Employee
              </CTAButton>
              <CTAButton href="#services" variant="secondary" size="lg">
                Explore Services
              </CTAButton>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={itemVariants} className="mt-10 space-y-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-1.5" aria-label="4.9 out of 5 star rating">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">4.9 Rating</span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-body">
                  <Building2 className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-foreground">300+</strong> Companies
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-body">
                  <TrendingUp className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-foreground">98%</strong> Client Satisfaction
                  </span>
                </div>
              </div>

              <p className="text-sm text-body">
                Trusted by startups and enterprises worldwide.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-4"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
