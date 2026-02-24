"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ─── Utility ──────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return [ref, inView];
}

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.07)" : "none",
        transition: "background 0.4s, box-shadow 0.4s",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontWeight: 700,
          fontSize: 20,
          color: "#1a2e0d",
        }}
      >
        <span style={{ fontSize: 22 }}>✦</span> Rultiva
      </div>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: 32,
          fontSize: 14,
          fontWeight: 500,
          color: "#334",
        }}
      >
        {["Home", "About Us", "Reviews", "Products", "Blog"].map((l) => (
          <motion.a
            key={l}
            whileHover={{ color: "#3a7d1e" }}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {l}
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <motion.button whileHover={{ scale: 1.04 }} style={btnOutline}>
          Sign In
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={btnFilled}
        >
          Sign up Free
        </motion.button>
      </div>
    </motion.nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f5f9f0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Top copy */}
      <div
        style={{
          paddingTop: 120,
          textAlign: "center",
          padding: "120px 2rem 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#3a7d1e",
            marginBottom: 16,
          }}
        >
          ✦ Top Yield Webinar Platform
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#0f1f06",
            letterSpacing: "-0.03em",
            maxWidth: 700,
            margin: "0 auto 20px",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Bring Fresh Growth
          <br />
          To Agriculture.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            maxWidth: 480,
            margin: "0 auto 36px",
            color: "#556",
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          Experience the ultimate guiding journey with expert tips, premium
          gear, and professional insights.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 8px 32px rgba(58,125,30,0.35)",
          }}
          whileTap={{ scale: 0.97 }}
          style={{
            ...btnFilled,
            fontSize: 15,
            padding: "14px 36px",
            borderRadius: 50,
          }}
        >
          Get Started →
        </motion.button>
      </div>

      {/* Hero image with parallax */}
      <motion.div>
        <div
          style={{
            margin: "0 2rem",
            borderRadius: 24,
            overflow: "hidden",
            height: 650,
            background:
              "linear-gradient(160deg, #2d5a1b 0%, #7ab648 50%, #c8e89a 100%)",
            position: "relative",
            marginTop: 20,
          }}
        >
          {/* Fake lush field */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(ellipse at 50% 70%, #a8d85b55 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "55%",
              background: "linear-gradient(to top, #1e4d0c, transparent)",
            }}
          />
          <Image
            className="h-full w-full object-cover"
            src="https://www.hopperjobs.com/wp-content/uploads/golf_course.jpg"
            alt="tree image"
            height={700}
            width={1200}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            style={{
              position: "absolute",
              bottom: 24,
              left: 28,
              color: "#fff",
              fontSize: 22,
              fontWeight: 700,
              fontFamily: "Georgia, serif",
            }}
          >
            The Journey to a<br />
            Perfection.
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.04 }}
            style={{
              position: "absolute",
              bottom: 28,
              right: 28,
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: 50,
              cursor: "pointer",
              fontSize: 12,
              backdropFilter: "blur(8px)",
            }}
          >
            Book a Free Driving Experience
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────
function StatsSection() {
  const [ref, inView] = useReveal();
  const stats = [
    { value: "50+", label: "Year Of Experience" },
    { value: "200+", label: "Fields In Progress" },
    { value: "120,000+", label: "Farmer Around World" },
    { value: "$15 Billion", label: "Agricultural Product" },
  ];

  return (
    <section ref={ref} style={{ background: "#fff", padding: "60px 4rem" }}>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {stats.map(({ value, label }) => (
          <motion.div
            key={label}
            variants={fadeUp()}
            style={{ textAlign: "center" }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: "#1a2e0d",
                letterSpacing: "-0.02em",
                fontFamily: "Georgia, serif",
              }}
            >
              {value}
            </div>
            <div style={{ fontSize: 13, color: "#778", marginTop: 4 }}>
              {label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── Problem Statement ─────────────────────────────────────────────────────────
function ProblemSection() {
  const [ref, inView] = useReveal();
  const tags = ["Organic Farm", "Automation farm", "Bio-medical farm"];
  return (
    <section ref={ref} style={{ background: "#f5f9f0", padding: "80px 6rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 64,
          alignItems: "center",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p
            variants={fadeUp()}
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#3a7d1e",
              letterSpacing: 2,
              marginBottom: 16,
            }}
          >
            2025
          </motion.p>
          {tags.map((t) => (
            <motion.span
              key={t}
              variants={fadeUp()}
              style={{
                display: "inline-block",
                fontSize: 11,
                background: "#e6f4d7",
                color: "#3a7d1e",
                borderRadius: 20,
                padding: "4px 12px",
                marginRight: 8,
                marginBottom: 8,
                fontWeight: 600,
              }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={fadeUp()}
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#0f1f06",
              fontFamily: "Georgia, serif",
              marginBottom: 28,
            }}
          >
            Despite Advances In Agri-Tech, Traditional Labor-Intensive Farming
            Highlights Ongoing Inefficiencies.
          </motion.h2>
          <motion.div variants={fadeUp()} style={{ display: "flex", gap: 32 }}>
            {["Harvesting Legacy.", "Planting Tomorrow"].map((label) => (
              <div
                key={label}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#3a7d1e",
                  borderBottom: "2px solid #3a7d1e",
                  paddingBottom: 2,
                }}
              >
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Gallery ───────────────────────────────────────────────────────────────────
function GallerySection() {
  const [ref, inView] = useReveal();
  const cards = [
    { label: "Technology Irrigation", color: "#2d6a1e", n: "01" },
    { label: "Organic Fertilizer", color: "#4a8a30", n: "02" },
    { label: "Technology Irrigation", color: "#1a4d10", n: "03" },
    { label: "Agricultural Monitoring", color: "#3a7020", n: "04" },
  ];

  return (
    <section
      ref={ref}
      style={{ background: "#fff", padding: "80px 4rem", overflow: "hidden" }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <motion.h2
          variants={fadeUp()}
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 700,
            marginBottom: 32,
            color: "#0f1f06",
            fontFamily: "Georgia, serif",
          }}
        >
          Get Started Now
        </motion.h2>
        <motion.div
          variants={stagger}
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            paddingBottom: 12,
          }}
        >
          {cards.map(({ label, color, n }, i) => (
            <motion.div
              key={n}
              variants={fadeUp(i * 0.08)}
              whileHover={{
                scale: 1.04,
                y: -6,
                boxShadow: "0 20px 48px rgba(0,0,0,0.18)",
              }}
              style={{
                minWidth: 200,
                height: 240,
                borderRadius: 20,
                background: `linear-gradient(145deg, ${color}, #8dc05a)`,
                position: "relative",
                cursor: "pointer",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              {/* Fake field texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  padding: "16px 14px",
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 10, opacity: 0.7, marginBottom: 4 }}>
                  {n}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Expert Banner ─────────────────────────────────────────────────────────────
function ExpertBanner() {
  const [ref, inView] = useReveal();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={ref}
      style={{
        margin: "0 4rem 0",
        borderRadius: 28,
        overflow: "hidden",
        position: "relative",
        height: 320,
      }}
    >
      {/* Background */}
      <motion.div
        style={{
          x,
          position: "absolute",
          inset: "-5%",
          background:
            "linear-gradient(135deg, #1e4d0c 0%, #4a8a30 40%, #a8d85b 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }}
      />
      {/* rolling hills */}
      <svg
        viewBox="0 0 1200 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          opacity: 0.3,
        }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 C200,120 400,280 600,180 C800,80 1000,240 1200,160 L1200,320 L0,320 Z"
          fill="#0f2d06"
        />
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "60px 64px",
          maxWidth: 600,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            fontFamily: "Georgia, serif",
          }}
        >
          Collaborate And Learn From Industry Experts And Enthusiasts
        </motion.h2>
        <motion.button
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.06 }}
          style={{
            marginTop: 28,
            background: "#f97316",
            border: "none",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: 50,
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Blog
        </motion.button>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicesSection() {
  const [ref, inView] = useReveal();
  const services = [
    {
      title: "Farming Precision",
      desc: "Our precision farming employs state-of-the-art technology to optimize every aspect of farm operations.",
      color: "#2d6a1e",
      icon: "🌱",
    },
    {
      title: "Crop Surveillance",
      desc: "Track your crops' health and growth in real-time with our innovative solutions.",
      color: "#4a8a30",
      icon: "📡",
    },
    {
      title: "Automated Farming",
      desc: "Enhance farm efficiency and productivity with our cutting-edge automation solutions.",
      color: "#1a4d10",
      icon: "🤖",
    },
  ];

  return (
    <section ref={ref} style={{ background: "#fff", padding: "80px 4rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 48,
            marginBottom: 56,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontWeight: 700,
              color: "#0f1f06",
              lineHeight: 1.2,
              fontFamily: "Georgia, serif",
            }}
          >
            Next-Gen Solutions For Optimal Crop Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              color: "#556",
              fontSize: 15,
              lineHeight: 1.8,
              paddingTop: 8,
            }}
          >
            We provide cutting-edge services to help farmers maximize crop
            yields. Our precision farming, crop monitoring, and automation
            solutions aim to revolutionize agriculture.
          </motion.p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {services.map(({ title, desc, color, icon }, i) => (
            <motion.div
              key={title}
              variants={fadeUp(i * 0.1)}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 56px rgba(58,125,30,0.15)",
              }}
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "#f5f9f0",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  height: 160,
                  background: `linear-gradient(135deg, ${color}, #7ab648)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 48,
                }}
              >
                {icon}
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#0f1f06",
                    marginBottom: 8,
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: 13, color: "#667", lineHeight: 1.7 }}>
                  {desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA Marquee ───────────────────────────────────────────────────────────────
function MarqueeSection() {
  const [ref, inView] = useReveal();
  const text =
    "Changing The Game In Farming With Sustainable Practices And Cool Technologies, Shaping The Future Of Agriculture";

  return (
    <section
      ref={ref}
      style={{
        padding: "60px 4rem",
        background: "#f5f9f0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 20,
            background: "linear-gradient(135deg, #2d6a1e, #7ab648)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
          }}
        >
          🌾
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 700,
            color: "#0f1f06",
            lineHeight: 1.3,
            fontFamily: "Georgia, serif",
          }}
        >
          {text}
        </motion.h2>
      </div>
    </section>
  );
}

// ─── Newsletter ────────────────────────────────────────────────────────────────
function NewsletterSection() {
  const [ref, inView] = useReveal();
  const [email, setEmail] = useState("");

  return (
    <section
      ref={ref}
      style={{
        margin: "0 4rem 0",
        borderRadius: 28,
        overflow: "hidden",
        position: "relative",
        padding: "80px 48px",
        background:
          "linear-gradient(135deg, #0f2d06 0%, #2d6a1e 50%, #4a8a30 100%)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 120%, rgba(168,216,91,0.15) 0%, transparent 50%)",
        }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
          color: "#fff",
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          marginBottom: 32,
          position: "relative",
          zIndex: 1,
        }}
      >
        Join the Agricultural
        <br />
        Revolution Today!
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          maxWidth: 460,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            padding: "14px 20px",
            border: "none",
            borderRadius: "50px 0 0 50px",
            fontSize: 14,
            outline: "none",
            background: "rgba(255,255,255,0.95)",
            color: "#333",
          }}
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "#0f1f06",
            color: "#fff",
            border: "none",
            padding: "14px 24px",
            borderRadius: "0 50px 50px 0",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Subscribe →
        </motion.button>
      </motion.div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    {
      title: "COMPANY",
      links: ["Features", "Pricing", "About Us", "Careers", "Pricing"],
    },
    {
      title: "RESOURCE",
      links: ["Blog", "Customer Stories", "Information", "Legal", "Placmats"],
    },
    { title: "CAREER", links: ["Jobs", "Hiring", "Talents"] },
    { title: "HELP", links: ["FAQ", "Help Center", "Support"] },
  ];

  return (
    <footer
      style={{ background: "#fff", padding: "64px 4rem 40px", marginTop: 80 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 22,
                color: "#1a2e0d",
                marginBottom: 12,
              }}
            >
              ✦ Rultiva
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#667",
                lineHeight: 1.7,
                maxWidth: 220,
              }}
            >
              We are custom Insta builds located in Dallas, TX servicing
              Highland Park, Colfax & Prescar Hollow!
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["𝕏", "𝕗", "in", "▶"].map((ic) => (
                <motion.div
                  key={ic}
                  whileHover={{ scale: 1.2, color: "#3a7d1e" }}
                  style={{
                    width: 32,
                    height: 32,
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: 14,
                    color: "#445",
                  }}
                >
                  {ic}
                </motion.div>
              ))}
            </div>
          </div>

          {cols.map(({ title, links }) => (
            <div key={title}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "#334",
                  marginBottom: 16,
                }}
              >
                {title}
              </div>
              {links.map((l) => (
                <div
                  key={l}
                  style={{
                    fontSize: 13,
                    color: "#667",
                    marginBottom: 10,
                    cursor: "pointer",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid #eee",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: "#999",
          }}
        >
          <span>© 2025 Rultiva. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Shared Styles ─────────────────────────────────────────────────────────────
const btnFilled = {
  background: "#1a4a0a",
  color: "#fff",
  border: "none",
  padding: "10px 22px",
  borderRadius: 50,
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};

const btnOutline = {
  background: "transparent",
  color: "#334",
  border: "1px solid #ccc",
  padding: "10px 20px",
  borderRadius: 50,
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};

// ─── Root Page ─────────────────────────────────────────────────────────────────
export default function RultivaLanding() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Google fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f0f5e9; }
        ::-webkit-scrollbar-thumb { background: #3a7d1e; border-radius: 3px; }
      `}</style>

      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <GallerySection />
      <ExpertBanner />
      <ServicesSection />
      <MarqueeSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
