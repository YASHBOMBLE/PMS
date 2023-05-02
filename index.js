import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';
import Manager from './models/Manager.js';
import Pharmasist from './models/Pharmasist.js';
import Salesman from './models/Salesman.js';
import Prescription from './models/Prescription.js';
import Solditem from './models/Solditem.js';

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect("process.env.MONGODB_URL", () => {
    console.log('Connected to MongoDB');
})

//api routes start here

app.post('/signup', async (req, res) => {
    const { name, phone, email, password, role } = req.body;

    // validation to check if all fields are filled starts here
    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');

    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(', ')} are required`
        })
    }
    // validation to check if all fields are filled ends here

    // validation to check if email already exists starts here
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }
    // validation to check if email already exists ends here

    // validation to check if phone already exists starts here
    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists"
        })
    }
    // validation to check if phone already exists ends here

    const user = new User({
        name: name,
        phone: phone,
        email: email,
        password: password,
        role: role
    })

    const savedUser = await user.save();

    res.json({
        success: true,
        message: "User created successfully",
        data: savedUser
    })
})


app.post('/login', async (req, res) => {
    const { email, password ,role} = req.body;

    if(!email || !password) {
        return res.json({
            success: false,
            message: "Email and password are required"
        })
    }

    const existingUser = await User.findOne({ email: email, password: password ,role:role});

    if(existingUser){
        return res.json({
            success: true,
            message: "Login successful",
            data: existingUser
        })
    }
    else
    {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})

app.post('/addmanager',async(req,res)=>{
    const {fname,lname,email,password,phone} = req.body;

    const manager = new Manager({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        phone: phone
    })

    const savedManager = await manager.save();

    res.json({
        success: true,
        message: "Manager created successfully",
        data: savedManager
    })
})

app.post('/addpharmasist',async(req,res)=>{
    const {fname,lname,email,password,phone} = req.body;

    const pharmasist = new Pharmasist({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        phone: phone
    })

    const savedPharmasist = await pharmasist.save();

    res.json({
        success: true,
        message: "Manager created successfully",
        data: savedPharmasist
    })
})

app.get('/viewpharmasist',async(req,res)=>{
    const pharmasist = await Pharmasist.find()

    res.json({
        success: true,
        message: "Pharmasist fetched successfully",
        data: pharmasist
    })
})

app.get('/viewmanager',async(req,res)=>{
    const manager = await Manager.find()

    res.json({
        success: true,
        message: "Manager fetched successfully",
        data: manager
    })
})

app.post('/addsalesman',async(req,res)=>{
    const {fname,lname,email,password,phone} = req.body;

    const salesman = new Salesman({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        phone: phone
    })

    const savedSalesman = await salesman.save();

    res.json({
        success: true,
        message: "Salesman created successfully",
        data: savedSalesman
    })
})

app.get('/viewsalesman',async(req,res)=>{
    const salesman = await Salesman.find()

    res.json({
        success: true,
        message: "Salesman fetched successfully",
        data: salesman
    })
})

app.post('/addprescription',async(req,res)=>{
    const {pno,pname,medicine,dose,date,remark} = req.body;

    const prescription = new Prescription({
        pno: pno,
        pname : pname,
        medicine: medicine,
        dose: dose,
        date: date,
        remark : remark
    })

    const savedPrescription = await prescription.save();

    res.json({
        success: true,
        message: "Salesman created successfully",
        data: savedPrescription
    })
})


app.post('/solditem',async(req,res)=>{
    const {name,quantity} = req.body;

    const solditem = new Solditem({
        name : name,
        quantity : quantity
    })

    const savedItem = await solditem.save();

    res.json({
        success: true,
        message: "Solditem created successfully",
        data: savedItem
    })
})

app.get('/viewprescription',async(req,res)=>{
    const prescription = await Prescription.find()

    res.json({
        success: true,
        message: "prescription fetched successfully",
        data: prescription
    })
})
//api routes end here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})