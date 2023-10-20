"use client";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
    const[sortby, setSortby] = useState("name");
    let groupedItems={};


    
    const sortedItems = [...items].sort((a, b) => {
        if (sortby === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortby === "category") {
            return  a.category.localeCompare(b.category);
        }

        else if (sortby ==="group") {

             groupedItems= items.reduce((sortby, items) => {
                if (!sortby[items.category]) {
                    sortby[items.category] = [];
                }
                sortby[items.category].push(items);
                return sortby;
            }, {});
        }
    });


    return(

        <main>

        <div className=" text-center">
          <h1 className="text-xl text-white p-3 h-10">Sort By:</h1>
          <button onClick={() => setSortby("name")} 
                className={`bg-blue-500 text-white p-2 px-4 m-2  hover:bg-orange-500 hover:text-xl  border-2 rounded h-10 font-mon 
                ${ sortby === "name" ? "bg-red-500 underline ": "" }`}
                >Sort by Name
          </button> 
          <button onClick={() => setSortby("category")} 
             className={`bg-blue-500 text-white p-2 m-2  hover:bg-orange-500 hover:text-xl border-2 rounded h-10 font-mono 
             ${sortby === "category"? "bg-green-500 underline":""}`}>
                Sort by Category
          </button>

          <button onClick={() => {setSortby("group")}}
                className="bg-blue-500 text-white p-2 m-2 hover-bg-orange-500 border-2 rounded h-10 font-mono">
                Group by Category (Still Trying :) 
          </button>
        
        </div>
        <div className="m-4  ">
         
         <ul className=" rounded-full text-center space-y-2 bg-purple-500 text-black border-white border-3 p-4 ring-2 ring-white" >
            <p className="text-white font-mono">Pick List for Groceries:</p>
            {sortedItems.map((items) => (
                <li key={...items} className="font-mono">
                    <p className="align-center text-gray-700 hover:text-2xl hover:text-black "> Pick Quantity { items.quantity} of {items.name} from  {items.category} </p>
                </li>
            ))}</ul>
        </div>               
        </main>

    );


    

}
