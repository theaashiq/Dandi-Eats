import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
            {/*Overlay*/}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center">
            <h1 className="px-4 text-4xl sm:text-5x md:text-6xl lg:7xl font-bold">Taste <span className="text-orange-500">The</span></h1>
            <h1 className="px-4 text-4xl sm:text-5x md:text-6xl lg:7xl font-bold text-orange-500">Perfection <span className="text-white"text> Food</span></h1>
        </div>
          <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"  alt="/" />
       </div>
     </div>
  )
}

export default Hero