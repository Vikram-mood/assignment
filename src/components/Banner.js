import React from 'react'

const Banner = () => {
    return (
        <div class="flex    justify-between items-baseline ">
            <div className=" w-6/12  mt-10">

                <img className="absolute  ml-6 top-44 sm:ml-32 sm:top-10 sm:w-2/12 w-4/12  opacity-90 -z-10" src="Group 1000002356.png" alt="bg-color" />
                <h1 className="text-4xl font-extrabold">Make the Best Financial Decisions</h1>
                <h3 className="mt-4 ">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h3>
                <button className="bg-black text-white text-sm px-1 py-1 sm:px-2 sm:py-2 rounded-md">Get Started</button>
                <button className="text-black px-2 py-2 rounded-md shadow-md">Watch Video</button>
                <img className="w-2/3 h-1/2" src="Group 35924.png" />
            </div>
            <div class=" relative  w-5/12  sm:max-w-60 sm:w-6/12  mx-auto">
                <img className="absolute  ml-10 top-44 sm:ml-32 sm:top-64 w-10/12   opacity-90 -z-10" src="Group 1000002356.png" alt="bg-color" />

                <img className="absolute top-0 ml-0  z-30 hover:shadow-md" src="iPhone-13-Pro-Front.png" alt="iPhone" />
                <img className="absolute top-0 ml-4 sm:ml-16 z-20 hover:shadow-md" src="iPhone-13-Pro-Front.png" alt="iPhone" />

                <img className="absolute top-0  ml-7 sm:ml-32  z-10 hover:shadow-md" src="iPhone-13-Pro-Front.png" alt="iPhone" />

            </div>
        </div>

    )
}
export default Banner;
