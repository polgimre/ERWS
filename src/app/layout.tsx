import "./globals.css";

export const metadata = {
  title: "ERWS - Egyenruha Webshop",
  description: "Egyenruha webshop vizsgafeladat Next.js-ben",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        {children}
      </body>
    </html>
  );
}
