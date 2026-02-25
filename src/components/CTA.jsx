import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BtnPrimary, sg, T, Tag, up, useBP, useReveal } from ".";

export default function CTA() {
  const [ref, v] = useReveal();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { mob } = useBP();
  return (
    <section
      ref={ref}
      style={{
        background: T.bg0,
        padding: "clamp(72px,10vw,110px) clamp(1rem,5vw,2.5rem)",
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          variants={sg}
          initial="hidden"
          animate={v ? "visible" : "hidden"}
        >
          <motion.div variants={up()} style={{ marginBottom: 16 }}>
            <Tag>Get Started</Tag>
          </motion.div>
          <motion.h2
            variants={up()}
            style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(1.75rem,4vw,2.7rem)",
              fontWeight: 800,
              color: T.ink,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: 14,
            }}
          >
            Order Fresh Vegetables &amp;{" "}
            <span style={{ color: T.fruit }}>Tropical Fruits</span> Today
          </motion.h2>
          <motion.p
            variants={up()}
            style={{
              color: T.body,
              fontSize: 15,
              lineHeight: 1.85,
              marginBottom: 34,
            }}
          >
            Sign up for weekly produce updates. Be the first to know what's in
            season at Geffroy's Farm.
          </motion.p>
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.div
                key="form"
                variants={up()}
                style={{
                  display: "flex",
                  flexDirection: mob ? "column" : "row",
                  gap: mob ? 10 : 0,
                  marginBottom: 22,
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "12px 17px",
                    border: `1.5px solid ${T.border}`,
                    borderRadius: mob ? "8px" : "8px 0 0 8px",
                    fontSize: 14,
                    outline: "none",
                    color: T.ink,
                    background: T.bg0,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = T.mid)}
                  onBlur={(e) => (e.target.style.borderColor = T.border)}
                />

                <BtnPrimary
                  onClick={() => email && setSent(true)}
                  style={{
                    borderRadius: mob ? "8px" : "0 8px 8px 0",
                    padding: "12px 22px",
                    whiteSpace: "nowrap",
                  }}
                >
                  See More on FB →
                </BtnPrimary>
              </motion.div>
            ) : (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "13px 20px",
                  border: `1px solid ${T.borderMid}`,
                  borderRadius: 9,
                  background: T.pale,
                  color: T.green,
                  fontWeight: 600,
                  fontSize: 14,
                  marginBottom: 22,
                }}
              >
                ✅ You're on the list — we'll be in touch soon!
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            variants={up()}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 22,
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "📞", v: "+248 4371860" },
              { icon: "📱", v: "+248 2826324" },
              { icon: "📍", v: "Anse Royale, Mahé" },
            ].map(({ icon, v: val }) => (
              <div
                key={val}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12.5,
                  color: T.muted,
                }}
              >
                {icon} {val}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
