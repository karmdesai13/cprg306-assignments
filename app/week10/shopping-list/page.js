"use client";
import { useEffect, useState } from "react";
import { addItem, getItems } from "../_services/shopping-list-service";
import { auth } from "../_utils/firebase";

import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            setUser(currentUser);
            if (currentUser) {
                loadItems(currentUser.uid);
            }
        });

       
        return () => unsubscribe();
    }, []);

    
    async function loadItems(uid) {
        try {
            const fetchedItems = await getItems(uid);
            setItems(fetchedItems);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }

    
    async function handleAddItem(newItem) {
        if (user) {
            try {
                const docId = await addItem(user.uid, newItem);
                setItems(prevItems => [...prevItems, { ...newItem, id: docId }]);
            } catch (error) {
                console.error("Error adding item:", error);
            }
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
