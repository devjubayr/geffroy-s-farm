import { motion } from "framer-motion";
import Image from "next/image";
import { HR, T, useBP } from ".";

export default function Footer() {
  const { mob, tab } = useBP();
  const cols = [
    {
      h: "Vegetables",
      ls: [
        "Tomatoes",
        "Lettuce",
        "Chinese Cabbage",
        "Sweet Corn",
        "Broccoli",
        "Cucumber",
        "See All →",
      ],
    },
    {
      h: "Fruits",
      ls: [
        "Papaya",
        "Mango",
        "Passion Fruit",
        "Banana",
        "Guava",
        "Avocado",
        "See All →",
      ],
    },
    {
      h: "Farm",
      ls: [
        "Our Story",
        "Eco Methods",
        "Partnerships",
        "Media Coverage",
        "Sustainability",
      ],
    },
    {
      h: "Contact",
      ls: [
        "+248 4371860",
        "+248 2826324",
        "geffroysfarm@hotmail.com",
        "Les Cannelles, Anse Royale",
      ],
    },
  ];
  return (
    <footer
      style={{
        background: T.bg1,
        borderTop: `1px solid ${T.border}`,
        padding: `clamp(48px,7vw,72px) clamp(1rem,5vw,2.5rem) 24px`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob
              ? "1fr 1fr"
              : tab
                ? "2fr 1fr 1fr"
                : "2fr 1fr 1fr 1fr 1fr",
            gap: mob ? 28 : 36,
            marginBottom: 44,
          }}
        >
          <div style={{ gridColumn: mob ? "1/-1" : "auto" }}>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Brand Logo"
                height={50}
                width={120}
                className="object-contain"
              />
            </div>
            <p
              style={{
                fontSize: 13,
                color: T.muted,
                lineHeight: 1.8,
                maxWidth: 230,
                marginBottom: 18,
              }}
            >
              Third-generation eco-certified farm growing fresh vegetables and
              tropical fruits at Les Cannelles, Anse Royale, Mahé.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["FB", "IG", "LI"].map((s) => (
                <motion.div
                  key={s}
                  whileHover={{ borderColor: T.mid, color: T.green }}
                  style={{
                    height: 30,
                    border: `1px solid ${T.border}`,
                    borderRadius: 7,
                    padding: "0 11px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: 11,
                    fontWeight: 600,
                    color: T.muted,
                    cursor: "pointer",
                    transition: "all 0.18s",
                  }}
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </div>
          {cols.map(({ h, ls }) => (
            <div key={h}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: T.faint,
                  textTransform: "uppercase",
                  marginBottom: 15,
                }}
              >
                {h}
              </div>
              {ls.map((l) => (
                <motion.div
                  key={l}
                  whileHover={{ color: T.green, x: 2 }}
                  style={{
                    fontSize: 13,
                    color: T.muted,
                    marginBottom: 9,
                    cursor: "pointer",
                    transition: "color 0.15s",
                  }}
                >
                  {l}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
        <HR />
        <div
          style={{
            paddingTop: 20,
            display: "flex",
            flexDirection: mob ? "column" : "row",
            justifyContent: "space-between",
            gap: 8,
            fontSize: 12,
            color: T.faint,
          }}
        >
          <span>
            © 2025 Geffroy's Farm · Les Cannelles, Anse Royale, Mahé, Seychelles
          </span>
          <span>Eco-Smart Farming · Nature Seychelles Partner</span>
        </div>
      </div>
    </footer>
  );
}
