import type { Metadata } from "next";
import "./globals.css";
import ModernHeader from "@/components/layout/ModernHeader";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "ScriptLabs - AI-Powered Development Studio | Web, Mobile & Web3",
  description: "Creating innovative solutions out of thin air. ScriptLabs specializes in AI-powered applications, custom web and mobile development, and Web3 technologies.",
  keywords: "AI development, custom software, web development, mobile apps, blockchain, Web3, SaaS platforms",
  authors: [{ name: "ScriptLabs Studios" }],
  icons: {
    icon: [
      { url: '/scriptlabs-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "ScriptLabs - AI-Powered Development Studio",
    description: "Creating innovative solutions out of thin air",
    url: "https://scriptstudio8.com",
    siteName: "ScriptLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScriptLabs - AI-Powered Development Studio",
    description: "Creating innovative solutions out of thin air",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <ModernHeader />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
