"use client";
import { useState } from "react";

import ItemList from "./item-list.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";
import NewItem from "./new-item.js";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleAddItem(item) {
        
        setItems([...items, item]);
    }

    
    function handleItemSelect(item) {
        const cleanedName = item.split(',')[0].trim().replace(/[^a-zA-Z ]/g, "");;
        setSelectedItemName(cleanedName);
    }

    return (
        <div className="bg-black text-white p-40 text-center flex">
            
            <div>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>

            
            <MealIdeas ingredient={selectedItemName} />
        </div>
    );
}
