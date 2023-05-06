import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { Fragment, useState } from "react"

// export const Dropdown = ({data, select, set, input, name}: {name?: string, data:any, select:any, set:any, input?:any}) => {
export const Dropdown = ({
  data,
  input,
  name,
  value,
  formData,
  checkValidation
}: {
  name: string
  data: any
  input: any
  value: string
  formData?: any
  checkValidation?: any
}) => {
  return (
    <Listbox
      value={value || "Please select"}
      onChange={(e) => {
        // set(e),

          formData && input({
            ...formData,
            [`${name}`]: e
          }),
          !formData && input(e),

          checkValidation && checkValidation({
            name: [`${name}`],
            value: e? true: false
          })
      }}
      
    >
      {({ open }) => (
        <>
          <div className="relative mt-1" id={name}>
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-600 bg-[#131724] duration-200 px-4 pt-4 pb-5 pr-10 text-left shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm">
              <span className="block truncate text-md text-[rgb(107,114,128)] font-sans capitalize">
                {value || "Please select"}
              </span>
              {/* <span className="block truncate text-md text-[rgb(107,114,128)] font-sans">{select ? select : data[0]}</span> */}
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full py-4 overflow-auto rounded-md bg-darkblue text-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data.map((type: any, i: number) => (
                  <Listbox.Option
                    key={i}
                    // className={({ active }) => { `${active ? 'text-white bg-primary' : 'text-white'} relative select-none hover:bg-primary` }}
                    value={type}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected
                              ? "bg-primary !text-black font-sans"
                              : "font-sans"
                          } flex text-white hover:text-primary hover:bg-slate-600 duration-200 py-2 px-4 text-base truncate cursor-pointer`}
                        >
                          {type}

                          {selected ? (
                            <span className={`text-gray ml-auto`}>
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
