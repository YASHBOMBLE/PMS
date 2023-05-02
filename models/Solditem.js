import {Schema, model} from "mongoose"

const solditemSchema = new Schema({
 
 name : String,
 quantity : String
}, { timestamps: true },{Location:true})

const Solditem = model("Solditem", solditemSchema)

export default Solditem