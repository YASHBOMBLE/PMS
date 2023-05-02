import {Schema, model} from "mongoose"

;
const managerSchema = new Schema({

  fname: String,
  lname : String,
  email: String,
  password: String,
  phone: String
 
 
}, { timestamps: true },{Location:true})

const Manager = model("Manager", managerSchema)

export default Manager