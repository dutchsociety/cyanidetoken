import { socials } from '@/data/data'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="relative flex items-center justify-center isolate overflow-hidden">

            <div className="px-6 lg:px-0 lg:pt-4">
                <div className="mx-auto max-w-2xl">
                    <div className="max-w-lg">
                        <h1 className="mt-10 text-4xl font-black uppercase tracking-tight text-primary sm:text-6xl">
                            $CYAN
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-secondarydark">
                            Support your cult heroes, join our adventure to build the strongest and biggest MEME community in Web3.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">

                            <div className="flex flex-col items-start ">
                                <div className="flex space-x-3 md:space-x-6 justify-center sm:justify-start items-center mt-8 mx-auto md:mx-0">
                                    {socials?.map((social, x) => (
                                        <Link
                                            key={x}
                                            href={social.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className='bg-primary rounded-full p-4 hover:-translate-y-[5px] duration-200'
                                        >
                                            <div
                                                className="fill-white"
                                                dangerouslySetInnerHTML={{ __html: social.icon }}
                                            ></div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 sm:mt-24 ml-auto">

                <Image src={"/images/fuck-shibfloki.png"} width={458} height={546} alt="Hero" />

            </div>
        </div>
    )
}
