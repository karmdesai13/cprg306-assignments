"use client";
import { useState } from "react";
import eventData from "./items.json";

export default function ItemList() {
    const[sortby, setSortby] = useState("name");

    

    
    const groupedItems = eventData.reduce((sortby, item) => {
        if (!sortby[item.category]) {
            sortby[item.category] = [];
        }
        sortby[item.category].push(item);
        return sortby;
    }, {});

    
    const groupSortedItems = Object.keys(groupedItems).sort((a, b) => a.localeCompare(b));
    
    const sortedItems = [...eventData].sort((a, b) => {
        if (sortby === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortby === "category") {
            return  a.category.localeCompare(b.category);
        }

        else if (sortby ==="group") {
            return groupSortedItems;
        }
    });


    return(

        <main>

        <div className=" text-center">
          <h1 className="text-xl text-white p-3 h-10">Sort By:</h1>
          <button onClick={() => setSortby("name")} 
                className={`bg-blue-500 text-white p-2 px-4 m-2  hover:bg-orange-500 border-2 rounded h-10 font-mon 
                ${ sortby === "name" ? "bg-red-500 underline ": "" }`}
                >Sort by Name</button> 
          <button onClick={() => setSortby("category")} 
             className={`bg-blue-500 text-white p-2 m-2  hover:bg-orange-500 border-2 rounded h-10 font-mono 
             ${sortby === "category"? "bg-green-500 underline":""}`}>
                Sort by Category</button>

          <button onClick={() => {setSortby("group")}}
                    className="bg-blue-500 text-white p-2 m-2 hover-bg-orange-500 border-2 rounded h-10 font-mono"
                >
                    Group by Category(not working :) 
                </button>
        
        </div>
        <div className="m-4  ">
         <ul className=" rounded-full text-center space-y-2 bg-purple-500 text-black border-white border-3 p-4 ring-2 ring-white" >
            {sortedItems.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.category}
                </li>
            ))}</ul>
        </div>               
        </main>

    );


    

}