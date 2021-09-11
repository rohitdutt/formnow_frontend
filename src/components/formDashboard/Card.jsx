import React from 'react';

const Card = ({number, children, icon}) => {
    return (
        <div className="w-full">
            <div
                className="widget bg-indigo-600 w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <div className="text-xs uppercase font-light text-white">
                            {children}
                        </div>
                        <div className="mt-2 text-xl font-bold text-white">
                            {number}
                        </div>
                    </div>
                    {icon}
                </div>
            </div>
        </div>
     );
}

export default Card;
