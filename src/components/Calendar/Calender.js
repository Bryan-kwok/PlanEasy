import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./Calendar.scss"
import { useState } from "react";

export default function Calender({date,setDate}) {

  return (
    <div className="calendar__container">
        <h1 className="calendar__title">Select which days you think you'll be avaliable</h1>
        <div className="calendar__box">
            <Calendar 
                onChange={setDate} 
                value={date}
                selectRange={true} 
            />
        </div>
        {date.length > 0 ? (
            <div className="calendar__display">
                <p className="calendar__display--start">Start: {date[0].toDateString()}</p>
                <p className="calendar__display--end">End: {date[1].toDateString()}</p>
            </div>
        ):(
            <div className="calendar__display">
                <p className="calendar__display--start">Start: {date.toDateString()}</p>
            </div>
        )}
        
    </div>
  )
}
