"use client";
import { useState } from "react";
import eventData from "./items.json";

export default function ItemList() {
    const[sortby, setSortby] = useState("name");
    let groupedItems={};
    
    const sortedItems = [...eventData].sort((a, b) => {
        if (sortby === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortby === "category") {
            return  a.category.localeCompare(b.category);
        }

    if (sortby === "group") {
        groupedItems = eventData.reduce((sortby, item) => {
            if (!sortby[item.category]) {
                sortby[item.category] = [];
            }
            sortby[item.category].push(item);
            return sortby;
        }, {});
    }});


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
            {sortedItems.map((item) => (
                <li key={item.id} className="font-mono">
                    <p className="align-center text-gray-700 hover:text-2xl hover:text-black "> Pick {item.name} from  {item.category}</p>
                </li>
            ))}</ul>
        </div> 

        {sortby==="group"?(
            <div>
                {Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="capitalize text-xl">{category}</h3>
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        ):(<ul>
            {sortedItems.map((item) => (
                <li key={item.id}>
                    <p>{item.name} from {item.category}</p>
                </li>
            ))}
        </ul>)}

        </main>




    );}
