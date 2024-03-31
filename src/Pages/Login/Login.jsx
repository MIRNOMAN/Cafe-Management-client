import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCloseing, setIsCloseing] = useState(false);
    const { signIn, googleSignIn,logOut,user } = useContext(AuthContext)
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

  

    const openModal = () => {
        setIsOpen(true)
        document.body.style.overflowX = "hidden";

    }

    const closeModal = () => {
        setIsCloseing(true)
        document.body.style.overflowX = "auto";
        setTimeout(() => {
            setIsOpen(false);
            setIsCloseing(false);
        }, 300);
    }

 

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            Swal.fire({
                title: "User Login successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
            
              navigate('/');
        })
    }

    const handleLogedOut = () => {
        logOut()
          .then(() => { })
          .catch(error => console.log(error));
      }

      const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result);
           const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
           }
           axiosPublic.post('/user/signup', userInfo)
           .then(result => {
            console.log(result);
            navigate('/')
           })
        })
     }
    

    return (
        <>
           
            {user ?  <button onClick={handleLogedOut} className='hover:text-blue-600 hover:font-semibold' >LogOut</button>   : <li className="list-none "><button onClick={openModal} className='hover:text-blue-600 hover:font-semibold' >Login</button></li>}

            {isOpen && (
                <>
                    <div className="cartoverlay" onClick={closeModal}></div>
                    <div className={`cartmodel p-6 overflow-y-auto text-primary ${isCloseing ? "closing" : ""}`}>

                        <div className="">
                            <Helmet>
                                <title>Pocket Coffee | Login</title>
                            </Helmet>
                            <div className="flex flex-col items-center justify-center  mx-auto  lg:py-0">

                                <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-base font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                                            Sign in to your account
                                        </h1>
                                        <form  onSubmit={handleLogin}>
                                            <div>
                                                <label className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                <input type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                            </div>
                                            <div className=" mt-4">
                                                <label className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                            </div>
                                             <div className="mt-1 mb-4 text-sm text-end hover:text-blue-800 hover:font-semibold ">
                                           <Link to='/forgetpass'><button>Forgot password?</button></Link>
                                             </div>
                                            <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                Don’t have an account yet? please register
                                            </p>
                                        </form>
                                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                        <div>
                                            <button type="button" onClick={handleGoogleLogin} className="text-white w-full  flex justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                                    <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                                                </svg>
                                                Sign in with Google
                                            </button>
                                        </div>

                                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )}

        </>
    )
}

export default Login