import React, { useState } from 'react';
import '../../styles/patient/navbar/patient-records.css'; 
import { MdAccountCircle } from "react-icons/md"; 
import { EHRTextbox } from '../ehr-textbox.jsx';
import { EHR2Textbox } from '../ehr-textbox.jsx';
import { EHR3Textbox } from '../ehr-textbox.jsx';
import { EHR4Textbox } from '../ehr-textbox.jsx';
import { EHR5Textbox } from '../ehr-textbox.jsx';
import GradientButton from '../gradient-button.jsx';

const PatientRecords = () => {
  
  const profileImageUrl = null; 

  const handleDownload = () => {
    console.log('Download icon clicked');
    // Add your download functionality here
  };
  
  const handlePrint = () => {
    console.log('Print icon clicked');
    // Add your print functionality here
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
    
    
    const handleChange1 = (e) => {
      setCaseno(e.target.value);
    };
  
    const handleChange2 = (e) => {
      setPatientname(e.target.value);
    };
  
    const handleChange3 = (e) => {
      setDate(e.target.value);
    };
  
    const handleChange4 = (e) => {
      setAddress(e.target.value);
    };
  
    const handleChange5 = (e) => {
      setAge(e.target.value);
    };
  
    const handleChange6 = (e) => {
      
      setClinic(e.target.value);
    };

    const handleChange7 = (e) => {
      const value = e.target.value;

      if (/^\d{0,11}$/.test(value)) {
        setPhonenumber(value);
      }
    };

    const handleChange8 = (e) => {
      setOccupation(e.target.value);
    };

    const handleChange9 = (e) => {
      setDoctor(e.target.value);
    };

    const handleChange10 = (e) => {
      setDistanceOD(e.target.value);
    };

    const handleChange11 = (e) => {
      setDistanceOS(e.target.value);
    };

    const handleChange12 = (e) => {
      setNearOD(e.target.value);
    };

    const handleChange13 = (e) => {
      setNearOS(e.target.value);
    };
  
    const handleChange14 = (e) => {
      setRxOD(e.target.value);
    };

    const handleChange15 = (e) => {
      setRxOS(e.target.value);
    };

    const handleChange16 = (e) => {
      setODvaU(e.target.value);
    }

    const handleChange17 = (e) => {
      setOSvaU(e.target.value);
    }
    
    const handleChange18 = (e) => {
      setODvaRX(e.target.value);
    }
    
    const handleChange19 = (e) => {
      setOSvaRX(e.target.value);
    }

    const handleChange20 = (e) => {
      setPD(e.target.value);
    }
    const handleChange21 = (e) => {
      setDBL(e.target.value);
    }
    const handleChange22 = (e) => {
      setSize1(e.target.value);
    }
    const handleChange23 = (e) => {
      setBifocals(e.target.value);
    }
    const handleChange24 = (e) => {
      setLens(e.target.value);
    }
    const handleChange25 = (e) => {
      setSize2(e.target.value);
    }
    
    const handleChange26 = (e) => {
      setRemarks(e.target.value);
    }



  return (
    <div className="records-container">

<div className="horizontal-container">
<div className="heading-container">
  <h1 className="heading-title">My EHR</h1>
</div>
<div className="icon-container">
<i class="fas fa-download icon"  onClick={handleDownload}></i> 
    <i class="fas fa-print icon"  onClick={handlePrint}></i> 
</div>
</div>


      <div className="card-container">
        <div className="info-card">
        <div className="horizontal-container">
          {/* Profile Photo */}
                      <div className="profile-photo">
                        {/* Conditionally render either the profile image or the MdAccountCircle icon */}
                        {profileImageUrl ? (
                          <img src={profileImageUrl} alt="Profile" />
                        ) : (
                          <MdAccountCircle className="profileicon" /> // Display the MdAccountCircle icon when no image is available
                        )}
                      </div>
        <div className="ehr-textbox-container">
           <div className="ehr-textbox-row">
            <EHRTextbox 
            label="Case No." 
            value={caseno} 
            onChange={handleChange1} 
            />
            <EHRTextbox 
            label="Patient Name" 
            value={name} 
            onChange={handleChange2} 
            />
            <EHRTextbox 
            label="Date" 
            value={date} 
            onChange={handleChange3} 
            />
            </div>
            <div className="ehr-textbox-row">
            <EHRTextbox 
            label="Address" 
            value={address} 
            onChange={handleChange4} 
            />
            <EHRTextbox 
            label="Age" 
            value={age}   
            onChange={handleChange5} 
            />
            <EHRTextbox 
            label="Clinic" 
            value={clinic} 
            onChange={handleChange6} 
            />
            </div>
            <div className="ehr-textbox-row">
            <EHRTextbox 
            label="Phone No." 
            value={phone} 
            onChange={handleChange7} 
            />
            <EHRTextbox 
            label="Occupation" 
            value={occupation} 
            onChange={handleChange8} 
            />
            <EHRTextbox 
            label="Doctor" 
            value={doctor} 
            onChange={handleChange9} 
            />
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
    <div class="vertical-label right1">DISTANCE</div>
    <span class="rx-title">NEW</span>
    <span class="rx-symbol">℞</span>
    <div class="vertical-label right2">NEAR</div>
  </div>


  <div class="rx-old">
    <span class="rx-title">OLD</span>
    <span class="rx-symbol">℞</span>
  </div>
</div>


          <div className="o-container"> 
            <div className="o-card"> 
            <EHR2Textbox 
            label="O.D" 
            value={distanceOD} 
            onChange={handleChange10} 
            />
            </div>
            <div className="o-card"> 
            <EHR2Textbox 
            label="O.S" 
            value={distanceOS} 
            onChange={handleChange11} 
            />
            </div>
            
            <div className="o-card"> 
            <EHR2Textbox 
            label="O.D" 
            value={nearOD} 
            onChange={handleChange12} 
            />
            </div>
            <div className="o-card"> 
            <EHR2Textbox 
            label="O.S" 
            value={nearOS} 
            onChange={handleChange13} 
            />
            </div>
            <div className="o-card"> 
            <EHR2Textbox 
            label="O.D" 
            value={oldRxOD} 
            onChange={handleChange14} 
            />
            </div>
          </div>

          <div className="v-segment-container">
            <div className="horizontal-container">
              <div className="v-card"> 
              <EHR3Textbox 
            label="V.A UNAIDED" 
            value={ODvaU} 
            onChange={handleChange16} 
            />
              </div>
              <div className="v-card"> 
                        
              <EHR3Textbox 
            label="V.A WITH RX" 
            value={ODvaRX} 
            onChange={handleChange18} 
            />
              </div>
            </div>
            <div className="horizontal-container">
              <div className="v-card"> 
              <EHR3Textbox 
            label="V.A UNAIDED" 
            value={OSvaU} 
            onChange={handleChange17} 
            />
              </div>
              <div className="v-card"> 
              <EHR3Textbox 
            label="V.A WITH RX" 
            value={OSvaRX} 
            onChange={handleChange19} 
            />
              </div>

            </div>
            <div className="segment-card">
              <h1 class="segment-text">SEGMENT</h1>
            </div>
            <div className="o-card"> 
            <EHR2Textbox 
            label="O.S" 
            value={oldRxOS} 
            onChange={handleChange15} 
            />
            </div>    
          </div>
          </div>

          </div>  
          <div className="remarks-card">
            <EHR5Textbox 
            label="Remarks" 
            value={remarks} 
            onChange={handleChange26} 
           />
            <div className="button-container">
              <GradientButton label="Save" />
            </div>
          </div>

        </div>

        <div className="glasses-fees-container">
          <div className="glasses-container">
            <div className="glasses-card"> 
            <EHR4Textbox 
            label="P.D." 
            value={pd} 
            onChange={handleChange20} 
            />
            <EHR4Textbox 
            label="DBL" 
            value={dbl} 
            onChange={handleChange21} 
            />
              </div>  
            <div className="glasses-card"> 
            <EHR4Textbox 
            label="SIZE" 
            value={size1} 
            onChange={handleChange22} 
            />
            </div>  
            <div className="glasses-card"> 
            <EHR4Textbox 
            label="BIFOCALS: " 
            value={bifocals} 
            onChange={handleChange23} 
            />
            <EHR4Textbox 
            label="LENS: " 
            value={lens} 
            onChange={handleChange24} 
            />
              </div>  
            <div className="glasses-card">
            <EHR4Textbox 
            label="SIZE" 
            value={size2} 
            onChange={handleChange25} 
            />
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
