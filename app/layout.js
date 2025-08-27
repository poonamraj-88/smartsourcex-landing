
import "./globals.css";

export const metadata = {
  title: "SmartSourceX — Subscription Recruitment",
  description: "Predictable, scalable hiring on subscription."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
