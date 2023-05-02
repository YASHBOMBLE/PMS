import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Manager from './views/Manager/Manager'
import Pharmasist from './views/Pharmasist/Pharmasist'
import Salesman from './views/Salesman/Salesman'
import Addmanager from './Component/Addmanager/Addmanager'
import Addsalesman from './Component/Addsalesman/Addsalesman'

import Managerview from './Component/Managerview/Managerview'
import Pharmasistview from './Component/Pharmasistview/Pharmasistview'
import Salesmanview from './Component/Salesmanview/Salesmanview'
import Addpharmasist from './views/Addfarmasist/Addpharmasist'
import updatesaleitem from './views/Updatesaleitem/updatesaleitem'
import Addprescription from './views/Addprescription/Addprescription'
import Viewprescription from './views/Viewprescription/Viewprescription'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manager" element={<Addmanager/>} />
          <Route path="/salesman" element={<Addsalesman />} />
          <Route path="/pharmasist" element={<Addpharmasist />} />
          <Route path="/viewmanager" element={<Managerview />} />
          <Route path="/viewpharmasist" element={<Pharmasistview />} />
          <Route path="/viewsalesman" element={<Salesmanview />} />
          <Route path="/updatesaleitem" element={<updatesaleitem />} />
          <Route path="/addprescription" element={<Addprescription />} />
          <Route path="/viewprescription" element={<Viewprescription />} />




        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App