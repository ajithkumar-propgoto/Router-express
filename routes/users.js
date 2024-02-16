var express= require('express')

var router = express.Router()

router.get("/",(req,res,next) =>{
    console.log("api called")
    next();
})

router.get("/",(req,res) => {
    res.send("get Request for user")
})

router.get("/user-details/:id",(req,res) => {
    res.send("user details" + req.params.id)
})

router.get("/search-by-location/:state/:city",(req,res) => {
    res.send("user details" + req.params.state + req.params.city)
})


router.get("/search/:key([0-9]{4})", (req,res) =>{
    res.send(req.params.key)
})


router.get("/search-username/:key([a-zA-Z]{4})",(req,res) => {
    res.send(req.params.key)
})

router.get("*",(req,res) =>{
    res.send("url not found")
})

router.post("/create-user",(req,res) => {
    res.send("user created")
})

router.put("/update-user", (req,res) => {
    res.send("updated")
})

module.exports = router;