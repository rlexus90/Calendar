'use client'
import { parseDate } from '@internationalized/date';
import { Calendar } from '@nextui-org/calendar';
import type { DateValue } from '@react-types/calendar';
import  { useEffect, useState } from 'react';


export default function Page123() {
	const [value, setValue] = useState<DateValue>(parseDate("2024-11-22"));

	useEffect(()=>{
		console.log(value)
	},[value])
  return (
    <>
      <div>
        <div className="items-center justify-items-center mx-auto p-5">
        <p>Page 123</p>  
				 <Calendar 
      aria-label="Date (Controlled)" 
      value={value} 
      onChange={setValue} 
    />
        </div>  
       
      </div>
    </>
  );
}
