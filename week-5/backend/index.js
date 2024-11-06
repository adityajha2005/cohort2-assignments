const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const {createCard} = require("./types");
const{businesscard} = require("./db");
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Server Started");
})

app.post("/add",async(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createCard.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:'Invalid inputs'
        });
        return;
    }
    await businesscard.create({
        Name: createPayload.Name,
        Description: createPayload.Description,
        Interest: createPayload.Interest,
        Linkedin: createPayload.Linkedin
    })
    res.status(200).json({
        msg:'Card created'
    })
})

app.get("/get",async(req,res)=>{
    const cards = await businesscard.find({});
    res.status(200).json({
        cards
    })

})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});  