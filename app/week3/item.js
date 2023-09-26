export default function Item({ name,quantity,category}) {

    const CapitalName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className="bg-blue-900 border border-white rounded m-3 p-4">
            <h1 className="text-2xl text-white">{CapitalName}</h1>
            <p> Buy {quantity} from {category}</p>
        </div>
    );
}