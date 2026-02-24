import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE, IMG, T, Tag, useBP } from ".";

export default function PartnerBanner() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const { mob } = useBP();
  return (
    <section
      ref={ref}
      style={{
        margin: `0 clamp(1rem,4vw,2.5rem)`,
        borderRadius: mob ? 14 : 20,
        overflow: "hidden",
        position: "relative",
        height: mob ? 290 : 350,
        border: `1px solid ${T.borderMid}`,
      }}
    >
      <motion.div style={{ x: bgX, position: "absolute", inset: "-5%" }}>
        <img
          src={IMG.banner}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.3) saturate(1.1)",
          }}
        />
      </motion.div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg,rgba(13,33,6,0.9) 0%,rgba(13,33,6,0.48) 55%,rgba(13,33,6,0.22) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: `0 clamp(22px,6vw,60px)`,
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={v ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <Tag sea>🌿 Official Partnership</Tag>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={v ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.14, duration: 0.7, ease: EASE }}
            style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(1.35rem,3.5vw,2.3rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              margin: "16px 0 12px",
            }}
          >
            Partnered with Nature Seychelles to Build a Greener Food Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={v ? { opacity: 1 } : {}}
            transition={{ delay: 0.32 }}
            style={{
              color: "rgba(255,255,255,0.58)",
              fontSize: 14,
              lineHeight: 1.8,
              marginBottom: 22,
            }}
          >
            Sharing best practices, promoting locally grown produce and fruits,
            collaborating to build Seychelles' first Organic Farming Network.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={v ? { opacity: 1 } : {}}
            transition={{ delay: 0.48 }}
            whileHover={{
              background: "rgba(255,255,255,0.14)",
              borderColor: "rgba(255,255,255,0.48)",
            }}
            style={{
              background: "rgba(255,255,255,0.09)",
              border: "1.5px solid rgba(255,255,255,0.26)",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 22px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            Read our story →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
