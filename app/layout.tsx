import { Navigation } from '@/components/shared/Navigation'
import './globals.css'
import { Poppins } from 'next/font/google'
import { Footer } from '@/components/shared/Footer'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  display: 'swap',
  weight: ['400', '800'],

})

export const metadata = {
  title: 'Cyanide Launches $CYAN Token on Binance Smart Chain | Cyanide $CYAN',
  description: 'Discover $CYAN, the new token launched by a no formal team and roadmap on Binance Smart Chain. Join our community and experience the joy and humor of our popular webcomic in a whole new way. Get exclusive access to content, merchandise, and events as a $CYAN holder. Learn more about our vision and stay up-to-date with the latest news and updates on our website.',
  keywords: 'Binance Smart Chain, $CYAN,Cyanide & Happiness,Cryptocurrency,Blockchain,Decentralized Finance (DeFi),Tokenomics,Meme tokens,Moonshot,Investing,Trading,HODL,Altcoins,Crypto market,Digital assets,NFTs,Community, ROI, Yield farming, Liquidity mining.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HQXQ64GW7F"></Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=G-HQXQ64GW7F`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="hello"
          />
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HQXQ64GW7F');
  `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
