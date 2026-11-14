
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kold-wrld.netlify.app"),

  title: "KOLD WRLD — The Cold Room",

  description:
    "KOLD WRLD — Kids Who Had To Grow Up Cold. An independent fashion label born in Lagos, Nigeria.",

  openGraph: {
    title: "KOLD WRLD — The Cold Room",
    description:
      "The World Doesn't Owe You Warmth. An archive of a frozen world.",
    url: "https://kold-wrld.netlify.app",
    siteName: "KOLD WRLD",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/warmth-tee-front.png.jpg",
        alt: "KOLD WRLD — The Warmth Tee",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KOLD WRLD — The Cold Room",
    description:
      "The World Doesn't Owe You Warmth.",
    images: ["/warmth-tee-front.png.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
