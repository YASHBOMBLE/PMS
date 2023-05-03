import axios from 'axios'
import React, { useState } from 'react'
import Select from 'react-select';
import swal from 'sweetalert';

function Addprescription() {
  const [pno, setPno] = useState()
  const [pname, setPname] = useState()
  const [medicine, setMedicine] = useState()
  const [dose, setDose] = useState()
  const [date, setDate] = useState()
  const [remark, setRemark] = useState()

  const selmedicine = [
    { label: "Amoxicillin", value: 355 },
    { label: "Calcium", value: 54 },
    { label: "Dopamine", value: 43 },
    { label: "Anoxaparin", value: 61 },
    { label: "Hydralazine", value: 61 }

  ]

  async function save() {
    const response = await axios.post('/addprescription', {
      pno: pno,
      pname: pname,
      medicine: medicine.label,
      dose: dose,
      date: date,
      remark: remark
    })

    if (response.data.success) {

      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Okk",
      });
     
         
    }
    else {
      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
  }
}

  return (
    <div>
      <div class="row">
        <div class="col-md-4 m-auto"><br />
          <center><h5>Add Prescription</h5></center>
         
            <div class="form-group">
              <input type="text" class="form-control" name="p_no" placeholder="Patient No" value={pno} onChange={(e) => setPno(e.target.value)} />
            </div><br />
            <div class="form-group">
              <input type="text" class="form-control" name="p_name" placeholder="Patient Name" value={pname} onChange={(e) => setPname(e.target.value)} />
            </div><br />
            <div class="form-group">
              <Select options={selmedicine} id='class' placeholder='Select Prescription' className='m-2' onChange={setMedicine} />

            </div><br />
            <div class="form-group">
              <div class="form-group">
                <input type="text" class="form-control" name="p_name" placeholder="Patient Dose" value={dose} onChange={(e) => setDose(e.target.value)} />
              </div><br />
            </div><br />
            <div class="form-group">
              <div class="form-group">
                <input type="text" class="form-control" name="p_name" placeholder="Enter Date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div><br />
            </div><br />
            <div class="form-group">
              <textarea class="form-control" name="remark" value={remark} onChange={(e) => setRemark(e.target.value)}>Remark...</textarea>
            </div><br />
            <button type="submit" class="btn btn-primary" onClick={save} name="add_prescription">Save</button>
    
        </div>
      </div>


    </div>
  )
}

export default Addprescription