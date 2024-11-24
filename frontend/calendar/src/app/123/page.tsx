'use client'

import Link from "next/link";

// import { parseDate } from '@internationalized/date';
// import { Calendar } from '@nextui-org/calendar';
// import type { DateValue } from '@react-types/calendar';
// import  { useEffect, useState } from 'react';


export default function Page123() {
	// const [value, setValue] = useState<DateValue>(parseDate("2024-11-22"));

	// useEffect(()=>{
	// 	console.log(value)
	// },[value])
  return (
    <>
      <div>
        <div className="items-center justify-items-center mx-auto p-5 max-w-28">
        <p>Page 123</p>  
				 {/* <Calendar 
      aria-label="Date (Controlled)" 
      value={value} 
      onChange={setValue} 
    /> */}
				<Link
            className="px-3 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/"
         
            rel="noopener noreferrer"
          >
           Forward
          </Link>
        </div>  
      </div>
    </>
  );
}
