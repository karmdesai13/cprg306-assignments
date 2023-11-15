import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function cprg306() {
  return (
    <main className="bg-black min-h-screen flex flex-col justify-center font-mono items-center text-white">
      
      <h1 className="text-3xl md:text-5xl text-center mb-10 font-bold underline">CPRG 306: Web Development 2</h1>
      <StudentInfo />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">

        <Link href="./week2">
          <div className="cursor-pointer block p-6  bg-purple-700 rounded-lg  hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h5 className="mb-2 text-2xl font-bold ">Week 2</h5>
            <p className="font-normal text-gray-300">Displaying My Shopping List Through Week 3...</p>
          </div>
        </Link>

        <Link href="./week4">
          <div className="cursor-pointer block p-6  bg-purple-700 rounded-lg  hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h5 className="mb-2 text-2xl font-bold ">Week 4</h5>
            <p className="font-normal text-gray-300">Add Item To Shopping List...</p>
          </div>
        </Link>

        <Link href="./week5">
          <div className="cursor-pointer block p-6  bg-purple-700 rounded-lg  hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h5 className="mb-2 text-2xl font-bold ">Week 5</h5>
            <p className="font-normal text-gray-300">Sorting By Category, Name, Grouped Category... </p>
          </div>
        </Link>

        <Link href="./week6">
          <div className="cursor-pointer block p-6  bg-purple-700 rounded-lg  hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h5 className="mb-2 text-2xl font-bold ">Week 6</h5>
            <p className="font-normal text-gray-300">Adding New Item And Sorting...</p>
          </div>
        </Link>

        <Link href="./week7">
          <div className="cursor-pointer block p-6  bg-purple-700 rounded-lg  hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h5 className="mb-2 text-2xl font-bold ">Week 7</h5>
            <p className="font-normal text-gray-300">Displaying Meal Ideas Based On Your Groceries...</p>
          </div>
        </Link>

        <Link href="./week8">
          <div className="cursor-pointer block p-6  bg-purple-700 rounded-lg  hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Week 8</h5>
            <p className="font-normal text-gray-300">Firebase Authentication...</p>
          </div>
        </Link>

        <Link href="./week10">
          <div className="cursor-pointer block p-6  bg-purple-700 rounded-lg  hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Week 10</h5>
            <p className="font-normal text-gray-300">Cloud Firestore...</p>
          </div>
        </Link>

      </div>
    </main>
  );
}
