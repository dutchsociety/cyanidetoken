interface TitleProps {
  children: React.ReactNode
  className?: string
}

export const H1 = ({ children }: TitleProps) =>{
  return (
    <h1 className="flex text-2xl font-black uppercase tracking-tight text-white sm:text-4xl pl-8 border-primary border-l-4">
      {children}
    </h1>
  )
}

export const H2 = ({ children }: TitleProps) => {
  return (
    <h2 className="text-primary text-2xl font-black uppercase">
      {children}
    </h2>
  )
}

export const H3 = ({ children }: TitleProps) => {
  return (
    <h3 className="text-primary text-xl font-black">
      {children}
    </h3>
  )
}

export const H4 = ({ children, className }: TitleProps) => {
  return (
    <h4 className={`text-white text-2xl font-black uppercase pl-8 border-primary border-l-4 ${className}`}>
      {children}
    </h4>
  )
}

export const H5 = ({ children, className }: TitleProps) => {
  return (
    <h5 className={`text-primary text-xl font-black uppercase ${className}`}>
      {children}
    </h5>
  )
}