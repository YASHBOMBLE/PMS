import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { loginRequired } from '../../util/LoginRequired';
function Pharmasistview() {

     
  useEffect(()=>{
    loginRequired();
  },[])
    const [currentPharmasist, setAllPharmasist] = useState([])

    async function fetchAllpharmasist() {
        const response = await axios.get('viewpharmasist')
        console.log(response.data.data)
        setAllPharmasist(response.data.data)
    }

    useEffect(() => {
        fetchAllpharmasist();

    }, [])

    return (
        <div>
             <div className="row">
            <div className="col-md-4 m-auto"><br /><br />
                <center>
                    <h5>List of all Pharmasist</h5>
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
                    currentPharmasist?.map((item,index)=>{
                        return(
                            <>
                             <tbody>
                            <tr>
                            <td>{index}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>Pharmacist</td>
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

export default Pharmasistview