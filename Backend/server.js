import express from 'express' ;
import cors from 'cors';


// app config ==>

const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
   res.send( "Api working")
})

app.listen(port, () => console.log('your port is running on the http://localhost:4000'))