import "./TimeSlot.scss"
import { useState,useEffect } from "react"

export default function TimeSlot({day,time,setTime}) {
    let [from,setFrom] = useState("")
    let [to,setTo] = useState("")
    let [warning, setWarning] = useState(false)

    const handleFrom=(event)=>{
        setFrom(event.target.value)
    }

    const handleTo=(event)=>{
        setTo(event.target.value)
    }

    const addTimeSlot=()=>{
        let info = {
            day: day,
            to: to,
            from: from
        }
        let index = time.findIndex(item => item.day === day)
        if(index ===-1){
           return setTime([...time,info])
            
        }
        
        let newtime = time.map(obj=> obj.day === info.day? {...time,...info}: obj)
        return setTime(newtime)
    }

    useEffect(()=>{
        if(from/1>to/1){
            setWarning(true)
        }else if(to/1>from/1){
            setWarning(false)
            addTimeSlot();
        }
    },[from,to])

  return (
    <div className="timeslot__container">
        <div className="timeslot__date">{day}</div>
        <div className="timeslot__selection">
            <p className="timeslot__label">From</p>
            <select onChange={handleFrom}>
                <option value="">Please Select</option>
                <option value="1">1am</option>
                <option value="2">2am</option>
                <option value="3">3am</option>
                <option value="4">4am</option>
                <option value="5">5am</option>
                <option value="6">6am</option>
                <option value="7">7am</option>
                <option value="8">8am</option>
                <option value="9">9am</option>
                <option value="10">10am</option>
                <option value="11">11am</option>
                <option value="12">12am</option>
                <option value="13">1pm</option>
                <option value="14">2pm</option>
                <option value="15">3pm</option>
                <option value="16">4pm</option>
                <option value="17">5pm</option>
                <option value="18">6pm</option>
                <option value="19">7pm</option>
                <option value="20">8pm</option>
                <option value="21">9pm</option>
                <option value="22">10pm</option>
                <option value="23">11pm</option>
                <option value="24">12pm</option>   
            </select>
            <p className="timeslot__label timeslot__to">To</p>
            <select onChange={handleTo}>
            <option value="">Please Select</option>
                <option value="1">1am</option>
                <option value="2">2am</option>
                <option value="3">3am</option>
                <option value="4">4am</option>
                <option value="5">5am</option>
                <option value="6">6am</option>
                <option value="7">7am</option>
                <option value="8">8am</option>
                <option value="9">9am</option>
                <option value="10">10am</option>
                <option value="11">11am</option>
                <option value="12">12am</option>
                <option value="13">1pm</option>
                <option value="14">2pm</option>
                <option value="15">3pm</option>
                <option value="16">4pm</option>
                <option value="17">5pm</option>
                <option value="18">6pm</option>
                <option value="19">7pm</option>
                <option value="20">8pm</option>
                <option value="21">9pm</option>
                <option value="22">10pm</option>
                <option value="23">11pm</option>
                <option value="24">12pm</option>   
            </select>
        </div>
        {}
        <div className={`timeslot__warning`+`${warning? "":"-none"}`}>Your end time has to be after your start time</div>
    
    </div>
  )
}
