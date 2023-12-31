"use client";
import { useState } from "react";

export default function NewItem({OnAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(e) {
        e.preventDefault();
        const item = {name, quantity, category};
        OnAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
        
    }

        


    

    

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
            <h1 className="text-2xl p-10 font-serif underline  ">Add New Item To your Shopping List</h1>
            
            <div className="">
                <form onSubmit={handleSubmit}>
                <ul className=" bg-blue-500  text-white rounded-lg  ">
                    <li className="pt-5 pb-2">
                        <label>
                        <span>Name :  </span>
                        <input type="text"
                        placeholder="Enter Item Name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        className="border-black border-2 rounded text-black "/>

                    </label>
                    </li>

                    
                    <li className="pb-2 mt-2 text-left ml-[210px]">
                     <label>
                        <span>Quantity :</span>
                        <input type="number"
                        min = {1}
                        max = {100}
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="border-black border-2 rounded m-1 text-black"
                        required/>
                     </label>
                    </li>

                   
                    <li className="pb-2 mt-2 text-left ml-[210px]">
                     <label >
                        <span>Category :</span>
                        <select value={category} onChange={handleCategoryChange} 
                         className="border-black border-2 rounded  m-1 text-black" required>
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

                    

                    
                    <button type="submit" className="bg-green-500 p-4 m-6 text-center
                     hover:text-white  hover:underline hover:bg-orange-500  rounded-xl
                     transition duration-300 transform hover:scale-110 ">
                        Add Item
                    </button>
                </ul>
                </form>
            </div>
        </main>
    );
}