import {Schema, model} from "mongoose"

const pharmasistSchema = new Schema({
  id : String,
  fname: String,
  lname : String,
  email: String,
  password: String,
  phone: String
 
 
}, { timestamps: true },{Location:true})

const Pharmasist = model("Pharmasist", pharmasistSchema)

export default Pharmasist