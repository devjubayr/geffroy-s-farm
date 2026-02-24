import { motion } from "framer-motion";
import { HR, QUOTES, sg, T, Tag, up, useBP, useReveal } from ".";

export default function Testimonials() {
  const [ref, v] = useReveal();
  const { mob, tab } = useBP();
  return (
    <section
      ref={ref}
      style={{
        background: T.bg1,
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
        padding: "clamp(64px,9vw,100px) clamp(1rem,5vw,2.5rem)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          variants={sg}
          initial="hidden"
          animate={v ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <motion.div variants={up()} style={{ marginBottom: 14 }}>
            <Tag>Recognition</Tag>
          </motion.div>
          <motion.h2
            variants={up()}
            style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(1.6rem,3.2vw,2.4rem)",
              fontWeight: 800,
              color: T.ink,
              lineHeight: 1.18,
              letterSpacing: "-0.03em",
            }}
          >
            Trusted by Leaders, Loved by Families
          </motion.h2>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob
              ? "1fr"
              : tab
                ? "1fr 1fr"
                : "repeat(3,1fr)",
            gap: 16,
          }}
        >
          {QUOTES.map(({ who, role, text }, i) => (
            <motion.div
              key={who}
              variants={up(i * 0.1)}
              initial="hidden"
              animate={v ? "visible" : "hidden"}
              whileHover={{ borderColor: T.borderMid, y: -3 }}
              style={{
                background: T.bg0,
                border: `1px solid ${T.border}`,
                borderRadius: 14,
                padding: "24px 22px",
                cursor: "default",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: T.lime,
                  marginBottom: 14,
                  letterSpacing: 2,
                }}
              >
                ★★★★★
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: T.body,
                  lineHeight: 1.8,
                  marginBottom: 20,
                  fontStyle: "italic",
                }}
              >
                "{text}"
              </p>
              <HR style={{ marginBottom: 14 }} />
              <div style={{ fontWeight: 700, fontSize: 13, color: T.ink }}>
                {who}
              </div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
                {role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
