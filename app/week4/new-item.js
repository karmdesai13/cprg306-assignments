"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const Item={
            name,
            quantity,
            category,
        }
    
        console.log(Item);

        

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    const handleClick = () => {
        alert('Added Name: ' + name + ' Quantity: ' + quantity + ' Category: ' + category)
      };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }


    return(
        
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit}>
                    <label className="m-10 p-40">
                     <span>Name:  </span>
                     <input type="text" 
                     value={name} 
                     onChange={handleNameChange} 
                     required 
                     className="rounded border-blue-400 m-1"/>

                    </label>

                    

                    <label className="m-10 p-80" >
                        <span>Quantity:</span>
                        <input type="number"
                        min = {1}
                        max = {100} 
                        value={quantity} 
                        onChange={handleQuantityChange} 
                        required/>
                    </label>

                   

                    <label className="m-10 p-40">
                        <span>Category:</span>
                        <select value={category} onChange={handleCategoryChange} required>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen">Frozen Foods</option>
                            <option value="canned">Canned Foods</option>
                            <option value="dry">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    

                    <button type="submit" onClick={handleClick} className="bg-blue-500 p-4 m-6 text-center hover:bg-blue-900">Add Item</button>
                </form>
            </div>
        
    );
}