const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.use(express.json())
app.use(cors())

app.get('/',(req, res)=>{
    res.send('Job Portal code starts')
})

app.listen(port, ()=>{
    console.log(`Job Portal server is running on Port ${port}`)
})