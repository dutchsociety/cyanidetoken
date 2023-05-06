import Link from "next/link"
import { StyledLink } from "../elements/StyledLink"
import { socials } from "@/data/data"
import Image from "next/image"

export const Footer = () => {
    let year = new Date().getFullYear()

    const data = socials

    return (
        <footer
            className="bg-black"
            aria-labelledby="footer-heading"
            id="newsletter"
        >
            <div className="container py-16">
                <div className="mx-auto w-6/12 space-y-8 text-center">
                    
                    <p className="text-xl text-white"><span className="text-primary">$CYAN</span> coin has no association with Explosm or their creation Cyanide & Happiness. This tokens put the stories from Cyanide in the spotlights and will bring a smile on everyones face watching the series.</p>

                    <p className="text-xl text-white">$CYAN is a meme coin and is here to build a community of cyanide lovers with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.</p>
                </div>
                <div className="md:grid grid-cols-3 md:gap-8">
                    <div className="flex items-center justify-center md:justify-start md:items-start">
                        <div>
                            <Image
                                width={100}
                                height={80}
                                src="/images/logo.png"
                                alt="HELLO"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-start md:items-center md:justify-center">
                        <div className="flex items-center space-x-3 md:space-x-6 justify-center mx-auto md:mx-0">
                            {data?.map((social, x) => (
                                <Link
                                    key={x}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div
                                        className="fill-white"
                                        dangerouslySetInnerHTML={{ __html: social.icon }}
                                    ></div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-end lg:items-center lg:justify-end h-full space-y-8 lg:space-y-0 lg:space-x-4 text-center">
                        <div className="uppercase text-white font-black mx-auto md:mx-0">
                            Cyanide Token | No © {year}
                        </div>
                        <div className="mx-auto md:mx-0">
                            <StyledLink
                                to="https://bscscan.com/address/#"
                                target="_blank"
                                color="primary"
                            >
                                $CYAN: #
                            </StyledLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
