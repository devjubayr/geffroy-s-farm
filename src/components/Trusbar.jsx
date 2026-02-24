import { motion } from "framer-motion";
import { sg, T, up, useReveal } from ".";

export default function TrustBar() {
  const [ref, v] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
        background: T.bg1,
        padding: "18px clamp(1rem,5vw,2.5rem)",
      }}
    >
      <motion.div
        variants={sg}
        initial="hidden"
        animate={v ? "visible" : "hidden"}
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(18px,4vw,52px)",
          flexWrap: "wrap",
        }}
      >
        <motion.span
          variants={up()}
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            color: T.faint,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Recognised by
        </motion.span>
        {[
          "Nature Seychelles",
          "Office of the President",
          "Miss Seychelles Initiative",
          "Seychelles Agri-Media",
          "Seychelles Nation",
        ].map((b) => (
          <motion.span
            key={b}
            variants={up()}
            style={{
              fontSize: 12.5,
              fontWeight: 600,
              color: T.muted,
              whiteSpace: "nowrap",
            }}
          >
            {b}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
