import React, {useState} from 'react'
import {data} from "../data/data";

const Food = () => {
    //console.log(data)
    const [foods, setFoods] = useState(data)

 //filter type burger/pizza/
   const filterType = (category) => {
     setFoods
        (data.filter((item) => { 
            return item.category === category;
         }))
      }
 //filter by price
   const filterPrice =(price) => {
       setFoods
         (data.filter((item) => {
            return item.price === price
         }))
   }

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
           {/* Filter row */}
        <div className=" my-5 flex flex-col lg:flex-row justify-between">
            {/* Filter type */}
            <div>
                <p className="font-bold text-gray-700">Filter Types</p>
                 <div className="flex justify-between flex-wrap">
                   <button onClick={() => setFoods(data)} className="m-1 font-bold bg-orange-600 rounded-full w-[80px] text-white  hover:bg-orange-800 ">All</button>
                   <button onClick={() => filterType("burger")} className="m-1 border-orange-600 font-bold bg-orange-600 rounded-full w-[80px] text-white  hover:bg-orange-800 ">Bugers</button>
                   <button onClick={() => filterType("pizza")} className="m-1 font-bold bg-orange-600 rounded-full w-[80px] text-white  hover:bg-orange-800 ">Pizza</button>
                   <button onClick={() => filterType("salad")} className="m-1 font-bold bg-orange-600 rounded-full w-[80px] text-white  hover:bg-orange-800 ">Salads</button>
                   <button onClick={() => filterType("chicken")}className="m-1 font-bold bg-orange-600 rounded-full w-[80px] text-white  hover:bg-orange-800 ">Chicken</button>
                </div>
              </div>
              {/* Filter Price */}
            <div>
                <p className="font-bold text-gray-700">Filter Price</p>
                  <div className="flex justify-between max-w-[390px] w-full">
                     <button onClick={() => filterPrice("75")} className="m-1 font-bold bg-orange-600 rounded-full w-[80px] text-white  hover:bg-orange-800 ">75</button>
                     <button onClick={() => filterPrice("150")} className="m-1 font-bold bg-orange-600 rounded-full w-[80px] text-white  hover:bg-orange-800 ">150</button>
                     <button onClick={() => filterPrice("250")} className="m-1 font-bold bg-orange-600 rounded-full w-[80px] text-white  hover:bg-orange-800 ">250</button>
                     <button onClick={() => filterPrice("500")} className="m-1 font-bold bg-orange-600 rounded-full w-[80px] text-white  hover:bg-orange-800 ">500</button>
                   </div>
                </div>  
             </div>
            {/*Display foods */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
             {foods.map((items, index) => (
                <div key={index} className="boder shadow-lg rounded-lg hover:scale-105 duration-300">
                  <img className="w-full h-[200px] object-cover rounded-t-lg"
                     src={items.image} 
                     alt={items.name} />
                 <div className="flex justify-between px-2 py-4">    
                   <p className="font-bold">{items.name}</p>
                    <p>
                     <span className="bg-orange-500 text-white p-1 w-1 rounded-full">{items.price}</span>
                   </p>
                 </div>
                </div>    
             ))}
          </div>
               
          </div>   
  )
}

export default Food