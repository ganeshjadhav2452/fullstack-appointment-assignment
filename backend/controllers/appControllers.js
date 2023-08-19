
const Appointment = require('../models/appModel')

module.exports = appControllers ={
    saveApp:async(req,res,next)=>{
   try {
   
    const result =   await Appointment.create({
        name:req.body.name,
        phoneNumber:Number(req.body.phoneNumber)
    })

   
    res.status(200).send('your appointment has been added successfuly')

   } catch (error) {
    console.log(error)
    res.status(500).send('sorry!something went wrong')
   }  
    },

    fetchAllAppointments:async(req,res,next)=>{
     
        try {
            const data = await Appointment.findAll();
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send('sorry ! something went wrong')
            console.log(error)
        }

    },

    deleteApp:async(req,res,next)=>{
       try {
        await Appointment.destroy({where:{
            id:req.params.id
        }})
        res.status(200).send('appointment deleted successfully')
       } catch (error) {
        console.log(error)
        res.status(404).send('sorry appointment id not found')
       }
    },

    editApp:async(req,res,next)=>{

        try {
            await Appointment.update(
                {name:req.body.name,phoneNumber:req.body.phoneNumber},{where:{id:req.params.id}}
            )
            res.status(200).send('appointment updated successfully !')
        } catch (error) {
            console.log(error)
            res.status(500).send('sorry something went wrong')
        }
    }


}