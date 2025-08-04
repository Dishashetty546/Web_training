import { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';

function Step6_ReviewSubmit({ onBack }) {
  const { formData } = useContext(FormContext);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    
    setSubmitted(true);
  };

  if (submitted) return <h2>Successfully Submitted!</h2>;

  return (
    <div>
      <h2>Step 6: Review & Submit</h2>
      <details><summary>Personal Details</summary>
        <p>Name: {formData.fullName}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>DOB: {formData.dob}</p>
      </details>

      <details><summary>Job Details</summary>
        <p>Emp ID: {formData.empId}</p>
        <p>Dept: {formData.department}</p>
        <p>Role: {formData.role}</p>
        <p>Joining Date: {formData.joiningDate}</p>
        <p>Location: {formData.workLocation}</p>
      </details>

      <details><summary>Bank Details</summary>
        <p>Account: {formData.bankAcc}</p>
        <p>IFSC: {formData.ifsc}</p>
        <p>PAN: {formData.pan}</p>
        <p>UPI: {formData.upi}</p>
      </details>

      <details><summary>Emergency Contacts</summary>
        {formData.emergencyContacts.map((c, i) => (
          <p key={i}>{c.name} ({c.relation}) - {c.phone}</p>
        ))}
      </details>

      <details><summary>Uploaded Documents</summary>
        <ul>
          {formData.documents.map((f, i) => (
            <li key={i}>{f.name}</li>
          ))}
        </ul>
      </details>

      <button onClick={onBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Step6_ReviewSubmit;
