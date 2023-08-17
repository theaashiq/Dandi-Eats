import React from 'react'

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Card */}
        <div className="rounded-xl relative">
            {/* OverLay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">Burger with Fries</p>
              <p className="px-2">Through 12/30</p>
              <button className="border-white bg-white rounded-full p-2 text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img 
              className="max-h-[160-px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://images.pexels.com/photos/3356412/pexels-photo-3356412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="/" />
        </div>
        <div className="rounded-xl relative">
            {/* OverLay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
              <p className="px-2">Added Daily</p>
              <button className="border-white bg-white rounded-full p-2 text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img 
              className="max-h-[160-px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="/" />
        </div>
        <div className="rounded-xl relative">
            {/* OverLay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
              <p className="px-2">Tasty Treats</p>
              <button className="border-white bg-white rounded-full p-2 text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img 
              className="max-h-[160-px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="/" />
        </div>
        
    </div>
      
  )
}

export default HeadlineCards