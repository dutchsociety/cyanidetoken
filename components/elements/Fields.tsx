import { ReactEventHandler } from "react"

interface IFieldTemplate {
    type: "text" | "url" | "email" | "date" | "datetime-local" | "file" | "tel" | "number" | "checkbox" | "radio" | "hidden"
    name: string
    value?: string | number
    placeholder?: string
    className?: string
    required?: boolean
    id?: string
    min?: number | string
    max?: number | string
    maxLength?: number
    disabled?: boolean
    accept?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Fields = (props: IFieldTemplate) => {
    const { type, accept, name, value, id, placeholder, required, className, disabled, onChange, min, max, maxLength } = props
    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                id={id}
                min={min}
                max={max}
                autoComplete="off"
                maxLength={maxLength}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                accept={accept}
                className={`block w-full px-4 py-4 rounded-md font-sans border-gray-600 shadow-sm text-md text-white bg-[#131724] focus:ring-primary duration-200 ${className}`}
            />
        </>
    )
}