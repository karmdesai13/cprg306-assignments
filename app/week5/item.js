
export default function Item(name, quantity, category) {
   

    return (
        <div>
            <li className="bg-blue-800
                                m-4 w-[270px] text-xl border-[2px]
                                border-white rounded
                                p-3 text-center hover:bg-orange-500
                                hover:text-3xl hover:w-[400px]">{name}</li>
            <li  className="m-3 bg-blue-900 p-3
                w-[300px] ml-[300px] hover:bg-orange-500
                border-[2px] border-white rounded-full text-center hover:text-2xl">
                    <p className="">Pick {name}</p>
                    <p className="">From {category}</p>
                </li>
        </div>
    );
}