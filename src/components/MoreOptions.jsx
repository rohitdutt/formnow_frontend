import React ,{Fragment} from 'react';
import { Menu ,Transition } from '@headlessui/react';
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useContext } from 'react/cjs/react.development';
import { userContext } from '../context/UserProvider';
import { Redirect, useHistory } from 'react-router';

const MoreOptions = ({children,id}) => {

    const {user, setUser , auth} = useContext(userContext);
    const history = useHistory();

    const handleSignout =async () =>{
        console.log(user);
        await auth.signOut();
        setUser(null);
        console.log(user);
        console.log(auth.currentUser);
    }

    return ( 
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex text-gray-800 dark:text-white uppercase text-lg justify-center w-full px-4 py-2 font-medium rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:underline">
                            {children}
                        </Menu.Button>
                    </div>
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <div className="px-1 py-1">
                                <Menu.Item>
                                    <button className={"bg-violet-500 text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-md z-50"} onClick={()=> history.push(`form/${id}`)}>
                                        View form
                                    </button>
                                </Menu.Item>
                            </div>
                            <div>
                                <Menu.Item>
                                    <button className={"bg-violet-500 text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-md z-50"}>
                                        Edit form
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
                )}
            </Menu>
        </div>
    );
}

export default MoreOptions;