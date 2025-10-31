import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { BookingModalProvider } from '@/components/BookingModalProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eva Family Relaxation Spa - Premium Spa Services in Baramati",
  description: "Experience ultimate relaxation and rejuvenation at Eva Family Relaxation Spa. We offer premium spa services including massage therapy, body treatments, facial care, and wellness packages in Baramati.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BookingModalProvider>
          {children}
          <FloatingActionButtons />
        </BookingModalProvider>
      </body>
    </html>
  );
}
