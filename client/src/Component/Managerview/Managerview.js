import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { loginRequired } from '../../util/LoginRequired';
function Managerview() {

 
    useEffect(()=>{
        loginRequired();
      },[])
    const [currentManager, setAllManager] = useState([])

  
    async function fetchAllManager() {
      const response = await axios.get('viewmanager')
      console.log(response.data.data)
      setAllManager(response.data.data)
    }
    useEffect(() => {
        fetchAllManager();
      
      }, [])
  return (
    <div>
        <div className="row">
            <div className="col-md-4 m-auto"><br /><br />
                <center>
                    <h5>List of all Managers</h5>
                </center>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>S.No</th>
                            <th>FName</th>
                            <th>LName</th>
                            <th>Email Id</th>
                            <th>Mobile</th>
                            <th>Role</th>
                
                        </tr>
                    </thead>
                   {
                    currentManager?.map((item,index)=>{
                        return(
                            <>
                             <tbody>
                                 <tr>
                            <td>{index}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>Manager</td>
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

export default Managerview