import banner from "../../Images/banner.jpg"

const Banner = () => {
  return (
    <section className="bg-banner ">
        <div className="relative">
          <img className="h-full w-full" src={banner} alt="" />
          <div className="absolute left-[700px] text-white top-[170px] right-10">
             <h1 className="text-7xl tangerine-bold ">Coffee Shop</h1>
             <h3 className="text-2xl my-2 ">NULLAM FERMENTUM NISI VEL</h3>
             <span className="text-sm italic mr-10">Nunc tempus ultricies convallis, donec ac consectetur eros, et tempus lectus. Nam consectetur, purus vitae scelerisque placerat, metus massa venenatis ex, eleifend facilisis nulla est vitae tortor. Sed vitae posuere nunc, sed condimentum lacus.</span>
             <div>
             <button className="primary-btn uppercase mt-5">Order now</button>
             </div>
          </div>
        </div>
    </section>
  )
}

export default Banner