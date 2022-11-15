import "./Participants.scss";

export default function Participants({participant}) {

    const handleTime =(time)=>{
        if(time>12){
            return(
                `${time-12}pm`
            )
        }else{
            return(
                `${time}am`
            )
        }
    }
    
  return (
    <div className="participants__container">
        <h1 className="participants__name">{participant.name}</h1>
        {Object.values(participant).filter(ele=>ele!==participant.name).map((date)=>{
            return(
                <div className="participants__box">
                    <div>{date.day}</div>
                    <div>From: {handleTime(date.from)}</div>
                    <div>To: {handleTime(date.to)}</div>
                </div>
            )
        })}
    </div>
  )
}
