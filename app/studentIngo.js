import Link from "next/link";

export default function StudentInfo() {
  return (
    <div class="bg-black p-60 text-center m-80 italic">
      <h1 className="text-6xl text-white">Student Info</h1>
      <hr></hr>
      <p class="text-white m-4">Karm Desai</p>
      <p class="text-white m-4">CPRG 306 A</p>
      <Link href="https://github.com/karmdesai13/cprg306-assignments.git" class="text-white m-4 hover:text-blue-500 underline">Github Link</Link>
      
    
    </div> 
    
  );
}
