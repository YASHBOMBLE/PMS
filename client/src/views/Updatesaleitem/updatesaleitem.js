import React,{useEffect} from 'react'
import { loginRequired } from '../../util/LoginRequired';
function updatesaleitem() {
     
  useEffect(()=>{
    loginRequired();
  },[])
  
  return (
    <div>updatesaleitem</div>
  )
}

export default updatesaleitem