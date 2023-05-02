import React,{useEffect} from 'react'
import { loginRequired } from '../../util/LoginRequired';
function Viewprescription() {
     
  useEffect(()=>{
    loginRequired();
  },[])
  return (
    <div>Viewprescription</div>
  )
}

export default Viewprescription