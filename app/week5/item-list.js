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

        <div className="flex ">

        <h1 className="text-xl text-white p-3 m-0 h-10 .top-0">Sort by:</h1>
        <button onClick={() => setSortby("name")} 
                className="bg-blue-500 text-white p-3 m-2  hover:bg-orange-500 border border-yellow-600 rounded h-10 .top-0"
                >Sort by Name</button> 
        <button onClick={() => setSortby("category")} 
             className="bg-blue-500 text-white p-3 m-2  hover:bg-orange-500 border border-yellow-600 rounded h-10 .top-0">Sort by Category</button>
        
         
        <ul className="m-5 p-30 ">
            {sortedItems.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.category}
                </li>
            ))}</ul>
                      
        </div>

    );


    

}
