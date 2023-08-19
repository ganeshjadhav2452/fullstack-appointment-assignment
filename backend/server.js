const express = require('express');
const cors = require('cors')
const appRoutes = require('./routes/appRoutes')
const sequelize = require('./utils/database')


const app = express();
app.use(express.json())
app.use(cors())
app.use(appRoutes)

sequelize.sync().then(res => {app.listen(5000,()=>{
 
    console.log('server started')
})}).catch(err=>console.log(err))
