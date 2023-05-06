import Link from "next/link"

interface IStyledLinkProps {
  children: React.ReactNode
  color?: string
  size?: string
  to: string
  hide?: boolean
  target?: string
  disable?: boolean
}

export const StyledLink = ({ children, ...props }: IStyledLinkProps) => {
  const { to, color, hide, size, target, disable } = props
  return (
    <>
      {hide && disable ? (
        <div className="bg-gray-400 border-2 border-transparent uppercase text-black font-button duration-200 rounded-2xl py-1 px-4 select-none">
          {children}
        </div>
      ) : (
        <Link
          href={to}
          target={target}
          className={`
          ${size === 'sm' ? "px-2 py-1" : size === 'lg' ? 'px-4 md:px-8 py-2 md:py-4 text-lg' : 'px-4 py-2'}
          ${color === disable ? 'bg-gray-400 hover:text-primary hover:bg-black hover:border-primary' :
              color === 'white' ? 'bg-white hover:text-white hover:bg-transparent hover:border-white' :
                'bg-primary hover:bg-transparent hover:border-primary hover:text-primary'
            } 
          border-2 border-transparent uppercase text-black font-button duration-200 rounded-full py-1 px-4`}
        >
          {children}
        </Link>
      )}
    </>
  )
}
