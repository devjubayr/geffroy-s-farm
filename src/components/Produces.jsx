import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  EASE,
  FRT_ALL,
  FRUITS,
  HR,
  ProduceCard,
  rgt,
  sg,
  T,
  Tag,
  up,
  useBP,
  useReveal,
  VEG_ALL,
  VEGETABLES,
} from ".";

export default function Produce() {
  const [ref, v] = useReveal();
  const [activeTab, setActiveTab] = useState("veg");
  const { mob, tab } = useBP();
  const items = activeTab === "veg" ? VEGETABLES : FRUITS;
  const allList = activeTab === "veg" ? VEG_ALL : FRT_ALL;
  const isFruit = activeTab === "fruit";

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: tab ? "1fr" : "1fr 1fr",
            gap: 32,
            marginBottom: 40,
            alignItems: "end",
          }}
        >
          <motion.div
            variants={sg}
            initial="hidden"
            animate={v ? "visible" : "hidden"}
          >
            <motion.div variants={up()} style={{ marginBottom: 14 }}>
              <Tag>Our Produce</Tag>
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
              }}
            >
              Fresh Vegetables{" "}
              <span style={{ color: T.muted, fontWeight: 400 }}>&amp;</span>{" "}
              <span style={{ color: T.fruit }}>Tropical Fruits</span>
            </motion.h2>
          </motion.div>
          <motion.p
            variants={rgt()}
            initial="hidden"
            animate={v ? "visible" : "hidden"}
            style={{ color: T.body, fontSize: 15, lineHeight: 1.85 }}
          >
            Harvested upon demand from our Anse Royale fields. Quantity and
            variety depend on the season — Jean-Paul grows what Seychelles
            needs.
          </motion.p>
        </div>

        {/* Tab switcher */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 30,
            padding: "4px",
            background: T.bg0,
            border: `1px solid ${T.border}`,
            borderRadius: 10,
            width: "fit-content",
          }}
        >
          {[
            { key: "veg", label: "🥦  Vegetables", fruit: false },
            { key: "fruit", label: "🍉  Fruits", fruit: true },
          ].map(({ key, label, fruit }) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "9px 22px",
                borderRadius: 8,
                border: "none",
                fontWeight: 700,
                fontSize: 13.5,
                cursor: "pointer",
                background:
                  activeTab === key
                    ? fruit
                      ? T.fruit
                      : T.forest
                    : "transparent",
                color: activeTab === key ? "#fff" : T.muted,
                transition: "all 0.22s",
              }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: EASE }}
          >
            <motion.div
              variants={sg}
              initial="hidden"
              animate="visible"
              style={{
                display: "grid",
                gridTemplateColumns: mob ? "repeat(2,1fr)" : "repeat(3,1fr)",
                gap: 16,
                marginBottom: 36,
              }}
            >
              {items.map((item) => (
                <ProduceCard
                  key={item.name}
                  item={item}
                  isFruit={isFruit}
                  mob={mob}
                />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <HR />
        <div style={{ paddingTop: 26 }}>
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              color: T.faint,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Complete {isFruit ? "Fruit" : "Vegetable"} List
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {allList.map((p, i) => (
              <motion.span
                key={p}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={v ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.035 * i, duration: 0.28 }}
                whileHover={{
                  background: isFruit ? T.fruit : T.green,
                  color: "#fff",
                  borderColor: isFruit ? T.fruit : T.green,
                }}
                style={{
                  display: "inline-block",
                  border: `1px solid ${T.borderMid}`,
                  color: T.body,
                  borderRadius: 6,
                  padding: "5px 13px",
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: "default",
                  transition: "all 0.18s",
                }}
              >
                {p}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
