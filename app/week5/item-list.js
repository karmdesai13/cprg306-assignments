"use client";
import { useState } from "react";
import eventData from "./items.json";

export default function ItemList() {
    const[sortby, setSortby] = useState("name");
    
    const sortedItems = [...eventData].sort((a, b) => {
        if (sortby === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortby === "category") {
            return  a.category.localeCompare(b.category);
        }
    });


    return(

        <main className="">

        <div className=" text-center">
          <h1 className="text-xl text-white p-3  h-10 ">Sort by:</h1>
          <button onClick={() => setSortby("name")} 
                className="bg-blue-500 text-white py-3 px-4 m-2  hover:bg-orange-500 border rounded h-10 font-mono"
                >Sort by Name</button> 
          <button onClick={() => setSortby("category")} 
             className="bg-blue-500 text-white p-3 m-2  hover:bg-orange-500 border-2 rounded h-10 font-mono ">Sort by Category</button>
        
        </div>
        <div className="m-4  ">
         <ul className=" rounded-full text-center space-y-2 bg-purple-500 text-black border-white border-3 p-4" >
            {sortedItems.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.category}
                </li>
            ))}</ul>
        </div>               
        </main>

    );


    

}
