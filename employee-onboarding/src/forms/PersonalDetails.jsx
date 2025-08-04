// forms/Step1_PersonalDetails.js
import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import Input from "../components/Input";

function Step1_PersonalDetails({ onNext }) {
  const { formData, setFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!formData.fullName || formData.fullName.length < 3)
      err.fullName = "Minimum 3 characters required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      err.email = "Invalid email format";
    if (!/^\d{10}$/.test(formData.phone))
      err.phone = "Phone must be 10 digits";
    if (!formData.dob )
      err.dob = "Must be 18+";
    return err;
  };

  const handleNext = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onNext();
    }
  };

  return (
    <>
      <h2>Step 1: Personal Details</h2>
      <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
      <Input label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
      <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} />
      <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} error={errors.dob} />
      <button onClick={handleNext}>Next</button>
    </>
  );
}
export default Step1_PersonalDetails;
