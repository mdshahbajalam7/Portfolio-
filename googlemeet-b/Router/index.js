const {Router} = require("express")
// const mettingadata = require("../model/index")
const controllers = require("../controllers/controllers")
const mettingRouter = Router()


// mettingRouter.post("/api/save-call-id",async(req,res)=>{
//     try {
        
//     } catch (error) {
//         res.status(400).send(error.message)
        
//     }

// })
// mettingRouter.get("/api/get-call-id/:id",async(req,res)=>{

// })
mettingRouter.post("/api/save-call-id",controllers.saveCallId)
mettingRouter.get("/api/get-call-id/:id",controllers.getCallId)

module.exports = mettingRouter