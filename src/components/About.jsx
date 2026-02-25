import { motion } from "framer-motion";
import Link from "next/link";
import {
  BtnGhost,
  BtnPrimary,
  IMG,
  lft,
  sg,
  T,
  Tag,
  up,
  useBP,
  useReveal,
} from ".";

export default function About() {
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
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: tab ? "1fr" : "1fr 1fr",
          gap: tab ? 40 : 72,
          alignItems: "center",
        }}
      >
        <motion.div
          variants={lft()}
          initial="hidden"
          animate={v ? "visible" : "hidden"}
          style={{ position: "relative" }}
        >
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${T.border}`,
              aspectRatio: "4/3",
            }}
          >
            <img
              src={IMG.about}
              alt="Jean-Paul Geffroy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={v ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.45 }}
            style={{
              position: "absolute",
              bottom: -18,
              right: mob ? 14 : -22,
              background: "#fff",
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              padding: "14px 18px",
              maxWidth: 210,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: T.muted,
                lineHeight: 1.6,
                marginBottom: 6,
              }}
            >
              "Neem is natural — pick and eat almost immediately. Not harmful to
              humans, water, or soil."
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.green }}>
              Jean-Paul Geffroy
            </div>
            <div style={{ fontSize: 10, color: T.faint }}>
              Founder & Managing Director
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={sg}
          initial="hidden"
          animate={v ? "visible" : "hidden"}
        >
          <motion.div variants={up()} style={{ marginBottom: 14 }}>
            <Tag>Our Story</Tag>
          </motion.div>
          <motion.h2
            variants={up()}
            style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(1.65rem,3.2vw,2.5rem)",
              fontWeight: 800,
              color: T.ink,
              lineHeight: 1.18,
              letterSpacing: "-0.03em",
              marginBottom: 18,
            }}
          >
            A Third-Generation Farmer Growing Seychelles' Future
          </motion.h2>
          <motion.p
            variants={up()}
            style={{
              color: T.body,
              fontSize: 15,
              lineHeight: 1.9,
              marginBottom: 14,
            }}
          >
            Jean-Paul Geffroy grew up on his father's farm at Anse Royale where
            vegetables, fruits were produce together. As a third-generation
            farmer he inherited not just the land — but a deep work ethic and
            love for fresh produce.
          </motion.p>
          <motion.p
            variants={up()}
            style={{
              color: T.body,
              fontSize: 15,
              lineHeight: 1.9,
              marginBottom: 26,
            }}
          >
            His 3.6-hectare commercial operation at Les Cannelles now grows{" "}
            <strong>20+ fresh vegetables</strong> alongside a range of{" "}
            <strong style={{ color: T.fruit }}>seasonal tropical fruits</strong>
          </motion.p>
          <motion.div
            variants={up()}
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 28,
            }}
          >
            {[
              { n: "3.6ha", l: "Farm Area" },
              { n: "20+", l: "Vegetables" },
              { n: "10+", l: "Fruits" },
              { n: "100%", l: "Eco Methods" },
            ].map(({ n, l }) => (
              <div
                key={l}
                style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                  padding: "10px 15px",
                  textAlign: "center",
                  background: T.bg1,
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: T.ink,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {n}
                </div>
                <div style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={up()}
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
          >
            <Link
              href="https://www.linkedin.com/in/jean-paul-geffroy-90bb5683"
              target="_blank"
            >
              <BtnPrimary style={{ borderRadius: 9 }}>
                Meet Jean-Paul
              </BtnPrimary>
            </Link>
            <a href="#methods">
              <BtnGhost style={{ borderRadius: 9 }}>Our eco methods →</BtnGhost>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
