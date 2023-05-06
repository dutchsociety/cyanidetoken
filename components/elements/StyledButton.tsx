interface IButtonTemplate {
    type: "button" | "submit" | "reset"
    color: string
    size: "sm" | "base" | "lg"
    className?: string
    onClick?: () => void
    disabled?: boolean
    id?: string
    name?: string
    autoFocus?: boolean
    children: React.ReactNode
}

declare module 'react' {
    interface HTMLAttributes<T> {
        size?: string
    }

    interface HTMLProps<T> {
        size?: string;
    }
}

export const StyledButton = (props: IButtonTemplate) => {
    const { type, className, name, color, size, onClick, disabled, autoFocus, id, children } = props
    return (
        <>
            <button
                name={name}
                type={type}
                color={color}
                size={size}
                className={`
                    flex items-center justify-center text-center rounded-full border border-transparent text-md font-button shadow-sm duration-200 uppercase
                    ${size === 'sm' ? "px-2 py-1" : size === 'lg' ? 'px-4 md:px-8 py-2 md:py-4 text-lg' : 'px-4 py-2'}
                    ${color === 'primary-ghost' ? "bg-transparent border-primary-base border-1 text-white hover:bg-primary-base" : 
                    color === 'black' ? "bg-black border-black border-2 text-primary hover:border-black hover:text-black hover:bg-transparent" : 
                    color === 'success' ? 'bg-[#30FF15] text-black hover:bg-[#30FF15]/80' : 
                    color === 'white' ? 'bg-white text-black hover:bg-transparent hover:text-white border-white ' : 
                    color === 'warning' ? 'bg-warning-base text-white hover:bg-warning-light' : 
                    color === 'danger' ? 'bg-[#F80F22] text-white hover:bg-[#F80F22]/80' :
                    color === 'disabled' ? '!bg-gray-600 text-white' :
                    "bg-primary text-black hover:bg-transparent hover:text-primary hover:border-primary"}
                    ${className}
                `}
                onClick={onClick}
                disabled={disabled}
                autoFocus={autoFocus}
                id={id}
            >
                {children}
            </button>
        </>
    )
}