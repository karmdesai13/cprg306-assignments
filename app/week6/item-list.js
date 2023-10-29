"use client";
import PropTypes from 'prop-types';
import { useState } from "react";

export default function ItemList({ items }) {
    const[sortby, setSortby] = useState("name");
    let groupedItems={};
    
    const sortedItems = [...items].sort((a, b) => {
        if (sortby === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortby === "category") {
            return  a.category.localeCompare(b.category);
        }

    if (sortby === "group") {
        groupedItems = items.reduce((sortby, item) => {
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
                ${ sortby === "name" ? "bg-green-500 underline ": "" }`}
                >Sort by Name
          </button> 
          <button onClick={() => setSortby("category")} 
             className={`bg-blue-500 text-white p-2 m-2  hover:bg-orange-500 hover:text-xl border-2 rounded h-10 font-mono 
             ${sortby === "category"? "bg-green-500 underline":""}`}>
                Sort by Category
          </button>

          <button onClick={() => {setSortby("group")}}
                className={`bg-blue-500 text-white p-2 m-2  hover:bg-orange-500 hover:text-xl border-2 rounded h-10 font-mono 
                ${sortby === "group"? "bg-green-500 underline":""}`}>
                Group by Category (Working Now) 
          </button>
        
        </div>
       

        {sortby==="group"?(
            <div className="m-4 ">
                {Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category} className="">
                        
                        <ul className="">
                            <h3 className="capitalize text-2xl ">{category} :</h3>
                            {items.map((item) => (
                                <li key={item.id} className="bg-blue-800
                                m-4 w-[270px] text-xl border-[2px]
                                border-white rounded
                                p-3 text-center hover:bg-orange-500
                                hover:text-3xl hover:w-[400px]">{item.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        ):(<ul className="m-10">
            {sortedItems.map((item) => (
                <li key={item.id} className="m-3 bg-blue-900 p-3
                w-[300px] ml-[300px] hover:bg-orange-500
                border-[2px] border-white rounded-full text-center hover:text-2xl">
                    <p className="">Pick {item.name}</p>
                    <p className="">From {item.category}</p>
                </li>
            ))}
        </ul>)}

        </main>




    );} 

    ItemList.defaultProps = {
        items: [],
    };
    
    // PropType validation
    ItemList.propTypes = {
        items: PropTypes.array.isRequired,
    };
    
