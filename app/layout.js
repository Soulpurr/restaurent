import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buddha's Restaurant",
  description:
    "Experience the serene flavors of the East at Buddha's Restaurant, nestled in the heart of Estonia. Indulge in a culinary journey inspired by the wisdom and tranquility of Buddha himself. From aromatic spices to delicate textures, each dish is meticulously crafted to transport you to a realm of culinary enlightenment. Join us and savor the essence of authentic Asian cuisine in the charming ambiance of Estonia.",
  openGraph: {
    title: "Buddha's Restaurant",
    description:
      "Experience the serene flavors of the East at Buddha's Restaurant, nestled in the heart of Estonia. Indulge in a culinary journey inspired by the wisdom and tranquility of Buddha himself. From aromatic spices to delicate textures, each dish is meticulously crafted to transport you to a realm of culinary enlightenment. Join us and savor the essence of authentic Asian cuisine in the charming ambiance of Estonia.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1260,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
