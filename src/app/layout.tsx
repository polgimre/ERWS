import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "ERWS - Egyenruha Webshop",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
