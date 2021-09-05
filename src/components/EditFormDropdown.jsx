import React , { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { deleteFormById } from '../httpResources/firebaseActions'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function EditFormDropdown({children, formId, isDeleteFired, setIsDeleteFired}) {
    return (
        <Menu as="div" className="relative inline-block text-left bg-white">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    {
                        children
                    }
                 </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items style={{zIndex: 1005}} className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    className={classNames(
                                        active ? 'bg-gray-100 text-red-500' : 'text-red-500',
                                        'block px-4 py-2 text-sm font-semibold cursor-pointer'
                                    )}
                                    onClick={()=> {
                                        deleteFormById(formId);
                                        setIsDeleteFired(!isDeleteFired);
                                    }}
                                >
                                    Delete form
                                </div>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
