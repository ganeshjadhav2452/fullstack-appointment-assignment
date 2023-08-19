import React from 'react'
import InputForm from './components/inputForms/InputForm'
import AppointmentContextProvider from './context/AppointmentContextProvider'
import AppointmentBody from './components/appointments/AppointmentBody'
const App = () => {
  return (
    <AppointmentContextProvider>
      <InputForm />
      <AppointmentBody/>
    </AppointmentContextProvider>
  )
}

export default App