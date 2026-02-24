export const metadata = {
  title: "Rultiva — Bring Fresh Growth To Agriculture",
  description: "Experience the ultimate guiding journey with expert tips, premium gear, and professional insights.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
