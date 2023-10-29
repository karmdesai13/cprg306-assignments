"use client";
import { useState } from "react";

import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item.js";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    function handleAddItem(item) {
        alert("Adding Item: " + item.name);
        setItems([...items, item]);
    }
    return (

        

        <div className="bg-black text-white p-40  text-center">
            <NewItem  OnAddItem={(item)=>handleAddItem(item)}/>
            <ItemList  items={items}/>

        </div>
    );
}