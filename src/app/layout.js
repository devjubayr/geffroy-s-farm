import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export const metadata = {
  title: "Geffroy's Farm — A Gateway to Sustainable Food Security",
  description:
    "Providing produce farmed with eco-friendly and innovative methods for food that is good for the Seychellois and the environment.",
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
