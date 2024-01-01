import { useEffect, useState } from "react";
import DayDisplay from "./DayDisplay";
import "./date.css"
const DateContainer = () => {
    const [date,setDate] = useState(Date.now()); //useState
    return (  
        <>
            <input type="date" className="date-input" onChange={(e)=> setDate(e.target.value)}/>
            <DayDisplay date={date}/> 
        </>
    );
}
 
export default DateContainer;