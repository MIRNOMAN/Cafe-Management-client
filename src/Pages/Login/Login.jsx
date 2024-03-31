import { useState } from "react";
import { useForm } from "react-hook-form";


const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCloseing, setIsCloseing] = useState(false);
  const { register, handleSubmit } = useForm();

  
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

const onSubmit = () =>{
  // 
}


  return (
    <>
    
   <li className="list-none "><button onClick={openModal} className='hover:text-blue-600 hover:font-semibold' >Login</button></li> 
            
            {isOpen && (
                <>
                    <div className="cartoverlay" onClick={closeModal}></div>
                    <div className={`cartmodel p-6 overflow-y-auto text-primary ${isCloseing ? "closing" : ""}`}>

                        <div className="">
                            <div className="flex flex-col items-center justify-center  mx-auto  lg:py-0">

                                <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-base font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                                            Sign in to your account
                                        </h1>
                                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                            <div>
                                                <label className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                <input type="email"  id="email" {...register('email')} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                <input type="password"  id="password"  {...register('password')} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                            </div>
                                            
                                            <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                Don’t have an account yet? please register
                                            </p>
                                        </form>
                                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                        <div>
                                         
                                            <button type="button" className="text-white w-full  flex justify-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                                                </svg>
                                                Sign in with Github
                                            </button>
                                            <button type="button"  className="text-white w-full  flex justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
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