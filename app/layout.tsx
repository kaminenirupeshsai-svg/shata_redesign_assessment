import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { BookingProvider } from '@/context/BookingContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Shata 2.0 — India’s #1 Event Booking & Partner Platform',
  description: 'Book verified photographers, gourmet caterers, floral decorators & planners across Hyderabad, Bengaluru, Vizag & 76+ cities with instant escrow protection.',
  keywords: 'event booking India, wedding photography Hyderabad, catering Bengaluru, event planners Vizag, Shata 2.0, shata.in, theshata.com, shatapartner.com',
  openGraph: {
    title: 'Shata 2.0 — Where Every Celebration Becomes Legend',
    description: 'Directly book verified event service providers with transparent pricing and live milestone tracking.',
    url: 'https://theshata.com',
    siteName: 'Shata 2.0',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shata 2.0 — India’s #1 Event Booking Platform',
    description: 'Where every celebration becomes legend. Verified partners across 76+ cities.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Shata Events Pvt Ltd',
              url: 'https://theshata.com',
              logo: 'https://theshata.com/shata_logo.svg',
              description: 'India’s #1 online event booking platform and partner operating system.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-accent selection:text-white">
        <ThemeProvider>
          <BookingProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
