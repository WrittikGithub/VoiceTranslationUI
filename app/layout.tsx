import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Langlex AI - Voice Translation",
  description: "Langlex AI turns your voice into clear text in real time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = theme === 'dark' || (!theme && prefersDark);
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
