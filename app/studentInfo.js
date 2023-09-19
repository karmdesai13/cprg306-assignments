import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="StudentInfo">
      
      <p class="text-white m-4">Karm Desai</p>
      <p class="text-white m-4">CPRG 306 A</p>
      <Link href="https://github.com/karmdesai13/cprg306-assignments.git" class="text-white m-4 hover:text-blue-500 underline">Github Link</Link>
      
    
    </div> 
    
  );
}
