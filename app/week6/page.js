"use client";
import { useState } from "react";

import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item.js";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleSubmit = (newItem) => {
        setItems((prevItems) => {
            return [...prevItems, newItem];
        });
    };
    return (

        

        <div className="bg-black text-white p-40  text-center">
            <NewItem  onAddItem={handleSubmit}/>
            <ItemList  items={items}/>

        </div>
    );
}