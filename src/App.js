import "./App.scss"
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import EventPage from "./pages/EventPage/EventPage";

function App() {
  let [date, setDate] = useState(new Date());
  let [eventName, setEventName] = useState("Frank's Cookoff");
  let [organizerName, setOrganizerName] = useState("Frank Ocean");
  let [locationName, setLocationName] = useState("Trinity Bellwoods Park");
  let [locationAddress, setLocationAddress] = useState("Trinity Bellwoods Park (790 Queen St W)");

  
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className="Page">
          <Routes>
              <Route path="/" exact element={<LandingPage/>} />
              <Route path="/PlanEasy" element={<Navigate to="/" />} />
              <Route path="/create" element={<CreatePage 
              date={date} 
              setDate={setDate}
              eventName={eventName}
              setEventName={setEventName}
              organizerName={organizerName}
              setOrganizerName={setOrganizerName}
              locationName={locationName}
              setLocationName={setLocationName}
              locationAddress={locationAddress}
              setLocationAddress={setLocationAddress}  
              />} />
              <Route path="/event" element={<EventPage 
              date={date}
              eventName={eventName}
              organizerName={organizerName}
              locationName={locationName}
              locationAddress={locationAddress}
              />}></Route>
              <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
