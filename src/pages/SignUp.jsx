import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../context/AuthProvider';
import { userContext } from '../context/UserProvider';
import firebase from '../firebase/firebase'


const SignUp = () => {

    const {userInfo , setUserInfo , errors} = useContext(firebaseAuth);
    const {user , auth , setUser} = useContext(userContext);

    console.log(userInfo);

    const handleSignUp = async (e) => {
        console.log("handleSignUp")
        e.preventDefault();
        try{
          var res = await auth.createUserWithEmailAndPassword(userInfo.email , userInfo.password);
        //   console.log(res.user);
          const newUser = res.user;
          setUser(newUser);
          newUser.sendEmailVerification();
          console.log(user)
        }catch(e){
          console.log(e);
        }
      }

    return ( 
    // <div classNameName={"h-screen flex items-center login-container bg-purple-500"}>
    //     <div classNameName="w-full md:w-72 p-4 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    //         <h1 classNameName="text-3xl font-semibold text-center text-gray-700 dark:text-white">Formsnow</h1>
    //         <form classNameName="mt-1">
    //             <div>
    //                 <label htmlFor="username" classNameName="block text-sm text-gray-800 dark:text-gray-200">Email</label>
    //                 <input type="text" classNameName="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={(e)=> setUserInfo({...userInfo , email: e.target.value})}/>
    //             </div>

    //             <div classNameName="mt-4">
    //                 <div classNameName="flex items-center justify-between">
    //                     <label htmlFor="password" classNameName="block text-sm text-gray-800 dark:text-gray-200">Password</label>
    //                     <a href="#" classNameName="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
    //                 </div>

    //                 <input type="password" classNameName="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={(e)=> setUserInfo({...userInfo , password: e.target.value})}/>
    //             </div>

    //             <div classNameName="mt-4">
    //                 <button classNameName="w-full px-4 py-1 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={handleSignUp}>
    //                     Signup
    //                 </button>
    //                 {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
    //             </div>
    //         </form>

    //         <div classNameName="flex items-center justify-between mt-4">
    //             <span classNameName="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

    //             <a href="#" classNameName="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with
    //                 Social Media</a>

    //             <span classNameName="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    //         </div>

    //         <div classNameName="flex items-center mt-4 space-x-3">
    //             <button type="button"
    //                 classNameName="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
    //                 <svg classNameName="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
    //                     <path
    //                         d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
    //                     </path>
    //                 </svg>

    //                 <span>Signin with Google</span>
    //             </button>

    //             <a href="#"
    //                 classNameName="p-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200">
    //                 <svg classNameName="w-5 h-5 fill-current" viewBox="0 0 24 24">
    //                     <path
    //                         d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
    //                     </path>
    //                 </svg>
    //             </a>
    //         </div>

    //         <p classNameName="mt-4 text-xs font-light text-center text-gray-400"> Don't have an account? 
    //         <a href="#" classNameName="font-medium text-gray-800 dark:text-gray-200 hover:underline">Create One</a></p>
    //     </div>
    // </div>
    <div className={"h-screen flex justify-center items-center"}>
    <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow-2xl dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
            Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Already have an account ?
            <Link to={'log-in'} className="text-sm text-blue-500 underline hover:text-blue-700">
                Sign in
            </Link>
        </span>
        <div class="mt-8">
        <form action="#" autoComplete="off">
            <div class="flex flex-col mb-2">
                <div class="flex relative ">
                    <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </span>
                    <input type="text" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" onChange={(e)=> setUserInfo({...userInfo , email: e.target.value})}/>
                    </div>
                </div>
                <div class="flex flex-col mb-6">
                    <div class="flex relative ">
                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                </path>
                            </svg>
                        </span>
                        <input type="password" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" onChange={(e)=> setUserInfo({...userInfo , password: e.target.value})}    />
                        </div>
                    </div>
                    <div class="flex w-full">
                        <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={handleSignUp}>
                            Sign up
                        </button>
                    </div>
                </form>
            </div>    
        </div>
    </div>
    );
}
 
export default SignUp;