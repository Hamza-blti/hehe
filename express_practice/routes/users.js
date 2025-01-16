const express = require("express")
const router = express.Router();

router.get("/",(req ,res)=>{
    console.log(req.query.name)
    res.send("user list")
})

router.get("/new",(req ,res)=>{
    res.render("users/new" )
})

router.post("/",(req ,res)=>{
    const isValid = false;
    if (isValid) {
        users.push({firstName:req.body.firstName})
        res.redirect(`/users/${users.length - 1 }`)
    }
    else{
        console.log("error")
        res.render("users/new",{firstName : req.body.firstName})
    }
    
})

router.
route("/:id")
.get((req , res)=>{
    console.log(req.user);
    
    res.send(`Get User with ID ${req.params.id}`)
})
.put((req , res)=>{
    res.send(`Update User with ID ${req.params.id}`)
})
.delete((req , res)=>{
   
    res.send(`Deleted User with ID ${req.params.id}`)   
})

const users = [{ name : "Hamza"} , {name : "Ali"}];

router.param("id",(req ,res , next , id)=>{
    req.user = users[id]
    next()
})
module.exports = router