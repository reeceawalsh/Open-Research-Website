import { useState } from "react";
import DatasetModal from "../formModals/DatasetModal";
import validate from "../../validationRules/DataVR";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function Datasets({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [currData, setCurrData] = useState({});
  const [editMode, setEditMode] = useState(false);

  const [datasetInfo, setDatasetInfo] = useState({
    dataTitle: "",
    dataURL: "",
    dataDOI: "",
    format: "",
    dataLicense: "",
    dataMetadata: "",
    dataFair: "",
    dataRelease: "",
    dataConf: "",
  });

  const wipeData = () => {
    setDatasetInfo({
      dataTitle: "",
      dataURL: "",
      dataDOI: "",
      format: "",
      dataLicense: "",
      dataMetadata: "",
      dataFair: "",
      dataRelease: "",
      dataConf: "",
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipeData();
    }
    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(datasetInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // datasetInfo.dataMetadata = str2bool(datasetInfo.dataMetadata);
      // datasetInfo.dataFair = str2bool(datasetInfo.dataFair);
      // datasetInfo.dataRelease = str2bool(datasetInfo.dataRelease);
      // datasetInfo.dataConf = str2bool(datasetInfo.dataConf);

      if (!editMode) {
        setFormData({
          ...formData,
          Dataset: [...formData.Dataset, { ...datasetInfo, id: uuidv4() }],
        });
      } else {
        const updatedData = formData.Dataset.map((i) =>
          i.id === currData.id ? datasetInfo : i
        );
        const updatedFormData = {
          ...formData,
          Dataset: updatedData,
        };
        setFormData(updatedFormData);
      }

      wipeData();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    wipeData();
    setErrors({});
    setDisplay(!display);
  };

  const handleEdit = (e, dataset) => {
    e.preventDefault();

    setCurrData(dataset);

    setDatasetInfo({
      ...dataset,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  const handleDelete = (e, dataset) => {
    e.preventDefault();

    let filteredArray = formData.Dataset.filter((item) => item !== dataset);
    setFormData({ ...formData, Dataset: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Datasets</h2>
        {formData.Dataset.map((dataset, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{dataset.dataTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, dataset)}>Edit</p>
            </span>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, dataset)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Dataset
        </button>
      </div>

      <DatasetModal
        show={display}
        formData={datasetInfo}
        setFormData={setDatasetInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Datasets;
