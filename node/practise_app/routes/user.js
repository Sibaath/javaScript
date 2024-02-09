const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>
{
    console.log(req.query.name)
    res.send("This is user page")
    // res.send("User created")
})

router.post("/",(req,res)=>
{
    // res.send("User created successfully")
    // res.send(`Welcome user `)
    // console.log(`${req.body.firstname}`)
    var isValid = true;
    if(isValid)
    {
        users.push({firstname : req.body.firstname})
        res.redirect(`/user/${users.length-1}`)
        console.log(users)
    }
    else
    {
        console.log("error")
        res.redirect("/user/new")
    }
})

router.get("/new",(req,res)=>
{
    res.render("user/new",{ firstname : "Sibaath"})
})


router.get("/profile",(req,res)=>
{
    res.send("This is profile page inside users page")
})

const users =[{name : "sibaath"},{name: "ahmed"}]
router.param("id",(req,res,next,id)=>
{
    req.user = users[id]
    next()
})

router.get("/:id",(req,res)=>
{
    console.log(req.user)
    res.send(`Welcome user ${req.params.id}`)
})

module.exports = router