
import Swal from "sweetalert2";
import logo from "../../Images/logo.png"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const ForgotPass = () => {
    const axiosPublic = useAxiosPublic();
    const [email, setEmail] = useState(""); // State to hold the email input
  
    const handleForgetPassword = (e) => {
      e.preventDefault();
      axiosPublic
        .post("/user/forgotPassword", { email }) // Sending email as an object
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${res.status}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          // Handle error if any
          console.error("Error while resetting password:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    };
    return (
        <>
            <div>
                <div className="flex justify-center items-center mt-6">

                    <img className="h-[80px]" src={logo} alt="" />
                </div>
                <div className=" mx-auto h-[300px] w-[400px] px-6 py-8 mt-2 border">
                    <h1 className="text-xl">Forgot your password?</h1>
                    <p className="text-xs mt-2">Enter your email address and we'll send you the link to reset password.</p>
                    <form onSubmit={handleForgetPassword}>
                        <div className="mt-4">
                            <label className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email..." required/>
                        </div>
                        <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 mt-5 dark:focus:ring-primary-800">Reset Password</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ForgotPass