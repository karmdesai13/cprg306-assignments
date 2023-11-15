import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="StudentInfo text-center ">
      
      <p class="text-white m-4 text-xl">Karm Desai</p>
      <p class="text-white m-4 text-xl">CPRG 306 A</p>
      <Link href="https://github.com/karmdesai13/cprg306-assignments.git" class="text-white m-4 text-xl hover:text-blue-500 underline">Github Link</Link>
      
    
    </div> 
    
  );
}
