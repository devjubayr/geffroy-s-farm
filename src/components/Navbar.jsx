import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BtnGhost, BtnPrimary, EASE, T, useBP } from ".";

motion;

function Navbar() {
  const [sc, setSc] = useState(false);
  const [open, setOpen] = useState(false);
  const { tab } = useBP();
  useEffect(() => {
    const f = () => setSc(window.scrollY > 20);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = ["About", "Vegetables", "Fruits", "Methods", "Contact"];
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999900,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1rem,5vw,2.5rem)",
          background: sc || open ? "rgba(255,255,255,0.97)" : "transparent",
          borderBottom: `1px solid ${sc ? T.border : "transparent"}`,
          backdropFilter: sc ? "blur(20px)" : "none",
          transition: "background 0.35s,border-color 0.35s",
        }}
      >
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Brand Logo"
            height={50}
            width={120}
            className="object-contain"
          />
        </div>

        {!tab && (
          <div style={{ display: "flex", gap: 2 }}>
            {links.map((l) => (
              <motion.a
                key={l}
                whileHover={{ color: T.green, background: T.bg1 }}
                style={{
                  color: T.body,
                  fontSize: 13.5,
                  fontWeight: 500,
                  textDecoration: "none",
                  cursor: "pointer",
                  padding: "6px 13px",
                  borderRadius: 7,
                  transition: "all 0.18s",
                }}
              >
                {l}
              </motion.a>
            ))}
          </div>
        )}
        {!tab ? (
          <div style={{ display: "flex", gap: 8 }}>
            <Link href={"http://wa.me/2482726083"} target="_blank">
              <BtnGhost style={{ padding: "8px 16px", fontSize: 13 }}>
                +248 2726083
              </BtnGhost>
            </Link>

            <Link
              href={"https://web.facebook.com/geffroysfarm"}
              target="_blank"
            >
              <BtnPrimary style={{ padding: "8px 18px", fontSize: 13 }}>
                Order Produce
              </BtnPrimary>
            </Link>
          </div>
        ) : (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              display: "flex",
              flexDirection: "column",
              gap: 4.5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  open
                    ? i === 1
                      ? { opacity: 0 }
                      : i === 0
                        ? { rotate: 45, y: 8 }
                        : { rotate: -45, y: -8 }
                    : { opacity: 1, rotate: 0, y: 0 }
                }
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: T.ink,
                  borderRadius: 2,
                }}
              />
            ))}
          </motion.button>
        )}
      </motion.nav>
      <AnimatePresence>
        {open && tab && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: 60,
              left: 0,
              right: 0,
              zIndex: 199,
              background: "rgba(255,255,255,0.98)",
              borderBottom: `1px solid ${T.border}`,
              padding: "20px clamp(1rem,5vw,2.5rem) 28px",
            }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
                style={{
                  padding: "13px 0",
                  fontSize: 17,
                  fontWeight: 600,
                  color: T.ink,
                  borderBottom: `1px solid ${T.border}`,
                  cursor: "pointer",
                }}
              >
                {l}
              </motion.div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <Link href={"http://wa.me/2482726083"} target="_blank">
                <BtnGhost style={{ flex: 1 }}>Call Us</BtnGhost>
              </Link>
              <Link
                href={"https://web.facebook.com/geffroysfarm"}
                target="_blank"
              >
                <BtnPrimary style={{ flex: 1 }}>Order Now</BtnPrimary>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
