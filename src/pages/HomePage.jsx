import React , {useEffect , useContext}from 'react';
import { Link , useHistory } from 'react-router-dom';
import HomePageImage from "../assets/homePageImage.svg";
import Spinner from '../components/common/Spinner';
import UserDropdown from '../components/UserDropdown';
import { userContext } from '../context/UserProvider';
import { spinnerContext } from "../context/SpinnerProvider";

const HomePage = () => {

    const {user , auth} = useContext(userContext);
    const {setShowSpinner} = useContext(spinnerContext);
    const history = useHistory();

    useEffect(()=>{
        setShowSpinner(true);
        auth.onAuthStateChanged((user) => {
            if (user) {
                setShowSpinner(false)
            }else{
                history.push('/log-in')
            } 
          });
    })

    return ( 
        <div>
        <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
            <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to={'/'}>
                        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                            Forms.Now
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
                            <Link to={'/contact'}>
                                <div className="py-2 px-6 flex hover:underline">
                                    Contact
                                </div>
                            </Link>
                            {/* {
                                user ?
                                (<UserDropdown>{user.email.split('@')[0]}</UserDropdown>)
                                :    
                                (<Link to={'log-in'}>
                                    <div className="py-2 px-6 flex">
                                        Login
                                    </div>
                                </Link>)
                            } */}
                        </nav>
                        <button className="lg:hidden flex flex-col ml-4">
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                        </button>
                    </div>
                </div>
            </header>
            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 className="font-bebas-neue uppercase text-5xl sm:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Build your new
                            <span className="text-5xl sm:text-7xl text-indigo-500">
                                idea
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                            Forms are more powerfull than you ever thaught , with formsnow simply use forms for your every need . we provide solutions for Organizations and stores , get analytics for your forms so you can get hidden insight which might be hidden from you
                        </p>
                        <div className="flex mt-4">
                            <Link to={'/create-form'}>
                                <div className="uppercase py-2 px-4 rounded-lg bg-indigo-500 border-2 border-transparent text-white text-md mr-4">
                                    Get started
                                </div>
                            </Link>
                            <Link to={'/all-forms'}>
                                <div className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-indigo-500 text-indigo-500 dark:text-white hover:bg-indigo-500 hover:text-white text-md">
                                    Read more
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src={HomePageImage} className="max-w-xs md:max-w-sm m-auto"/>
                    </div>
                </div>
            </div>
        </main>
        <Spinner/>
        </div>
    );
}
 
export default HomePage;