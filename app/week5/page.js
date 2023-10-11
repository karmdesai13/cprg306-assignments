import ItemList from "./item-list";

export default function Page() {
    return (
        <div className="bg-black text-white p-2  m-1">
            <h1 className="text-3xl text-center underline p-3">Shopping List</h1>
            <ItemList />

        </div>
    );
}