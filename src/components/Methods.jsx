import { motion } from "framer-motion";
import { IMG, lft, METHODS, sg, T, Tag, up, useBP, useReveal } from ".";

export default function Methods() {
  const [ref, v] = useReveal();
  const { mob, tab } = useBP();
  return (
    <section
      ref={ref}
      style={{
        background: T.bg0,
        padding: "clamp(64px,9vw,100px) clamp(1rem,5vw,2.5rem)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          variants={sg}
          initial="hidden"
          animate={v ? "visible" : "hidden"}
          style={{ maxWidth: 580, marginBottom: 52 }}
        >
          <motion.div variants={up()} style={{ marginBottom: 14 }}>
            <Tag>Eco Methods</Tag>
          </motion.div>
          <motion.h2
            variants={up()}
            style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(1.65rem,3.2vw,2.4rem)",
              fontWeight: 800,
              color: T.ink,
              lineHeight: 1.18,
              letterSpacing: "-0.03em",
              marginBottom: 14,
            }}
          >
            Innovative Technology Meets Generational Wisdom
          </motion.h2>
          <motion.p
            variants={up()}
            style={{ color: T.body, fontSize: 15, lineHeight: 1.85 }}
          >
            Jean-Paul pairs modern eco-machinery with three generations of
            farming knowledge to produce the safest, freshest vegetables and
            fruits in Seychelles.
          </motion.p>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: tab ? "1fr" : "1fr 1fr",
            gap: tab ? 40 : 64,
            alignItems: "center",
          }}
        >
          <motion.div
            variants={lft()}
            initial="hidden"
            animate={v ? "visible" : "hidden"}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${T.border}`,
              aspectRatio: "4/3",
            }}
          >
            <img
              src={IMG.seeding}
              alt="Greenhouse"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
          <motion.div
            variants={sg}
            initial="hidden"
            animate={v ? "visible" : "hidden"}
            style={{
              display: "grid",
              gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
              gap: 14,
            }}
          >
            {METHODS.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={up(i * 0.07)}
                whileHover={{ borderColor: T.borderMid, background: T.bg1 }}
                style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: 12,
                  padding: "20px 17px",
                  background: T.bg0,
                  transition: "all 0.2s",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: 26, marginBottom: 11 }}>{icon}</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: T.ink,
                    marginBottom: 7,
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: 13, color: T.body, lineHeight: 1.75 }}>
                  {desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
