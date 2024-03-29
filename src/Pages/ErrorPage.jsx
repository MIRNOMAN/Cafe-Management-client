import error from "../assets/404_animation.gif"

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center w-full">
    <img src={error} alt="" />
    </div>
  )
}

export default ErrorPage