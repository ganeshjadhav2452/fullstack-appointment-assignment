import React,{ useState } from "react";
import AppointmentContext from "./AppointmentContext";
import axios from "axios";
const AppointmentContextProvider = (props) => {
    const [formValues, setFormValues] = useState({});
    const [editFormValues, setEditFormValues] = useState({});
    const [appData, setAppData] = useState([])
    const [flag,setFlag] = useState(false)

    const saveAppointment = async (data) => {
        const response = await axios.post("http://localhost:5000/saveapp", {
            name: data.name,
            phoneNumber: data.phoneNumber,
        });

        if (response.ok) {
            console.log("request sended successfully");
        }
    };

    const getAllAppointments = async () => {
        try {
            let data = await axios.get("http://localhost:5000/getallapps");

            setAppData(data.data)
        } catch (error) {
            console.log(error)
        }

    };
    
    const deleteApp = async(id)=>{
        await axios.delete(`http://localhost:5000/delete/${id}`)
        setFlag(!flag)
    }

    const updateTheAppointment =async(data)=>{
        console.log(data)
        try {
            await axios.put(`http://localhost:5000/edit/${data.id}`,{...data})
            
            setFlag(!flag)
        } catch (error) {
                console.log(error)
        }
    }
    return (
        <AppointmentContext.Provider
            value={{ formValues, setFormValues, saveAppointment, getAllAppointments,appData ,deleteApp,flag,setEditFormValues,editFormValues,updateTheAppointment}}
        >
            {props.children}
        </AppointmentContext.Provider>
    );
};

export default AppointmentContextProvider;
