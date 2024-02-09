// console.log("hi welcome to express")
const express = require('express')
const app = express()

app.set('view engine','ejs');
app.use(express.static("public"))
app.use(express.urlencoded({
    extended : true
}))
app.use(express.json())

// app.get("/:id",(req,res)=>
// {
//     console.log(req.user)
//     res.send(`Welcome user ${req.params.id}`)
// })

app.get("/",(req,res)=>
{
    console.log("here");
    res.render("index",{ text : "Sibaath"})
    // res.send("hi")
    // res.download("server.js")
    // res.json({ message : "error in running code"})
})

const userRouter = require('./routes/user')
app.use("/user",userRouter)



app.listen(8000)