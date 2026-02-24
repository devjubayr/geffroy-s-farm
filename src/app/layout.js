export const metadata = {
  title: "Geffroy's Farm — A Gateway to Sustainable Food Security",
  description:
    "Providing produce farmed with eco-friendly and innovative methods for food that is good for the Seychellois and the environment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
