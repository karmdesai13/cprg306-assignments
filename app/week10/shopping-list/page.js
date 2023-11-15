"use client";
import { useEffect, useState } from "react";
import { addItem, getItems } from "../_services/shopping-list-service";

import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const user = { uid: "currentUserUid" }; // Replace with actual user UID

    // Function to load items from Firestore
    async function loadItems() {
        try {
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }

    // useEffect to call loadItems when the component mounts
    useEffect(() => {
        loadItems();
    }, []); // Empty dependency array means it runs once on mount

    // Update handleAddItem to add item to Firestore
    async function handleAddItem(newItem) {
        try {
            const docId = await addItem(user.uid, newItem);
            setItems(prevItems => [...prevItems, { ...newItem, id: docId }]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    }

    function handleItemSelect(itemName) {
        const cleanedName = itemName.split(',')[0].trim().replace(/[^a-zA-Z ]/g, "");
        setSelectedItemName(cleanedName);
    }

    return (
        <div className="bg-black text-white p-40 text-center flex">
            <div>
                <NewItem OnAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
        </div>
    );
}
