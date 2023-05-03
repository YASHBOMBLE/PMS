import React,{useEffect,useState} from 'react'
import { loginRequired } from '../../util/LoginRequired';
import axios from 'axios';
function Viewprescription() {
  const [currentprescription, setAllprescription] = useState([])

  useEffect(()=>{
    loginRequired();
    fetchAllprescription();
  },[])

  async function fetchAllprescription() {
    const response = await axios.get('/viewprescription')
    setAllprescription(response.data.data)
}
useEffect(() => {
  fetchAllprescription();
}, [])

  return (
    <div>
        <div class="row">
            <div class="col-md-8 m-auto"><br /><br />
                <center><h5>List of all prescriptions</h5></center>
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>S.No</th>
                            <th>Patient No</th>
                            <th>Patient Name</th>
                            <th>Medicine</th>
                            <th>Dose</th>
                            <th>Date</th>
                            <th>Remark</th>
                            
                        </tr>
                        </thead>{
                          currentprescription?.map((index,item)=>{
                            return(
                              <>
                              <tbody>
                                                        <tr>
                                <td>{item+1}</td>
                                <td>{index.pno}</td>
                                <td>{index.pname}</td>
                                <td>{index.medicine}</td>
                                <td>{index.dose}</td>
                                <td>{index.date}</td>
                                <td>{index.remark}</td>
                             
                            </tr>
                                                           

                                                    </tbody>
                              </>
                            )
                          })
                          
                    }
                </table>
            </div>
            
        </div>
    
    </div>
  )
}

export default Viewprescription