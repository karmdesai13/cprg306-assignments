export default function Item({ name, quantity, category,onSelect }) {
    return (
        <div className="flex justify-center items-center my-4">
            <li className="bg-purple-800 p-4 w-[300px] border border-purple-600 rounded-lg text-white hover:bg-purple-700 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => onSelect(name)}>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-purple-200">Quantity: {quantity}</p> 
                <p className="text-sm text-purple-300">Category: {category}</p>
            </li>
        </div>
    );
}