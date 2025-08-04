import { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';
import Input from '../components/Input';

function Step3_BankDetails({ onNext }) {
  const { formData, setFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!/^\d{9,18}$/.test(formData.bankAcc)) 
        err.bankAcc = 'Account number must be 9-18 digits';
    if (!/^\w{4}0\w{6}$/.test(formData.ifsc)) 
        err.ifsc = 'Invalid IFSC Code';
    if (!/[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(formData.pan)) 
        err.pan = 'Invalid PAN number';
    if (formData.upi && !formData.upi.includes('@')) 
        err.upi = 'Invalid UPI ID';
    return err;
  };

  const handleNext = () => {
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) onNext();
  };

  return (
    <div>
      <h2>Step 3: Bank Details</h2>
      <Input label="Account Number" name="bankAcc" value={formData.bankAcc} onChange={handleChange} error={errors.bankAcc} />
      <Input label="IFSC code" name="IFSC Code" value={formData.ifsc} onChange={handleChange} error={errors.length}/>
      <Input label="PAN number" name="PAN number" value={formData.pan} onChange={handleChange} error={errors.length}/>
      <Input label="UPI ID" name="UPI ID" value={formData.upi} onChange={handleChange} error={errors.length}/>
   
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
export default Step3_BankDetails;