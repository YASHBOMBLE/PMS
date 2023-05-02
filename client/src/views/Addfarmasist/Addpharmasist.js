import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { loginRequired } from '../../util/LoginRequired'
function Addpharmasist() {

     
  useEffect(()=>{
    loginRequired();
  },[])
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [mono, setMono] = useState()

    async function addmanagers() {
        const response = await axios.post('/addpharmasist', {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            phone: mono
        })

        console.log(response.data.data)
        if (response.data.success) {

            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "okk!",
            });
           window.location.reload();
        }
        else {
            await swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
            });
        }
        setEmail('')
        setFname('')
        setLname('')
        setMono('')
        setPassword('')
    }

  return (
    <div><div className="col-md-4 m-auto"><br />
    <center><h5>Add Pharmasist Page</h5></center>
     <div className="form-group">
                        <input type="text" className="form-control" name="fname" placeholder="Enter First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
                    </div><br />
                    <div className="form-group">
                        <input type="text" className="form-control" name="lname" placeholder="Enter Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
                    </div><br />
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Enter Email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div><br />
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div><br />
                    <div className="form-group">
                        <input type="text" className="form-control" name="mobile" placeholder="Enter Mobile No." value={mono} onChange={(e) => setMono(e.target.value)} />
                    </div><br />
                    <button className="btn btn-primary" onClick={addmanagers}>Add Pharmasist</button>
</div></div>
  )
}

export default Addpharmasist