"use client";
import { T } from ".";
import About from "./About";
import CTA from "./CTA";
// http://wa.me/2482726083
import Footer from "./Footer";
import Hero from "./Hero";
import Methods from "./Methods";
import Navbar from "./Navbar";
import PartnerBanner from "./PartnerBanner";
import Produce from "./Produces";
import Testimonials from "./Testimonials";
import TrustBar from "./Trusbar";

export default function GeffroysFarm() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        overflowX: "hidden",
        background: T.bg0,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{overflow-x:hidden;-webkit-font-smoothing:antialiased;}
        img{display:block;}
        input,button{font-family:inherit;}
        ::selection{background:#e6f3db;color:#0d1f06;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:#f7faf3;}
        ::-webkit-scrollbar-thumb{background:#3f7c2a;border-radius:4px;}
      `}</style>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Produce />
      <Methods />
      <Testimonials />
      <PartnerBanner />
      <CTA />
      <Footer />
    </div>
  );
}
