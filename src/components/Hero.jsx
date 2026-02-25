import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BtnGhost, BtnPrimary, EASE, IMG, T, Tag, useBP } from ".";

export default function Hero() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 70]);
  const { mob } = useBP();
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: T.bg0,
        paddingTop: 60,
        overflow: "hidden",
      }}
    >
      {/* <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{
          borderBottom: `1px solid ${T.border}`,
          background: T.bg1,
          padding: "9px clamp(1rem,5vw,2.5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12.5,
            color: T.body,
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: T.lime,
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Fresh vegetables{" "}
          <strong style={{ color: T.green }}>&amp; tropical fruits</strong> —
          harvested daily at Anse Royale, Mahé
        </span>
        <motion.span
          whileHover={{ color: T.fruit }}
          style={{
            fontSize: 12,
            color: T.sea,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Order now →
        </motion.span>
      </motion.div> */}

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          padding:
            "clamp(40px,6vw,68px) clamp(1rem,5vw,2.5rem) clamp(32px,5vw,56px)",
          gap: mob ? 0 : 56,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: mob ? 40 : 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6 }}
          >
            <Tag>🌴 Les Canelles · Anse Royale · Seychelles</Tag>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.75, ease: EASE }}
            style={{
              marginTop: 20,
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(2.2rem,5vw,3.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: T.ink,
            }}
          >
            Seychelles' Finest
            <br />
            <span style={{ color: T.green }}>Vegetables</span>
            <span
              style={{ color: T.muted, fontWeight: 400, fontSize: "0.72em" }}
            >
              {" "}
              &amp;{" "}
            </span>
            <span style={{ color: T.fruit }}>Tropical Fruits</span>
            <br />— Grown With Care.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.65 }}
            style={{
              marginTop: 20,
              fontSize: 15.5,
              color: T.body,
              lineHeight: 1.85,
              maxWidth: 480,
            }}
          >
            Providing produce farmed with eco-friendly and innovative methods
            for food that is good for the Seychellois and the environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.64, duration: 0.55 }}
            style={{ marginTop: 22, display: "flex", gap: 9, flexWrap: "wrap" }}
          >
            <Tag style={{ fontSize: 12, padding: "6px 14px" }}>
              🥦 20+ Vegetables
            </Tag>
            <Tag fruit style={{ fontSize: 12, padding: "6px 14px" }}>
              🍉 Tropical Fruits
            </Tag>
            <Tag sea style={{ fontSize: 12, padding: "6px 14px" }}>
              🌿 Eco Certified
            </Tag>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.74, duration: 0.55 }}
            style={{
              marginTop: 26,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <Link href={"http://wa.me/2482726083"} target="_blank">
              <BtnPrimary style={{ borderRadius: 9, padding: "12px 26px" }}>
                Order Fresh Produce
              </BtnPrimary>
            </Link>
            <Link href="#methods">
              <BtnGhost style={{ borderRadius: 9, padding: "12px 22px" }}>
                Our Methods →
              </BtnGhost>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              marginTop: 30,
              paddingTop: 22,
              borderTop: `1px solid ${T.border}`,
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
            }}
          >
            {[
              { icon: "📞", v: "+248 4372277" },
              { icon: "📱", v: "+248 2726083" },
              { icon: "📧", v: "geffroysfarm@hotmail.com" },
            ].map(({ icon, v }) => (
              <div
                key={v}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12.5,
                  color: T.muted,
                }}
              >
                {icon} {v}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.32, duration: 0.9, ease: EASE }}
          style={{ position: "relative" }}
        >
          <motion.div
            style={{
              y: imgY,
              height: "100%",
              minHeight: 420,
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${T.border}`,
            }}
          >
            <img
              src={IMG.hero}
              alt="Geffroy's Farm"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                minHeight: 420,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 100,
                background:
                  "linear-gradient(to top,rgba(13,33,6,0.6),transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 18,
                left: 18,
                right: 18,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>
                Les Cannelles, Anse Royale
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "#fff",
                  padding: "5px 12px",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                3rd Generation Farm
              </div>
            </div>
          </motion.div>
          {!mob && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5, type: "spring" }}
              style={{
                position: "absolute",
                top: -18,
                left: -22,
                background: "#fff",
                border: `1px solid ${T.border}`,
                borderRadius: 12,
                padding: "14px 18px",
              }}
            >
              <div
                style={{
                  fontSize: 9.5,
                  color: T.muted,
                  letterSpacing: 1.3,
                  textTransform: "uppercase",
                  marginBottom: 5,
                }}
              >
                Vegetables
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: T.ink,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                20
                <span style={{ fontSize: 14, fontWeight: 600, color: T.muted }}>
                  + crops
                </span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: T.lime,
                  marginTop: 4,
                  fontWeight: 600,
                }}
              >
                🥦 Year-round
              </div>
            </motion.div>
          )}
          {!mob && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
              style={{
                position: "absolute",
                bottom: -18,
                left: -22,
                background: "#fff",
                border: `1px solid ${T.border}`,
                borderRadius: 12,
                padding: "14px 18px",
              }}
            >
              <div
                style={{
                  fontSize: 9.5,
                  color: T.muted,
                  letterSpacing: 1.3,
                  textTransform: "uppercase",
                  marginBottom: 5,
                }}
              >
                Tropical Fruits
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: T.fruit,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                Seasonal
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: T.fruitMid,
                  marginTop: 4,
                  fontWeight: 600,
                }}
              >
                🍉 Freshly harvested
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
