import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const inputType = ["input" , "large input" , "ratings"]


const SelectInputType = ({formFields , field , setFormFields }) =>{
  const [selectedType , setSelectedType] = useState("input")

  useEffect(()=>{
    const index = formFields.findIndex(item => item.id === field.id);
    const tempField = formFields[index];
    tempField['fieldType'] = selectedType;
    if (index === -1){
        console.log('no match')
    }
    else
        setFormFields([
            ...formFields.slice(0,index),
            tempField,
            ...formFields.slice(index+1)
        ]);
        console.log(formFields)
  },[selectedType]);

  return (
    <div className="w-40">
      <Listbox value={field.fieldType} onChange={setSelectedType}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selectedType}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {inputType.map((type, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 px-4`
                  }
                  value={type}
                >
                  {({ selectedType, active }) => (
                    <>
                      <span
                        className={`${
                          selectedType ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {type}
                      </span>
                      {selectedType ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center`}
                        >
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
};

export default SelectInputType;