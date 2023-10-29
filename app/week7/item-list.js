"use client";

import { useState } from "react";
import Item from "./item.js";

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


    return (
        <main className="bg-gray-700 text-white p-6 mt-6 rounded-lg shadow-md">

            <div className="text-center mb-5">
                <h1 className="text-2xl font-bold mb-3">Shopping List</h1>
                <div className="inline-flex m-4">
                    <button onClick={() => setSortby("name")} 
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded m-1 transition duration-300 transform hover:scale-110
                        ${sortby === "name" ? "bg-green-600 hover:bg-green-700" : ""}`}
                    >Sort by Name</button>
                    
                    <button onClick={() => setSortby("category")} 
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded m-1 transition duration-300 transform hover:scale-110
                        ${sortby === "category" ? "bg-green-600 hover:bg-green-700" : ""}`}
                    >Sort by Category</button>

                    <button onClick={() => setSortby("group")}
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded m-1 transition duration-300 transform hover:scale-110
                        ${sortby === "group" ? "bg-green-600 hover:bg-green-700" : ""}`}
                    >Group by Category</button>
                </div>
            </div>

            {sortby === "group" ? (
                <div className="space-y-4">
                    {Object.entries(groupedItems).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="capitalize text-xl font-semibold mb-3">{category}:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {items.map((item) => (
                                    <Item key={item.id} {...item} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sortedItems.map((item) => (
                        <Item key={item.id} {...item} />
                    ))}
                </ul>
            )}

        </main>
    );}

    
