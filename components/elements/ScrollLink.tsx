"use client"
import Link, { LinkProps } from "next/link"
import React, { PropsWithChildren } from "react"
// mirror the props of next/link component
type AnchorProps = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps
>


interface IStyledLinkProps {
    children: React.ReactNode
    color?: string
    size?: string
    target?: string
}
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren & IStyledLinkProps

// component definition
export const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
    const { color, size } = props

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        //remove everything before the hash
        const targetId = e.currentTarget.href.replace(/.*\#/, "")

        const destination = document.getElementById(targetId);
        if (destination) destination.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <Link {...props} onClick={handleScroll} scroll={true}
            className={`
    ${size === 'sm' ? "px-2 py-1" : size === 'lg' ? 'px-4 md:px-8 py-2 md:py-4 text-lg' : 'px-4 py-2'}
    ${color === 'white' ? 'bg-white hover:text-white hover:bg-transparent hover:border-white' :
                    'bg-primary hover:bg-transparent hover:border-primary hover:text-primary'
                } 
    border-2 border-transparent uppercase text-black font-button duration-200 rounded-full py-1 px-4`}>
            {children}
        </Link>
    )
}
