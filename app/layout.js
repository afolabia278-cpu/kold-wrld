import "./globals.css";

export const metadata = {
  title: "KOLD WRLD — The Cold Room",
  description: "Kids Who Had To Grow Up Cold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
