import React, { useState } from "react";

import RegReport from "../forms/RegReport";

function RegReports({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [regReportInfo, setRegReportInfo] = useState({
    regReportURL: "",
    regReportFunding: false,
    regReportPeerRev: false,
    regReportChanges: false,
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formData.regReports.push(regReportInfo);

    setRegReportInfo({
      regReportURL: "",
      regReportFunding: false,
      regReportPeerRev: false,
      regReportChanges: false,
    });

    setDisplay(!display);
  };

  const handleDelete = (e, regReport) => {
    e.preventDefault();

    let filteredArray = formData.regReports.filter(
      (item) => item !== regReport
    );
    setFormData({ ...formData, regReports: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Registered Reports</h2>
        {formData.regReports.map((regReport) => (
          <div className="output-type row">
            <h4 className="output-title col">{regReport.regReportURL}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, regReport)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Registered Report
        </button>
      </div>

      <RegReport
        show={display}
        formData={regReportInfo}
        setFormData={setRegReportInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default RegReports;
