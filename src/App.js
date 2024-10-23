import {useState, useEffect, useCallback} from "react";
import {BiCalendar} from "react-icons/bi";
import Search from "./components/search";
import AddApointment from "./components/AddApointment"
import AppointmentInfo from "./components/Appointmentinfo";

function App() {

    //do retrive data using fetch
    let [appointmentList, setAppointmentList] = useState([]);
    const fetchData = useCallback(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => setAppointmentList(data));

    }, [])


    useEffect(() => {
        fetchData()
    }, [fetchData]);

    return (<div className="App container mx-auto mt-3 font-thin">
        <h1 className="text-5xl"><BiCalendar className="inline-block text-amber-950"/>
            your Appointments</h1>
        <AddApointment/>
        <Search/>
        <ul class="divide-y dicide-gray-200">

            {appointmentList.map(appointment => (
                <AppointmentInfo key={appointment.id} appointment={appointment} onDeleteAppointment={
                    appointmentId => setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId)) //we are matching teh id
                }/>))}


        </ul>

    </div>);
}

export default App;

/*
we are using javascript's map function to create temporary variable called appointment for each one of those items as
they come in
*/
/*
* UseEffect is if the component did mount,component did update and component will amount
* */