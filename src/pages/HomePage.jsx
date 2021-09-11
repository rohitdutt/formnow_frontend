import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import HomePageImage from "../assets/homePageImage.svg";
import Spinner from '../components/common/Spinner';
import {Drawer, List, ListItem} from "@material-ui/core";

const HomePage = () => {

    const [isAppbarOpen , setIsAppbarOpen] = useState(false);

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsAppbarOpen(false);
    };

    return (
        <>
            <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-auto md:h-screen">
                <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <Link to={'/'}>
                            <div className="uppercase text-indigo-600 hover:underline dark:text-white font-black text-3xl">
                                FormNow
                            </div>
                        </Link>
                        <div className="flex items-center">
                            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                                <Link to={'/'}>
                                    <div className="py-2 px-6 flex hover:underline">
                                        Home
                                    </div>
                                </Link>
                                <Link to={'/products'}>
                                    <div className="py-2 px-6 flex hover:underline">
                                        Product
                                    </div>
                                </Link>
                                <Link to={'/write-us'}>
                                    <div className="py-2 px-6 flex hover:underline">
                                        Contact
                                    </div>
                                </Link>
                                <Link to={'/log-in'}>
                                    <div className="py-2 px-6 flex hover:underline">
                                        Sign in/up
                                    </div>
                                </Link>
                            </nav>
                            <button className="lg:hidden flex flex-col ml-32" onClick={() => setIsAppbarOpen(true)}>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                                </span>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                                </span>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                                </span>
                            </button>
                        </div>
                        <div className={"md:hidden"}>
                            <Drawer anchor={'right'} open={isAppbarOpen} onClose={toggleDrawer('right', false)}>
                                <List>
                                    <ListItem>
                                        <Link to={'/'}>
                                            <div className="py-2 px-6 flex hover:underline">
                                                Home
                                            </div>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to={'/products'}>
                                            <div className="py-2 px-6 flex hover:underline">
                                                Product
                                            </div>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to={'/write-us'}>
                                            <div className="py-2 px-6 flex hover:underline">
                                                Contact
                                            </div>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to={'/log-in'}>
                                            <div className="py-2 px-6 flex hover:underline">
                                                Sign in/up
                                            </div>
                                        </Link>
                                    </ListItem>
                                </List>
                            </Drawer>
                        </div>
                    </div>
                </header>
                <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex relative py-0 md:py-10">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-10">
                            </span>
                            <h1 className="font-bebas-neue uppercase text-3xl sm:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                Build your new
                                <span className="text-4xl sm:text-7xl text-indigo-600">
                                    idea
                                </span>
                            </h1>
                            <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-white">
                                Forms are more powerfull than you ever thaught , with formsnow simply use forms for your every need . we provide solutions for Organizations and stores , get analytics for your forms so you can get hidden insight which might be hidden from you
                            </p>
                            <div className="flex flex-col md:flex-row mt-4">
                                <Link to={'/create-form'}>
                                    <div className="uppercase w-full md:w-36 mt-2 md:mt-0 py-2 px-4 rounded-lg bg-indigo-600 border-2 border-transparent text-white text-md mr-4 hover:bg-indigo-800">
                                        Get started
                                    </div>
                                </Link>
                                <Link to={'/all-forms'}>
                                    <div className="uppercase w-full md:w-32 mt-5 md:mt-0 py-2 px-4 rounded-lg bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-600 hover:text-white text-md">
                                        Read more
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block sm:w-1/3 lg:w-3/5 mt-16 relative">
                            <img src={HomePageImage} alt={"homepage"} className="max-w-xs md:max-w-sm m-auto"/>
                        </div>
                    </div>
                </div>
            </main>
            <Spinner/>
        </>
    );
}

export default HomePage;
