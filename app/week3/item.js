export default function Item({ name,quantity,category}) {
    return (
        <div className="bg-blue-900 border border-white rounded m-3 p-4">
            <h1 className="text-2xl text-white">{name}</h1>
            <p> Buy {quantity} from {category}</p>
        </div>
    );
}