import React, { useRef, useState } from 'react';
import '../../styles/patient/navbar/patient-records.css'; 
import { MdAccountCircle } from "react-icons/md"; 
import { EHRTextbox } from '../ehr-textbox.jsx';
import { EHR2Textbox } from '../ehr-textbox.jsx';
import { EHR3Textbox } from '../ehr-textbox.jsx';
import { EHR4Textbox } from '../ehr-textbox.jsx';
import { EHR5Textbox } from '../ehr-textbox.jsx';
import GradientButton from '../gradient-button.jsx';
import ExportEHR from '../export.jsx';

const PatientRecords = () => {
  const printRef = useRef();
  
  const profileImageUrl = null; 

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
  
          // Populate the form fields with imported data
          setCaseno(data.caseno || '');
          setPatientname(data.name || '');
          setDate(data.date || '');
          setAddress(data.address || '');
          setAge(data.age || '');
          setClinic(data.clinic || '');
          setPhonenumber(data.phone || '');
          setOccupation(data.occupation || '');
          setDoctor(data.doctor || '');
          setDistanceOD(data.distanceOD || '');
          setDistanceOS(data.distanceOS || '');
          setNearOD(data.nearOD || '');
          setNearOS(data.nearOS || '');
          setRxOD(data.oldRxOD || '');
          setRxOS(data.oldRxOS || '');
          setODvaU(data.ODvaU || '');
          setOSvaU(data.OSvaU || '');
          setODvaRX(data.ODvaRX || '');
          setOSvaRX(data.OSvaRX || '');
          setPD(data.pd || '');
          setDBL(data.dbl || '');
          setSize1(data.size1 || '');
          setBifocals(data.bifocals || '');
          setLens(data.lens || '');
          setSize2(data.size2 || '');
          setRemarks(data.remarks || '');
  
        } catch (err) {
          alert("Error parsing JSON file. Please select a valid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };
  
  
  
  const handleExport = async (printRef) => {
    // Export to PDF logic here
    await ExportEHR(printRef);
  
    // Extract form data
    const formData = {
      caseno,
      name,
      date,
      address,
      age,
      clinic,
      phone,
      occupation,
      doctor,
      distanceOD,
      distanceOS,
      nearOD,
      nearOS,
      oldRxOD,
      oldRxOS,
      ODvaU,
      OSvaU,
      ODvaRX,
      OSvaRX,
      pd,
      dbl,
      size1,
      bifocals,
      lens,
      size2,
      remarks,
    };
  
    // Save form data as a JSON file
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "formData.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };
  

   const [caseno, setCaseno] = useState(''); 
   const [name, setPatientname] = useState(''); 
   const [date, setDate] = useState('');

    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [clinic, setClinic] = useState(''); 
  
    const [phone, setPhonenumber] = useState('');
    const [occupation, setOccupation] = useState('');
    const [doctor, setDoctor] = useState('');

    const [distanceOD, setDistanceOD] = useState('');
    const [distanceOS, setDistanceOS] = useState('');
    const [nearOD, setNearOD] = useState('');
    const [nearOS, setNearOS] = useState('');

    const [oldRxOD, setRxOD] = useState('');
    const [oldRxOS, setRxOS] = useState('');
    const [ODvaU, setODvaU] = useState('');
    const [OSvaU, setOSvaU] = useState('');
    const [ODvaRX, setODvaRX] = useState('');
    const [OSvaRX, setOSvaRX] = useState('');

    const [pd, setPD] = useState('');
    const [dbl, setDBL] = useState('');
    const [size1, setSize1] = useState('');
    const [bifocals, setBifocals] = useState('');
    const [lens, setLens] = useState('');
    const [size2, setSize2] = useState('');
    const [remarks, setRemarks] = useState('');

    
    const handleChange = (setter) => (e) => setter(e.target.value);

    return (
      <div className="records-container">
        <div className="horizontal-container">
          <div className="heading-container">
            <h1 className="heading-title">My EHR</h1>
          </div>
          <div className="icon-container">
  {/* Import button */}
  <label htmlFor="file-input" className="import-label">
  <i className="fas fa-download icon"></i> 
  </label>
  <input
    id="file-input"
    type="file"
    accept=".json"
    onChange={handleImport}
    style={{ display: 'none' }} // Hide the input itself and use the label as a trigger
  />
  {/* Export button */}
  <i className="fas fa-print icon" onClick={() => handleExport(printRef)}></i>
</div>
        </div>
  
        <div ref={printRef} className="card-container">
          <div className="info-card">
            <div className="horizontal-container">

              <div className="ehr-textbox-container">
              <div className="ehr-textbox-row">
                <EHRTextbox label="Case No." value={caseno} onChange={handleChange(setCaseno)} />
                <EHRTextbox label="Patient Name" value={name} onChange={handleChange(setPatientname)} />
                <EHRTextbox label="Date" value={date} onChange={handleChange(setDate)} />
              </div>
              <div className="ehr-textbox-row">
                <EHRTextbox label="Address" value={address} onChange={handleChange(setAddress)} />
                <EHRTextbox label="Age" value={age} onChange={handleChange(setAge)} />
                <EHRTextbox label="Clinic" value={clinic} onChange={handleChange(setClinic)} />
              </div>
              <div className="ehr-textbox-row">
                <EHRTextbox label="Phone No." value={phone} onChange={handleChange(setPhonenumber)} />
                <EHRTextbox label="Occupation" value={occupation} onChange={handleChange(setOccupation)} />
                <EHRTextbox label="Doctor" value={doctor} onChange={handleChange(setDoctor)} />
              </div>
            </div>
          </div>

        </div>
          <div className="horizontal-container">
            <div className="exam-remarks-container">

              <div className="exam-card">
                <div className="horizontal-container">

                    <div class="rx-container">
                      <div class="rx-new">
                          <span class="rx-title">NEW</span>
                           <span class="rx-symbol">℞</span>
                        <div class="vertical-label right1">DISTANCE</div>
                        <div class="vertical-label right2">NEAR</div>
                      </div>
                      <div class="rx-old">
                        <span class="rx-title">OLD</span>
                        <span class="rx-symbol">℞</span>
                      </div>
                    </div>
                    
                <div className="o-container">
                  <div className="o-card">
                    <EHR2Textbox label="O.D" value={distanceOD} onChange={handleChange(setDistanceOD)} />
                  </div>
                  <div className="o-card">
                    <EHR2Textbox label="O.S" value={distanceOS} onChange={handleChange(setDistanceOS)} />
                  </div>
                  <div className="o-card">
                    <EHR2Textbox label="O.D" value={nearOD} onChange={handleChange(setNearOD)} />
                  </div>
                  <div className="o-card">
                    <EHR2Textbox label="O.S" value={nearOS} onChange={handleChange(setNearOS)} />
                  </div>
                  <div className="o-card">
                    <EHR2Textbox label="O.D" value={oldRxOD} onChange={handleChange(setRxOD)} />
                  </div>
                </div>

                <div className="v-segment-container">
                  <div className="horizontal-container">
                    <div className="v-card">
                      <EHR3Textbox label="V.A UNAIDED" value={ODvaU} onChange={handleChange(setODvaU)} />
                    </div>
                    <div className="v-card">
                      <EHR3Textbox label="V.A WITH RX" value={ODvaRX} onChange={handleChange(setODvaRX)} />
                    </div>
                  </div>
                  <div className="horizontal-container">
                    <div className="v-card">
                      <EHR3Textbox label="V.A UNAIDED" value={OSvaU} onChange={handleChange(setOSvaU)} />
                    </div>
                    <div className="v-card">
                      <EHR3Textbox label="V.A WITH RX" value={OSvaRX} onChange={handleChange(setOSvaRX)} />
                    </div>
                  </div>
                  <div className="segment-card">
                    <h1 className="segment-text">SEGMENT</h1>
                  </div>
                  <div className="o-card">
                    <EHR2Textbox label="O.S" value={oldRxOS} onChange={handleChange(setRxOS)} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="remarks-card">
              <EHR5Textbox label="Remarks" value={remarks} onChange={handleChange(setRemarks)} />
              <div className="button-container" data-html2canvas-ignore>
                <GradientButton label="Save" />
              </div>
            </div>
        </div>

        <div className="glasses-fees-container">
          <div className="glasses-container">
            <div className="glasses-card">
              <EHR4Textbox label="P.D." value={pd} onChange={handleChange(setPD)} />
              <EHR4Textbox label="DBL" value={dbl} onChange={handleChange(setDBL)} />
              </div>
            <div className="glasses-card">
              <EHR4Textbox label="SIZE" value={size1} onChange={handleChange(setSize1)} />
            </div>
            <div className="glasses-card">
              <EHR4Textbox label="BIFOCALS" value={bifocals} onChange={handleChange(setBifocals)} />
              <EHR4Textbox label="LENS" value={lens} onChange={handleChange(setLens)} />
            </div>
            <div className="glasses-card">
              <EHR4Textbox label="SIZE" value={size2} onChange={handleChange(setSize2)} />
            </div>
          </div>
          <div className="fees-container">
            <div className="horizontal-container">
              <div className="fees-title">
                <h1 className="fees-text">ANALYTICAL FEE</h1>
              </div>
              <div className="fees-box"></div>
              <div className="fees-box"></div>
            </div>
            <div className="horizontal-container">
              <div className="fees-title">
              <h1 className="fees-text">ORTHOPTIC FEE</h1>
              </div>
              <div className="fees-box"></div>
              <div className="fees-box"></div>
            </div>
            <div className="horizontal-container">
              <div className="fees-title">
              <h1 className="fees-text">LENSES</h1>
              </div>
              <div className="fees-box"></div>
              <div className="fees-box"></div>
            </div>
            <div className="horizontal-container">
              <div className="fees-title">
              <h1 className="fees-text">FRAME</h1>
              </div>
              <div className="fees-box"></div>
              <div className="fees-box"></div>
            </div>
            <div className="horizontal-container">
              <div className="fees-title">
              <h1 className="fees-text">TOTAL FEE</h1>
              </div>
              <div className="fees-box"></div>
              <div className="fees-box"></div>
            </div>
          </div>   
        </div> 
        </div>
     </div>
    </div>
  );
};

export default PatientRecords;
