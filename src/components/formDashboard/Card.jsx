import React from 'react';

const Card = ({noOfResponses , children}) => {
    return (
        <div class="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
                <div class="text-base text-gray-400 dark:text-gray-300">{children}</div>
                <div class="flex items-center pt-1">
                    <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">{noOfResponses && noOfResponses}</div>
                </div>
           </div>
     );
}

export default Card;
