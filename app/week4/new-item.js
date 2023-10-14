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
        alert('Added Name: ' + name +'\n'+ 
              'Quantity: ' + quantity + '\n'+
              'Category: ' + category)
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
        <main className="">
            <h1 className="text-2xl  text-center p-4 m-5">Add New Item</h1>
            <div className="">
                <form onSubmit={handleSubmit}>
                <ul className=" flex justify-between w-30 bg-white text-black space-y-4 p-5">
                    <li className="mt-3">
                     <label className="">
                     <span>Name:  </span>
                     <input type="text" 
                     value={name} 
                     onChange={handleNameChange} 
                     required 
                     className="border-black border-2 rounded m-1"/>

                     </label>
                    </li>

                    
                    <li>
                     <label className="" >
                        <span>Quantity:</span>
                        <input type="number"
                        min = {1}
                        max = {100} 
                        value={quantity} 
                        onChange={handleQuantityChange} 
                        className="border-black border-2 rounded m-1"
                        required/>
                     </label>
                    </li>

                   
                    <li>
                     <label className="">
                        <span>Category:</span>
                        <select value={category} onChange={handleCategoryChange} className="border-black border-2 rounded m-1" required>
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
                    </li>

                    

                    
                    <button type="submit" onClick={handleClick} className="bg-blue-500 p-4 m-6 text-center hover:bg-blue-900 border-black border-2 rounded-xl">
                        Add Item
                    </button>
                </ul>
                </form>
            </div>
        </main> 
    );
}