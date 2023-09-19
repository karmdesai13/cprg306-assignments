import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function cprg306() {
  return (
    <div class="bg-black p-60 text-center m-80 italic">
      
      <h1 className="text-xl text-white"> CPRG 306: Web Development 2 - Assignments</h1>
      <hr></hr>
      <StudentInfo/>
      <Link href="./week2" className="text-white m-4 hover:text-red-500 underline">Week2</Link>
    </div> 
    
  );
}
