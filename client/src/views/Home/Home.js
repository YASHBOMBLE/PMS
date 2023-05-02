import React, { useEffect, useState } from 'react'
import { currentUser } from './../../util/currentUser.js'
import axios from 'axios'
import './Home.css'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { loginRequired } from '../../util/LoginRequired.js';

function Home() {

   
  useEffect(()=>{
    loginRequired();
  },[])
  const [currentManager, setAllManager] = useState([])
  const [currentPharmasist, setAllPharmasist] = useState([])
  const [currentSalesman, setAllSalesman] = useState([])

  async function fetchAllManager() {
    const response = await axios.get('viewmanager')
    setAllManager(response.data.data)
  }

  async function fetchAllpharmasist() {
    const response = await axios.get('viewpharmasist')
    setAllPharmasist(response.data.data)
  }

  async function fetchAllSalesman() {
    const response = await axios.get('viewsalesman')
    setAllSalesman(response.data.data)
  }

  useEffect(() => {
    fetchAllManager();
    fetchAllpharmasist();
    fetchAllSalesman();
  }, [])

  async function logOut() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }


 

  function managerView() {
    if (currentUser?.role == 'Manager' || currentUser?.role == 'Admin' ) {
      return (
        <div>
          <div class="wrapper">
            <div class="row" id="header">
              <div class="col-md-7">
                <h3><b>Pharmacy Management System</b></h3>
              </div>
              <div class="col-md-2 jMm" >
                <b>{currentUser?.name} {currentUser?.role} </b>
              </div>
              <div class="col-md-3">
                <div class="dropdown">
                  <button class="dropbtn">Action</button>
                  <div class="dropdown-content">
                    <a onClick={logOut}>Logout</a>
                  </div>
                </div>
              </div>

            </div>
            <div class="row">
              <div class="col-md-2" id="sidebar">
                <div class="sidebar-header"><br />
                  <h3 class="h33"><b>PMS</b></h3><br /><br />

                </div>
                <ul>
                  <li><i class="fa fa-table li-1" ></i><a
                    href="./index.html">Dashboard</a></li>
                  <li><i class="fa fa-user-plus li-1"></i><a>Manage Manager</a>
                  </li>
                  <ul>
                    <li id="link1"><i class="fa fa-user-plus li-2" ></i><a
                      href="/manager">Add Manager</a></li>
                    <li id="link2"><i class="fa fa-pencil-square-o li-2" ></i><a href="viewmanager">View Manager</a></li>
                  </ul>

                  <li><i class="fa fa-user-plus li-1" ></i><a>Manage
                    Pharmacist</a></li>
                  <ul>
                    <li id="link3"><i class="fa fa-user-plus li-2" ></i><a
                      href="/pharmasist">Add Pharmacist</a></li>
                    <li id="link4"><i class="fa fa-pencil-square-o li-2"  ></i><a href="/viewpharmasist">View Pharmacist</a></li>
                  </ul>
                  <li><i class="fa fa-user-plus li-1" ></i><a>Manage Salesman</a>
                  </li>
                  <ul>
                    <li id="link5"><i class="fa fa-user-plus li-2" ></i><a
                      href="/salesman">Add Salesman</a></li>
                    <li id="link6"><i class="fa fa-pencil-square-o li-2" ></i><a href="/viewsalesman">View Salesman</a></li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )

    }
  }
  function Salesmanview() {
    if (currentUser?.role == 'Salesman') {
      return (
        <div>
          <div className="wrapper">
            <div className="row" id="header">
              <div className="col-md-7">
                <h3><b>Pharmacy Management System</b></h3>
              </div>
              <div className="col-md-2 jMm" >
                <b>{currentUser?.name} Salesman </b>
              </div>
              <div className="col-md-3">
                <div className="dropdown">
                  <button className="dropbtn">Action</button>
                  <div className="dropdown-content">
                    <a onClick={logOut}>Logout</a>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-2" id="sidebar">
                <div className="sidebar-header"><br />
                  <h3 class="h33"><b>PMS</b></h3><br /><br />

                </div>
                <ul>
                  <li><i class="fa fa-table li-1" ></i><a
                    href="./index.html">Dashboard</a></li>
                  
                
                  
                  <li><i class="fa fa-user-plus li-1" ></i><a>Manage Salesman</a>
                  </li>
                  <ul>
                    <li id="link5"><i class="fa fa-user-plus li-2" ></i><a
                      href="/salesman">Add Salesman</a></li>
                      </ul>
                  
                    <ul>
                    <li id="link6"><i class="fa fa-pencil-square-o li-2" ></i><a href="/viewsalesman">View Salesman</a></li>
                  </ul>
                  <li><i class="fa fa-user-plus li-1" ></i><a>Upload Total Salieman  </a></li>
                  <ul>
                        <li id="link3"><i class="fa fa-user-plus li-2" ></i><a
                                href="/updatesaleitem">Update Sales Items</a></li>

                    </ul>
                </ul>
              </div>
            </div>
           
            
          </div>
        </div>
      )

    }
  }
  function Pharmacistview() {
    if (currentUser?.role == 'Pharmasist') {
      return (
        <div>
          <div class="wrapper">
            <div class="row" id="header">
              <div class="col-md-7">
                <h3><b>Pharmacy Management System</b></h3>
              </div>
              <div class="col-md-2 jMm" >
                <b>{currentUser?.name} Pharmasist </b>
              </div>
              <div class="col-md-3">
                <div class="dropdown">
                  <button class="dropbtn">Action</button>
                  <div class="dropdown-content">
                    <a onClick={logOut}>Logout</a>
                  </div>
                </div>
              </div>

            </div>
            <div class="row">
              <div class="col-md-2" id="sidebar">
                <div class="sidebar-header"><br />
                  <h3 class="h33"><b>PMS</b></h3><br /><br />

                </div>
                <ul>
                  <li><i class="fa fa-table li-1" ></i><a
                    href="./index.html">Dashboard</a></li>
                  

                  <li><i class="fa fa-user-plus li-1" ></i><a>Manage
                    Pharmacist</a></li>
                  <ul>
                    <li id="link3"><i class="fa fa-user-plus li-2" ></i><a
                      href="/pharmasist">Add Pharmacist</a></li>
                    <li id="link4"><i class="fa fa-pencil-square-o li-2"  ></i><a href="/viewpharmasist">View Pharmacist</a></li>
                  </ul>
                  <li><i class="fa fa-user-plus li-1" ></i><a>Manage Salesman</a>
                  </li>
                  <ul>
                    <li id="link5"><i class="fa fa-user-plus li-2" ></i><a
                      href="/salesman">Add Salesman</a></li>
                    <li id="link6"><i class="fa fa-pencil-square-o li-2" ></i><a href="/viewsalesman">View Salesman</a></li>
                    <li id="link4"><i class="fa fa-pencil-square-o li-2"  ></i><a href=" ">Manage Prescription</a></li>
                  </ul>
                  
                  <li><i class="fa fa-user-plus li-1" ></i><a href='/addprescription'>Add prescription</a>
                    </li>
                    <ul>
                        <li id="link5"><i class="fa fa-user-plus li-2" ></i><a
                                href="/viewprescription">View Prescription</a></li>
                    </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )

    }
  }

  return (
    <div>
      <span>
        {
          managerView()
        }
      </span>
      <span>
        {
          Salesmanview()
        }
      </span>
      <span>
        {
          Pharmacistview()
        }
      </span>
    </div>
  )
}

export default Home