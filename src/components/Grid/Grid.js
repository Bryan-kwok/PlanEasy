import "./Grid.scss";
import { useState,useEffect } from "react";

export default function Grid({participants}) {
    let [maxTime,setMaxTime] = useState("")
    let [minTime,setMinTime] = useState("")
    let [timeArray, setTimeArray] = useState([])

    let [maxDate, setMaxDate] = useState("")
    let [minDate, setMinDate] = useState("")
    let [dateArray, setDateArray] = useState([])

    let [grid,setGrid] = useState([])

    //functions to find the maximum time, minimum time of all participants, then create an array that spans the two time
    const findMaxTime = ()=>{
        let max = ""
        for(let i=0; i<Object.values(participants).length;i++){
            for(let y=0;y<Object.values(participants[i]).length-1;y++){
                if(Number(participants[i][y].to)>Number(max)){
                    max = participants[i][y].to
                }
            }
        }
        if(max===maxTime){
            setMaxTime([max][0])
        }else{
            setMaxTime(max)
        }
        
    }

    const findMinTime = ()=>{
        if(participants.length>0){
            let min = "24"
            for(let i=0; i<Object.values(participants).length;i++){
                for(let y=0;y<Object.values(participants[i]).length-1;y++){
                    if(Number(participants[i][y].from)<Number(min)){
                        min = participants[i][y].from
                    }
                }
            }
            if(min===minTime){
                setMinTime([min][0])
            }else{
                setMinTime(min)
            }
            
        }
        
    }

    const standardTimeConversion=(time)=>{
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

    const handleTimeArray = ()=>{
        if(participants.length>0){
            let arr =[]; 
            for(let i =Number(minTime); i<=Number(maxTime); i++){
                arr.push(standardTimeConversion(i))
            }
            arr.unshift("")
            setTimeArray(arr)
        }
        
    }

    //functions that find the maximum date, minimum date and populate all dates in between

    const findMaxDate = ()=>{
        let max = "";
        let maxDate = [];
        for(let i=0; i<Object.values(participants).length;i++){
            for(let y=0;y<Object.values(participants[i]).length-1;y++){
                if(Number(participants[i][y].day.split(" ")[1])>Number(max)){
                    max = participants[i][y].day.split(" ")[1]
                    maxDate = [participants[i][y].day.split(" ")[0],participants[i][y].day.split(" ")[1]].join()
                }
            }
        }
        setMaxDate(maxDate)
    }

    const findMinDate = ()=>{
        let min = "31"
        let minDate = [];
        for(let i=0; i<Object.values(participants).length;i++){
            for(let y=0;y<Object.values(participants[i]).length-1;y++){
                if(Number(participants[i][y].day.split(" ")[1])<Number(min)){
                    min = participants[i][y].day.split(" ")[1]
                    minDate = [participants[i][y].day.split(" ")[0],participants[i][y].day.split(" ")[1]].join()
                }
            }
        }
        setMinDate(minDate)
    }

    const getIndexbyWeek = (weeks,day)=>{
        return Object.keys(weeks).find(key=>weeks[key]===day)
    }
    const getWeekbyIndex = (weeks,index)=>{
        if(index>7){
            return weeks[index-7]
        }else{
            return weeks[index]
        }
    }

    const handleDateArray = ()=>{
        let arr = [];
        let weeks = {
            1:"Monday",
            2:"Tuesday",
            3:"Wednesday",
            4:"Thursday",
            5:"Friday",
            6:"Saturday",
            7:"Sunday"
        }
        if(maxDate&&minDate){
            let index = Number(getIndexbyWeek(weeks,minDate.split(",")[0]))
            let count = 0
            for(let i=minDate.split(",")[1]; i<=maxDate.split(",")[1]; i++){
                arr.push(getWeekbyIndex(weeks,index+count)+" "+i)
                count++
            }
            setDateArray(arr)
        }
    }

    //functions that compares user selected date and time, constructs array of grids with filled in info about them

    const fillGrid=()=>{

        if(dateArray.length>0){
            let grids =[];
            for(let i=0;i<dateArray.length;i++){
                grids.push(new Array(timeArray.length-1).fill(""))
            }

            for(let i=0; i<Object.values(participants).length;i++){
                for(let y=0;y<Object.values(participants[i]).length-1;y++){
                    let day = participants[i][y].day.split(" ")[0] +" "+ participants[i][y].day.split(" ")[1]
                    let index = dateArray.findIndex((date)=>date===day)
                    if(index!=-1){
                        for(let j=Number(participants[i][y].from)-Number(minTime);j<=Number(participants[i][y].to)-Number(minTime);j++ ){
                            grids[index][j] = grids[index][j]+participants[i].name+", "
                        }
                    }
                }
            }
            setGrid(grids)
        }
        
    }


    useEffect(()=>{
        if(participants.length>0){
            findMaxTime();
            findMinTime();
    
            findMaxDate();
            findMinDate();
        }
    },[participants])


    useEffect(()=>{
        handleTimeArray();
        handleDateArray();
    },[maxTime,minTime,maxDate,minDate])

    useEffect(()=>{
        fillGrid();
    },[timeArray,dateArray,participants])

  return (
    <div className="grid__container">
        <div className="grid__time--wrapper">
            {timeArray.length>0 ? timeArray.map((time)=>{
                return(
                    <div className="grid__time--cell">{time}</div>
                )
            }
            ):("")}
        </div>
        <div className="grid__box">
            <div className="grid__date--wrapper">
                {dateArray.length>0 ? dateArray.map((date)=>{
                    return(
                        <div className="grid__date--cell">{date}</div>
                    )
                }
                ):("")}
            </div>
            <div className="grid__rowcontainer">
                {grid.length>0 ? grid.map((row)=>{
                    return(
                        <div className="grid__row">
                            {row.map((cell)=>{
                                return(
                                    <div className="grid__cell">{cell}</div>
                                )
                            })
                            }
                        </div>
                    )
                }
                ):("")  
                }
            </div>
        </div>
    </div>
  )
}
