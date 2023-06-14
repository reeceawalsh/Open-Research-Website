import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import DropDown from "../formElements/DropDown";
import ModalButtons from "../formElements/ModalButtons";
import BooleanInput from "../formElements/BooleanInput";

function Dataset({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  errors,
}) {
  return (
    <>
      <h3 className="main_question">
        Please fill with your details about your dataset
      </h3>
      <TextInput
        name="dataTitle"
        placeholder="Data Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="dataURL"
        placeholder="Data URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
      />
      <TextInput
        name="dataDOI"
        placeholder="Data DOI"
        value={formData.doi}
        onChange={(event) => {
          setFormData({ ...formData, doi: event.target.value });
        }}
        error={errors.DOI}
      />
      <DropDown
        name="format"
        placeholder="Format"
        options={[{ value: "CSV" }, { value: "Numerical Dataset" }]}
        value={formData.format}
        onChange={(event) => {
          setFormData({ ...formData, format: event.target.value });
        }}
        error={errors.format}
      />
      <TextInput
        name="dataLicense"
        placeholder="Data License"
        value={formData.license}
        onChange={(event) => {
          setFormData({ ...formData, license: event.target.value });
        }}
        error={errors.license}
      />
      <BooleanInput
        name="dataMetadata"
        label="Does it include the necessary metadata?"
        a="Yes"
        b="No"
        value={formData.metaData}
        onChange={(event) => {
          setFormData({
            ...formData,
            metaData: event.target.value,
          });
        }}
        error={errors.dataMetadata}
      />
      <BooleanInput
        name="dataFair"
        label="Have efforts been made to maximize F.A.I.R. principles?"
        a="Yes"
        b="No"
        value={formData.fair}
        onChange={(event) => {
          setFormData({
            ...formData,
            fair: event.target.value,
          });
        }}
        error={errors.dataFair}
      />
      <BooleanInput
        name="dataRelease"
        label="Was it released no later than the publication of the first paper that uses it?"
        a="Yes"
        b="No"
        value={formData.release}
        onChange={(event) => {
          setFormData({
            ...formData,
            release: event.target.value,
          });
        }}
        error={errors.dataRelease}
      />
      <BooleanInput
        name="dataConf"
        label="Is independant confirmation of results possible with this data?"
        a="Yes"
        b="No"
        value={formData.conf}
        onChange={(event) => {
          setFormData({
            ...formData,
            conf: event.target.value,
          });
        }}
        error={errors.dataConf}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
}

export default Dataset;
