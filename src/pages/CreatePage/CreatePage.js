import "./CreatePage.scss";
import { Link } from "react-router-dom";
import Calender from "../../components/Calendar/Calender";

export default function CreatePage({date,setDate,eventName,setEventName,organizerName,setOrganizerName,
    locationName,setLocationName,locationAddress,setLocationAddress}) {

    const handleEventName = (event)=>{
        setEventName(event.target.value)
    }

    const handleOrganizerName = (event)=>{
        setOrganizerName(event.target.value)
    }
    const handleLocationName = (event)=>{
        setLocationName(event.target.value)
    }
    const handleLocationAddress = (event)=>{
        setLocationAddress(event.target.value)
    }
  return (
    <div className="createpage__container">
        <section className="createpage__details">
            <div className="createpage__label--title">
                Event Name
            </div>
            <textarea className="createpage__input--title" placeholder="Ex. Sally's cookoff, Annual Golf Meetup" defaultValue={eventName} onChange={handleEventName}></textarea>
            
            <div className="createpage__label--title">
                Organizer Name
            </div>
            <textarea className="createpage__input--title" placeholder="Ex. Sally White, Frank Ocean" defaultValue={organizerName} onChange={handleOrganizerName}></textarea>
            
            <div className="createpage__label--location">
                Location Name
            </div>
            <textarea className="createpage__input--location" placeholder="Ex. My Home, Peter's backyard, College Campus" defaultValue={locationName} onChange={handleLocationName}></textarea>
            
            <div className="createpage__label--address">
                Location Address
            </div>
            <textarea className="createpage__input--address" placeholder="Ex. Trinity Bellwoods Park (790 Queen St W)" defaultValue={locationAddress} onChange={handleLocationAddress}></textarea>
        </section>

        <Calender date={date} setDate={setDate} />
        <Link to="/event">
            <button className="createpage__button">Next</button>
        </Link>

        
    </div>
  )
}
