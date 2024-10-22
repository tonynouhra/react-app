import {BiCalendar} from "react-icons/bi";
import Search from "./components/search";
import AddApointment from "./components/AddApointment"
import appointmentlist from "./data.json"
import AppointmentInfo from "./components/Appointmentinfo";

function App() {
    return (<div className="App container mx-auto mt-3 font-thin">
        <h1 className="text-5xl"><BiCalendar className="inline-block text-amber-950"/>
            your Appointments</h1>
        <AddApointment/>
        <Search/>
        <ul class="divide-y dicide-gray-200">

            {appointmentlist.map(appointment => (<AppointmentInfo key={appointment.id} appointment={appointment}/>))}


        </ul>

    </div>);
}

export default App;

/*
we are using javascript's map function to create temporary variable called appointment for each one of those items as
they come in
*/
