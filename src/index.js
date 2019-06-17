const express = require('express')
const userRouter = require('./router/userRouter')
// const tasksRouter = require('./routers/taskRouter')

const app = express()
const port = 1992

app.get('/', (req, res) => {-
    res.send(`<h1>API Running on Heroku port ${port}</h1>`)
})

app.use(express.json())
app.use(userRouter)
















app.listen(port, () => {
    console.log("Running at ", port);
    
})