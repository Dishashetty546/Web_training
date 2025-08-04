
import { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';
import Input from '../components/Input';
import Dropdown from "../components/DropDowm"

function Step2_JobDetails({ onNext}) {
  const { formData, setFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const departments = ['Engineering', 'HR', 'Sales', 'Marketing'];
  const locations = ['Mumbai', 'Bangalore', 'Chennai', 'Delhi'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!formData.empId.trim()) 
        err.empId = 'Employee ID is required';
    if (!formData.department) 
        err.department = 'Select a department';
    if (!formData.role.trim()) err.role = 'Role is required';
    if (!formData.joiningDate || new Date(formData.joiningDate) < new Date()) 
        err.joiningDate = 'Joining date must not be in the past';
    if (!formData.workLocation) err.workLocation = 'Select a location';
    return err;
  };

  const handleNext = () => {
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) onNext();
  };

  return (
    <div>
      <h2>Step 2: Job Details</h2>
      <Input label="Employee ID" name="empId" value={formData.empId} 
      onChange={handleChange} error={errors.empId} />
      <Dropdown label="Department" name="department" value={formData.department} onChange={handleChange} 
      options={departments} error={errors.department} />
      <Input label="Role/Designation" name="role" value={formData.role} onChange={handleChange} error={errors.role} />
      <Input label="Joining Date" name="joiningDate" type="date" value={formData.joiningDate} onChange={handleChange} error={errors.joiningDate} />
      <Dropdown label="Work Location" name="workLocation" value={formData.workLocation} onChange={handleChange} options={locations} error={errors.workLocation} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step2_JobDetails;