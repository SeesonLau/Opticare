import React, { useState } from "react";
import { FaEye, FaDownload, FaPrint } from "react-icons/fa";
import "../../styles/clinic/ctable.css";

const PatientTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const patients = [
    { id: "01", name: "Angel Kim", sex: "Female", age: 23, lastVisit: "09/20/2024" },
    { id: "02", name: "Baive Lim", sex: "Female", age: 24, lastVisit: "09/20/2024" },
    { id: "03", name: "Mark Manalo", sex: "Male", age: 20, lastVisit: "09/20/2024" },
    { id: "04", name: "Clark Reyes", sex: "Male", age: 19, lastVisit: "09/20/2024" },
    { id: "05", name: "Hu Tao", sex: "Female", age: 19, lastVisit: "09/20/2024" },
    { id: "06", name: "Nohj Nosis", sex: "Male", age: 20, lastVisit: "09/20/2024" },
    { id: "07", name: "Woice Cwem", sex: "Male", age: 21, lastVisit: "09/20/2024" },
    { id: "08", name: "Fred Shicken", sex: "Male", age: 23, lastVisit: "09/20/2024" },
    { id: "09", name: "Pi Nay Pay", sex: "Female", age: 22, lastVisit: "09/20/2024" },
    { id: "10", name: "Chris P. Bacon", sex: "Male", age: 26, lastVisit: "09/20/2024" },
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (action, name) => {
    alert(`You clicked ${action} for ${name}`);
  };

  return (
    <div className="patient-table-container">
      <div className="table-header">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span className="records-found">{filteredPatients.length} found</span>
      </div>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Full Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Last Visit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.sex}</td>
              <td>{patient.age}</td>
              <td>{patient.lastVisit}</td>
              <td className="actions">
                <button
                  className="icon-button"
                  onClick={() => handleClick("View", patient.name)}
                  title="View"
                >
                  <FaEye />
                </button>
                <button
                  className="icon-button"
                  onClick={() => handleClick("Download", patient.name)}
                  title="Download"
                >
                  <FaDownload />
                </button>
                <button
                  className="icon-button"
                  onClick={() => handleClick("Print", patient.name)}
                  title="Print"
                >
                  <FaPrint />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
