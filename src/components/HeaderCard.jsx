import React from 'react';

const HeaderCard = ({title , description}) => {
    return ( 
        <div className="shadow-lg h-auto rounded-2xl p-4 mt-6 mb-2 bg-white dark:bg-gray-900 w-2/5 m-auto ">
            <div className="w-full h-auto text-center">
                <div className="flex h-auto flex-col justify-between">
                    <p className="text-gray-600 dark:text-white text-3xl font-semibold">
                        {title}
                    </p>
                    {
                        description === ""
                        ?
                        ""
                        :
                        (
                            <p className="dark:text-gray-50 h-auto text-gray-700 text-sm font-thin py-2 px-6 break-all">
                                {description}
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
 
export default HeaderCard;