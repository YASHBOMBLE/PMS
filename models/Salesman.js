import {Schema, model} from "mongoose"

const salesmanSchema = new Schema({
  id : String,
  fname: String,
  lname : String,
  email: String,
  password: String,
  phone: String
 
 
}, { timestamps: true },{Location:true})

const Salesman = model("Salesman", salesmanSchema)

export default Salesman