import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { loginRequired } from '../../util/LoginRequired';
function Salesmanview() {
   
  useEffect(()=>{
    loginRequired();
  },[])
  const [currentSalesman, setAllSalesman] = useState([])

  async function fetchAllSalesman() {
    const response = await axios.get('viewsalesman')
    setAllSalesman(response.data.data)
  }
  useEffect(() => {

    fetchAllSalesman();
  }, [])

  return (
    <div>

<div className="row">
            <div className="col-md-4 m-auto"><br /><br />
                <center>
                    <h5>List of all Salesman</h5>
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
                    currentSalesman?.map((item,index)=>{
                        return(
                            <>
                             <tbody>
                            <tr>
                            <td>{index}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>Saleman</td>
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

export default Salesmanview