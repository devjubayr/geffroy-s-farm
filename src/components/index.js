import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const T = {
  bg0: "#ffffff",
  bg1: "#f7faf3",
  bg2: "#eef6e4",
  deep: "#0d2106",
  forest: "#1a4a0a",
  green: "#2e6b1e",
  mid: "#3f7c2a",
  lime: "#6bb33a",
  pale: "#e6f3db",
  paleMid: "#cce4af",
  fruit: "#c2440a",
  fruitPale: "#fef0e7",
  fruitMid: "#f97316",
  sea: "#0097b2",
  seaPale: "#e0f5fb",
  ink: "#0d1f06",
  body: "#3b5029",
  muted: "#6b7f5e",
  faint: "#9aae89",
  border: "#dce9ce",
  borderMid: "#c5dba6",
};
export const IMG = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=85",
  about:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=85",
  seeding:
    "https://images.unsplash.com/photo-1586281010691-f9da4be5b1f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  banner:
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600&q=85",
  tomatoes:
    "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=80",
  lettuce:
    "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=600&q=80",
  herbs:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  chili:
    "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600&q=80",
  broccoli:
    "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80",
  cucumber:
    "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&q=80",
  papaya:
    "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=600&q=80",
  mango: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80",
  passion:
    "https://images.unsplash.com/photo-1604495772376-9657f0035b23?w=600&q=80",
  banana:
    "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
  guava:
    "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=600&q=80",
  avocado:
    "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&q=80",
};

export const EASE = [0.22, 1, 0.36, 1];
export const up = (d = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: EASE },
  },
});
export const lft = (d = 0) => ({
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: d, ease: EASE },
  },
});
export const rgt = (d = 0) => ({
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: d, ease: EASE },
  },
});
export const sg = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function useReveal() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-60px 0px" });
  return [ref, v];
}

export function useBP() {
  const [w, setW] = useState(1200);
  useEffect(() => {
    const u = () => setW(window.innerWidth);
    u();
    window.addEventListener("resize", u);
    return () => window.removeEventListener("resize", u);
  }, []);
  return { mob: w < 640, tab: w < 1024 };
}

