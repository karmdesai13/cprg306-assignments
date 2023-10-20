import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function cprg306() {
  return (
    <main class="bg-black p-80 pt-[200px]   italic">
      
      <h1 className="text-xl text-center  text-white mb-5"> CPRG 306: Web Development 2 - Assignments</h1>
      <hr></hr>
      <StudentInfo/>

       <div className="m-6 text-center ">
        <Link href="./week2" className="text-white bg-red-600 rounded-full p-2 hover:text-xl hover:bg-green-500 underline border-white border-2 ">Week2</Link>
       </div>

       <div className="m-6 text-center ">
        <Link href="./week4" className="text-white bg-blue-700 rounded-full p-2 underline hover:text-xl  hover:bg-green-500 border-white border-2">Week4</Link>
       </div>

      <div className="m-6 text-center ">
        <Link href="./week5" className="text-white bg-purple-600 rounded-full p-2 underline hover:text-xl hover:bg-green-500 border-white border-2">Week5</Link>
      </div>

      <div className="m-6 text-center ">
        <Link href="./week6" className="text-white bg-purple-600 rounded-full p-2 underline hover:text-xl hover:bg-green-500 border-white border-2">Week6</Link>
      </div>

    </main> 
    
  );
}
