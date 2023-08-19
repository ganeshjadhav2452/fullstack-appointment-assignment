import React, { useEffect } from 'react'
import { useContext } from 'react'
import AppointmentContext from '../../context/AppointmentContext'
const AppointmentBody = () => {
    const {formValues,getAllAppointments,appData,deleteApp,flag,setEditFormValues} = useContext(AppointmentContext)

    const editClickHandler =(app)=>{
      setEditFormValues(app)
    }
    const deleteClickHandler=(id)=>{
      deleteApp(id)
    }


    useEffect(()=>{
      getAllAppointments()
     },[])
   useEffect(()=>{
    getAllAppointments()
   },[formValues,flag])


  return (
    <div>
      <ul>
      {appData.map((app)=>{
        return <li>{app.name} || {app.phoneNumber}  <button onClick={()=>editClickHandler(app)}>edit</button> <button onClick={()=>deleteClickHandler(app.id)}>delete</button></li>
      })}
      </ul>
    </div>
  )
}

export default AppointmentBody