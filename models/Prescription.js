import {Schema, model} from "mongoose"

const prescriptionSchema = new Schema({
  pno: String,
  pname : String,
  medicine: String,
  dose: String,
  date: String,
  remark : String
 
 
}, { timestamps: true },{Location:true})

const Prescription = model("Prescription", prescriptionSchema)

export default Prescription