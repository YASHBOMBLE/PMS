import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import swal from 'sweetalert';
import Select from 'react-select';
function Login() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [role,setRole] = useState(null);
  
  const userRole = [
    { label: "Admin", value: 355 },
    { label: "Manager", value: 54 },
    { label: "Salesman", value: 43 },
    { label: "Pharmasist", value: 61 }
  ]
  async function loginUser() {
    const response = await axios.post('/login', {
      email: email,
      password: password,
      role : role
    })
    console.log(response.data)
    if (response.data.success) {

      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Aww yiss!",
      });
      localStorage.setItem('currentUser', JSON.stringify(response.data.data));
      window.location.href = "/"
    }
    else {
      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
      setEmail("")
      setPassword("")
      localStorage.removeItem('currentUser');
    }
  }

  return (
    <div>
      <div className='login_page'>
        <div class="row">
          <div class="col-md-4 m-auto p-3" id="form_content"><br />
            <h3><center>Login Page</center></h3>
            <div class="form-group">
              <input type="emai" class="form-control m-2" placeholder="Enter Email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control m-2" name="password" placeholder="Enter Password" />
            </div>
            <Select options={userRole} id='class' placeholder='Select Role' className='m-2'  onChange={setRole}/>
          <button class="btn btn-primary btn-sm login-wdth" >Login</button>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Login