const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
var corsOptions = {

    origin:true


}
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// database connection 
const db = require('./models')
db.mongoose.connect(db.url,{

    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{


    console.log('Connected to the Database!')

}).catch(err => {

    console.log("Cannot connect to Database",err)
    process.exit()
})
const init = require('./models/intial-model')
init()

// routes
require('./routes/auth.routes')(app)
require('./routes/news.routes')(app)

app.get('/',(req,res)=>{


    res.send('Welcome to JWT Express Server')


})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{


    console.log(`Server is running on port ${PORT}`)


})


