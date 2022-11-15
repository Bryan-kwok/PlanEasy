// import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import "./EventPage.scss";
import cookoff from "../../assets/images/cookoff.jpg";
import { useState,useEffect } from "react";
import TimeSlot from "../../components/TimeSlot/TimeSlot";
import Participants from "../../components/Participants/Participants";
import Grid from "../../components/Grid/Grid";


export default function EventPage({date,eventName,organizerName,locationName,locationAddress}) {
    let [participants, setParticipants] = useState([])
    let [name, setName] = useState("")
    let [time,setTime] = useState([])
    let [values, setValues] = useState([]);

    const handleChangeName = (event) =>{
        setName(event.target.value)
    }
    const handleChangeTime = (event) =>{
        setTime(event.target.value)
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        let newParticipant = {
            ...time,
            name:name,
        }
        setParticipants([...participants,newParticipant]);
        setTime([]);
        setValues([]);
        event.target.nameInput.value = "";
    }

    useEffect(()=>{
    },[participants])

  return (
    <div className="eventpage__container">
        <div className="eventpage__heroinfo">
            <div className="eventpage__hero--box">
                <img className="eventpage__hero--image" src={cookoff} alt="hero" />
            </div>
            <div className="eventpage__infosection">
                <h1 className="eventpage__title">{eventName}</h1>
                <div className="eventpage__organizer">
                    <h2 className="eventpage__organizer--label">O R G A N I Z E R</h2>
                    <p className="eventpage__organizer--name">{organizerName}</p>
                </div>
                <div className="eventpage__location">
                    <h2 className="eventpage__location--label">L O C A T I O N</h2>
                    <p className="eventpage__location--name">{locationName}</p>
                    <p className="eventpage__location--address">{locationAddress}</p>
                </div>
                <div className="eventpage__datetime">
                    <h2 className="eventpage__datetime--label">D A T E  {"&"}  T I M E</h2>
                    {date.length > 0 ? (
                        <div className="eventpage__display">
                            <p className="eventpage__display--start">From: {date[0].toDateString()}</p>
                            <p className="eventpage__display--end">To: {date[1].toDateString()}</p>
                        </div>
                    ):(
                        <div className="eventpage__display">
                    <       p className="eventpage__display--start">Start: {date.toDateString()}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="eventpage__peopledisplay">
            <div className="eventpage__additional">
                <h1 className="eventpage__additional--label">A D D &nbsp; P E O P L E</h1>
                <form className="eventpage__form" onSubmit={handleSubmit}>
                    <label className="eventpage__form--label">N A M E</label>
                    <textarea className="eventpage__form--name" placeholder="name" onChange={handleChangeName} name="nameInput"></textarea>
                    <Calendar className="eventpage__calendar"
                    multiple
                    value={values}
                    onChange={setValues}
                    minDate={date[0] || new Date()}
                    maxDate={date[1]||""}
                    format="dddd DD MMMM YYYY"
                    />
                    {values.length>0 ? values.map((day,index)=>{
                        return(
                            <TimeSlot
                            day = {day.format("dddd DD MMMM YYYY")}
                            key = {index}
                            time={time}
                            setTime={setTime}
                            />
                        )                 
                    }                  
                    ):(
                        <div></div>
                    )}
                    <button className="eventpage__form--button">+</button>
                </form>
            </div>
            <div className="eventpage__participant--group">
                <h2 className="eventpage__participant--label">P A R T I C I P A N T &nbsp; O V E R V I E W</h2>
                <div className="eventpage__participant--box">
                    {participants.length > 0 ? participants.map((participant,index)=>{
                        return(
                            <Participants
                            participant={participant}
                            key={index}
                            />
                        )
                    } 
                    ) : (
                        <div></div>
                    )
                    }
                </div>
            </div>
        </div>
        <Grid
            participants={participants}
        />
    </div>
  )
}
