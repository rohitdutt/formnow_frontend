import React from 'react';
import Error from '../assets/error.jpg';
import {Link, useParams} from "react-router-dom";

const NotFound = () => {

    const {error} = useParams();

    if(error == "coming-soon"){
        return(
            <div className={"relative"}>
                <Link to={'/organization-home'}>
                    <h1 className="hidden lg:block absolute top-12 left-20 font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        Formnow
                    </h1>
                </Link>
                <div className={"lg:hidden w-full flex justify-center pt-6"}>
                    <Link to={'/organization-home'}>
                        <h1 className="font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Formnow
                        </h1>
                    </Link>
                </div>
                <div className={"h-auto lg:h-screen w-screen lg:grid lg:grid-cols-2"}>
                    <div className={"flex justify-center items-center"}>
                        <img className={"h-2/6 w-3/5 lg:h-3/6 lg:w-4/6"} src={Error}/>
                    </div>
                    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                        <div className="container mx-auto px-6 flex relative py-16">
                            <div className="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                                <h1 className="font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                    The page you were looking for is still under progress.
                                    <span className="text-xl sm:text-xl text-indigo-500">
                                    Page will be available for you as soon as possible.
                                </span>
                                </h1>
                                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                                    While our team is building things up for you if you want to write something may be any new feature or a feedback feel free to write us.
                                </p>
                                <div className="flex mt-4">
                                    <Link to={'/organization-home'}>
                                        <div className="uppercase py-2 px-4 rounded-lg bg-indigo-500 border-2 border-transparent text-white text-md mr-4">
                                            Go Home
                                        </div>
                                    </Link>
                                    <Link to={'/write-us'}>
                                        <div className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-indigo-500 text-indigo-500 dark:text-white hover:bg-indigo-500 hover:text-white text-md">
                                            Write us
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return(
      <div className={"relative"}>
          <Link to={'/organization-home'}>
              <h1 className="hidden lg:block absolute top-12 left-20 font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                  Formnow
              </h1>
          </Link>
          <div className={"lg:hidden w-full flex justify-center pt-6"}>
              <Link to={'/organization-home'}>
                  <h1 className="font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                      Formnow
                  </h1>
              </Link>
          </div>
          <div className={"h-auto lg:h-screen w-screen lg:grid lg:grid-cols-2"}>
              <div className={"flex justify-center items-center"}>
                <img className={"h-2/6 w-3/5 lg:h-3/6 lg:w-4/6"} src={Error}/>
              </div>
              <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                  <div className="container mx-auto px-6 flex relative py-16">
                      <div className="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                          <h1 className="font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                              We also don't know what went wrong!
                              <span className="text-xl sm:text-xl text-indigo-500">
                                    We automatically registered the fault and we'll definitely look into it.
                                </span>
                          </h1>
                          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                              While our team is looks for fault if you want to write something else may be more details about fault or a feedback feel free to write us.
                          </p>
                          <div className="flex mt-4">
                              <Link to={'/organization-home'}>
                                  <div className="uppercase py-2 px-4 rounded-lg bg-indigo-500 border-2 border-transparent text-white text-md mr-4">
                                      Go Home
                                  </div>
                              </Link>
                              <Link to={'/write-us'}>
                                  <div className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-indigo-500 text-indigo-500 dark:text-white hover:bg-indigo-500 hover:text-white text-md">
                                      Write us
                                  </div>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default NotFound;