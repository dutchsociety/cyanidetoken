import Image from 'next/image'
import Hero from './hero'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section id="hero" className='bg-gold'>
        <div className='container'>
          <Hero />
        </div>
      </section>

      <div>
        <section id="about" className='relative overflow-hidden min-h-[600px] bg-primary py-32'>
          <Image className='absolute bottom-0 left-1/2 translate-x-[-120%] w-auto min-h-[70%] max-h-[500px]' src="/images/about-us.png" width={900} height={512} alt="about" />
          <div className='container'>
            <div className='grid md:grid-cols-2 gap-10'>
              <div></div>
              <div className='space-y-12'>

                <h1 className="mt-10 text-4xl font-black uppercase tracking-tight text-gold sm:text-6xl">
                  About Cyanide token
                </h1>

                <p className='text-xl'>
                  Are you a sucker for Cyanide & Happiness? Or just mad because you fucking missed PepeShibaCumGMElonKishuTurboAssFlokiMoon? Don&lsquo;t worry, Cyanide got your back. This is your chance in joining the most mememic, iconic community out there. Togehter we are strong, together we going to dominate the Web3 Space and take of Social Media. JOIN THE CULT.
                </p>
                <p className='text-xl'>
                  <span className='text-gold'>$CYAN</span> is here to bring a new ERA of MEMEcoins. We are the FIRSY and ONLY MEME that will bring real utility by dropping a MEME dApp to our amazing community shortly. Also be ready for our upcoming NFT collection. You definitely don&lsquo;t want to miss out on that one, because that will change your life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="buy" className='bg-secondary py-32'>
          <div className='container'>
            <div className='flex flex-col items-center justify-center text-center'>
              <h2 className="mt-10 text-4xl font-black uppercase tracking-tight text-success sm:text-6xl">HOW TO BUY $CYAN</h2>

              <div className='grid gap-10 mt-20'>
                <div className='bg-secondarydark border-4 border-primary rounded-2xl p-4 md:p-12 text-white space-y-4'>

                  <p className='text-2xl uppercase'>Create a Wallet</p>

                  <p className='text-xl'>Download MetaMask or your wallet of choice from the app store or google play store for free. Desktop users, download the Google Chrome extension by going to <Link className='underline text-gold' href="MetaMask.io" target='_blank'>MetaMask.io</Link>.</p>
                </div>
                <div className='bg-secondarydark border-4 border-primary rounded-2xl p-4 md:p-12 text-white space-y-4'>

                  <p className='text-2xl uppercase'>Get Some ETH</p>

                  <p className='text-xl'>Have BNB in your wallet to switch to <span className="text-primary">$CYAN</span>. If you don&lsquo;t have any BNB, you can buy directly on MetaMask, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>
                </div>
                <div className='bg-secondarydark border-4 border-primary rounded-2xl p-4 md:p-12 text-white space-y-4'>

                  <p className='text-2xl uppercase'>Go to PancakeSwap</p>

                  <p className='text-xl'>Connect to PancakeSwap. Go to  <Link className='underline text-gold' href="pancakeswap.finance" target='_blank'>PancakeSwap.finance</Link> in google chrome or on the browser inside your MetaMask app. Connect your wallet. Paste the <span className="text-primary">$CYAN</span> token address into PancakeSwap, select <span className="text-primary">$CYAN</span>, and confirm. When MetaMask prompts you for a wallet signature, sign.</p>
                </div>
                <div className='bg-secondarydark border-4 border-primary rounded-2xl p-4 md:p-12 text-white space-y-4'>

                  <p className='text-2xl uppercase'>Switch ETH for $CYAN</p>

                  <p className='text-xl'>Switch BNB for <span className="text-primary">$CYAN</span>. We have ZERO taxes so you don&lsquo;t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tokenomics" className='bg-success py-32'>
          <div className='container'>
            <div className='flex justify-center text-center'>
              <h3 className="mt-10 text-4xl font-black uppercase tracking-tight text-secondary sm:text-6xl">$CYAN Tokenomics</h3>
            </div>
            <div className='grid md:grid-cols-2 gap-10 mt-20'>
              <div className='text-2xl text-center'>
                Token Supply:<br />
                69.669.669.696.969
              </div>
              <div className='space-y-8'>

                <p className='text-xl'>No Taxes, No Bullshit. It&lsquo;s that simple.</p>

                <p className='text-xl'>85% of the entire supply is been send to the LP and thus in hands of our community.</p>

                <p className='text-xl'>LP Tokens where burned, the contract renounced.</p>

                <p className='text-xl'>10% is being used for Dex and Cex listings</p>

                <p className='text-xl'>5% will be used for marketing and weekly giveaways</p>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className='bg-gold py-32'>
          <div className='container space-y-8'>
            <div className='flex flex-col justify-center items-center text-center space-y-8'>
              <h3 className="mt-10 text-4xl font-black uppercase tracking-tight text-primary sm:text-6xl">$CYAN Roadmap</h3>

              <div className='w-6/12 text-xl'>
                On thing we don&lsquo;t MEME about with <span className='text-primary'>$CYAN</span> is our path forward. Since the founders don&lsquo;t want to givaway to much, here a draft of what&lsquo;s coming ;)
              </div>
            </div>
            <div className='grid md:grid-cols-3 gap-10 text-center'>
              <div>
                <h4 className='text-2xl uppercase font-black text-primary'>Phase 1</h4>
                <ul className='mt-8 text-xl'>
                  <li>Launch</li>
                  <li>Launch 3 Weekly Giveaways</li>
                  <li>CoinMarketCap Listings</li>
                  <li>CoinGecko Listings</li>
                  <li>1,000+ Holders</li>
                </ul>
              </div>
              <div>
                <h4 className='text-2xl uppercase font-black text-primary'>Phase 2</h4>
                <ul className='mt-8 text-xl'>
                  <li>Get <span className="text-primary">$CYAN</span> Trending on twitter</li>
                  <li>Formation of token gated discord group, Cyan Comic, for holders, more details tba</li>
                  <li>CEX Listings 10,000+holders</li>
                  <li>TrustWallet 10,000+holders</li>
                </ul>
              </div>
              <div>
                <h4 className='text-2xl uppercase font-black text-primary'>Phase 3</h4>
                <ul className='mt-8 text-xl'>
                  <li>Get treding <span className="text-primary">$CYAN</span> on different T1 sites</li>
                  <li><span className="text-primary">$CYAN</span> MEME dApp</li>
                  <li>T1 Exchange Listings 100,000+ holders</li>
                  <li>Meme Takeover</li>
                  <li>Official 3D NFT collection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
