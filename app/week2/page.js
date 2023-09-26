import StudentInfo from "../studentInfo";
import Link from "next/link";

export default function ShoppingList() {
  return (
    
    <div class="bg-black p-60 text-center m-80 italic">
      <h1 class="text-4xl text-blue-500">My Shopping List</h1>
      <hr></hr>
      <StudentInfo/>
      <Link href="./week3" className="text-white m-4 hover:text-red-500 underline">Week3</Link>
    </div>
  );
}