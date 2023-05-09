"use client"
import { Fragment, useState } from "react"
import { Dialog, Popover, Transition } from "@headlessui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Buy", href: "#buy" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Roadmap", href: "#roadmap" }
]

export const Navigation = () => {
  const isActive = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full md:px-4 bg-gradient-to-b from-black`}
    >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full shadow-xl pb-12 flex flex-col justify-between overflow-y-auto bg-secondarydark z-30">
                <div className="px-4 pt-5 pb-2 flex justify-end">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-black"
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-10 w-10 text-primary"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Links */}

                <div className="flex flex-col py-6 px-4 space-y-6 h-screen">
                  {navigation.map((page, i) => (
                    <div key={i} className="flow-root">
                      <Link
                        href={page.href}
                        className={`${page.href === isActive
                          ? "text-primary"
                          : "text-gold"
                          } hover:text-primary font-black uppercase`}
                          onClick={() => { setOpen(false) }}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header>
        <nav aria-label="Top">
          <div className="container">
            {/* Logo (lg+) */}
            <div className="flex items-center py-4">
              <div className="w-20 lg:w-auto lg:flex-1 lg:items-center">
                <Link href="/" className="flex items-center cursor-pointer">
                  <Image
                  className="w-[80%] xl:w-auto"
                    width={100}
                    height={80}
                    src="/images/logo.png"
                    alt="Cyanide Token"
                  />

                  <span className="font-black uppercase text-gold text-4xl md:text-6xl ml-2">Cyanide</span>
                </Link>
              </div>

              <div className="hidden h-full lg:flex lg:mr-4">
                {/* Flyout menus */}
                <Popover.Group className="pl-4 bottom-0 inset-x-0">
                  <div className="h-full flex items-center justify-center space-x-6">
                    {navigation.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className={`${page.href === isActive
                          ? "text-primary"
                          : "text-gold"
                          } hover:text-primary font-button text-[18px] uppercase`}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </Popover.Group>
              </div>
              <div className="flex items-end lg:hidden ml-auto">
                <button
                  type="button"
                  className="-ml-2 p-2 rounded-md text-white"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