export function Tag({ children, fruit, sea, style }) {
  const bg = fruit ? T.fruitPale : sea ? T.seaPale : T.pale;
  const color = fruit ? T.fruit : sea ? T.sea : T.green;
  const bdr = fruit ? T.fruit + "44" : sea ? T.sea + "44" : T.borderMid;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: bg,
        color,
        border: `1px solid ${bdr}`,
        borderRadius: 6,
        padding: "4px 12px",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1.2,
        textTransform: "uppercase",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export const BtnPrimary = ({ children, fruit, style, ...p }) => (
  <motion.button
    whileHover={{ filter: "brightness(1.07)" }}
    whileTap={{ scale: 0.97 }}
    style={{
      background: fruit ? T.fruit : T.forest,
      color: "#fff",
      border: "none",
      borderRadius: 8,
      padding: "11px 24px",
      fontWeight: 700,
      fontSize: 14,
      cursor: "pointer",
      letterSpacing: 0.2,
      ...style,
    }}
    {...p}
  >
    {children}
  </motion.button>
);

export const BtnGhost = ({ children, style, ...p }) => (
  <motion.button
    whileHover={{ background: T.bg1, borderColor: T.mid }}
    whileTap={{ scale: 0.97 }}
    style={{
      background: "transparent",
      border: `1.5px solid ${T.border}`,
      color: T.ink,
      borderRadius: 8,
      padding: "10px 22px",
      fontWeight: 600,
      fontSize: 14,
      cursor: "pointer",
      ...style,
    }}
    {...p}
  >
    {children}
  </motion.button>
);

export const HR = ({ style }) => (
  <div style={{ borderTop: `1px solid ${T.border}`, ...style }} />
);

export const VEGETABLES = [
  { name: "Tomatoes", img: IMG.tomatoes, tag: "Year-round", emoji: "🍅" },
  { name: "Lettuce", img: IMG.lettuce, tag: "Salad fresh", emoji: "🥬" },
  { name: "Fresh Herbs", img: IMG.herbs, tag: "Aromatic", emoji: "🌿" },
  { name: "Hot Chili", img: IMG.chili, tag: "Spicy fresh", emoji: "🌶️" },
  { name: "Broccoli", img: IMG.broccoli, tag: "Seasonal", emoji: "🥦" },
  { name: "Cucumber", img: IMG.cucumber, tag: "Crisp daily", emoji: "🥒" },
];
export const VEG_ALL = [
  "Tomatoes",
  "Lettuce",
  "Chinese Cabbage",
  "Cucumber",
  "Egg Plant",
  "Sweet Corn",
  "Sweet Potatoes",
  "Pumpkin",
  "Capsicum",
  "Hot & Long Chilies",
  "Ochre",
  "Broccoli",
  "Moringa",
  "Mixed Herbs",
];

export const FRUITS = [
  { name: "Papaya", img: IMG.papaya, tag: "Year-round", emoji: "🍈" },
  { name: "Mango", img: IMG.mango, tag: "Seasonal", emoji: "🥭" },
  { name: "Passion Fruit", img: IMG.passion, tag: "Year-round", emoji: "🍋" },
  { name: "Banana", img: IMG.banana, tag: "Fresh daily", emoji: "🍌" },
  { name: "Guava", img: IMG.guava, tag: "Local fave", emoji: "🍐" },
  { name: "Avocado", img: IMG.avocado, tag: "Creamy ripe", emoji: "🥑" },
];
export const FRT_ALL = [
  "Papaya",
  "Mango",
  "Passion Fruit",
  "Banana",
  "Guava",
  "Avocado",
  "Jackfruit",
  "Breadfruit",
  "Starfruit",
  "Coconut",
  "Pineapple",
  "Malay Apple",
  "Lemon",
  "Lime",
];

export function ProduceCard({ item, isFruit, mob }) {
  return (
    <motion.div
      variants={up()}
      whileHover={{ y: -4 }}
      style={{
        borderRadius: 14,
        overflow: "hidden",
        border: `1px solid ${T.border}`,
        background: T.bg0,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          height: mob ? 128 : 186,
          overflow: "hidden",
        }}
      >
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.45 }}
          src={item.img}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(6px)",
            border: `1px solid ${isFruit ? T.fruit + "33" : T.border}`,
            borderRadius: 5,
            padding: "3px 9px",
            fontSize: 10,
            fontWeight: 700,
            color: isFruit ? T.fruit : T.green,
            letterSpacing: 0.8,
          }}
        >
          {item.tag}
        </div>
      </div>
      <div style={{ padding: "13px 15px", borderTop: `1px solid ${T.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>{item.emoji}</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: T.ink }}>
              {item.name}
            </div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 1 }}>
              From Anse Royale, Mahé
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const METHODS = [
  {
    icon: "🌱",
    title: "Precision Seeding Machine",
    desc: "Plants hundreds of seeds per minute — cutting labour costs and reducing contamination risk versus traditional hand-seeding.",
  },
  {
    icon: "♨️",
    title: "190°C Steam Tractor",
    desc: "Pressurised steam penetrates the soil to eliminate bacteria and pathogens at root level. Zero chemicals required.",
  },
  {
    icon: "🍃",
    title: "Neem Oil Pest Control",
    desc: "Controls leaf miners, aphids, shoot borers and thrips without harming soil, water, bees — or the harvest you eat.",
  },
  {
    icon: "🏠",
    title: "Climate-Smart Greenhouses",
    desc: "Redesigned shade-houses and drainage systems adapted for Seychelles' evolving climate, recognised by Nature Seychelles.",
  },
];

export const QUOTES = [
  {
    who: "Dr. Nirmal Jivan Shah",
    role: "CEO, Nature Seychelles",
    text: "Jean-Paul is a new generation Seychellois farmer pushing agriculture to the next level — using environmentally friendly pest control and innovative soil enrichment.",
  },
  {
    who: "President James Michel",
    role: "Former President of Seychelles",
    text: "His climate-smart greenhouse is a model for the future of agriculture in Seychelles — an impressive example of innovation meeting tradition.",
  },
  {
    who: "Camilla Estico",
    role: "Miss Seychelles 2014",
    text: "Partnering with Geffroy's Farm for our healthy living project was the perfect choice — fresh vegetables and fruits delivered weekly to Seychellois families.",
  },
];
