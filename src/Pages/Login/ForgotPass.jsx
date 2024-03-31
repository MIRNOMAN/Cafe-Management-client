import logo from "../../Images/logo.png"

const ForgotPass = () => {

    return (
        <>
            <div>
                <div className="flex justify-center items-center mt-6">

                    <img className="h-[80px]" src={logo} alt="" />
                </div>
                <div className=" mx-auto h-[300px] w-[400px] px-6 py-8 mt-2 border">
                    <h1 className="text-xl">Forgot your password?</h1>
                    <p className="text-xs mt-2">Enter your email address and we'll send you the link to reset password.</p>
                    <form >
                        <div className="mt-4">
                            <label className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email..." required="" />
                        </div>
                        <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 mt-5 dark:focus:ring-primary-800">Reset Password</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ForgotPass