import { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';

function Step4_EmergencyContacts({ onNext, onBack }) {
  const { formData, setFormData } = useContext(FormContext);
  const [contacts, setContacts] = useState(formData.emergencyContacts || [{ name: '', relation: '', phone: '' }]);
  const [errors, setErrors] = useState([]);
  const relations = ['Parent', 'Sibling', 'Spouse', 'Friend'];

  const handleChange = (index, field, value) => {
    const updated = [...contacts];
    updated[index][field] = value;
    setContacts(updated);
  };

  const validate = () => {
    const err = contacts.map(c => {
      let e = {};
      if (!c.name || c.name.length < 3) e.name = 'Min 3 letters';
      if (!c.relation) e.relation = 'Select relation';
      if (!/^\d{10}$/.test(c.phone)) e.phone = 'Invalid phone';
      return e;
    });
    setErrors(err);
    return err.every(e => Object.keys(e).length === 0);
  };

  const addContact = () => setContacts([...contacts, { name: '', relation: '', phone: '' }]);
  const removeContact = (i) => setContacts(contacts.filter((_, index) => index !== i));

  const handleNext = () => {
    if (validate()) {
      setFormData({ ...formData, emergencyContacts: contacts });
      onNext();
    }
  };

  return (
    <div>
      <h2>Step 4: Emergency Contacts</h2>
      {contacts.map((c, i) => (
        <div key={i}>
          <input placeholder="Name" value={c.name} onChange={(e) => handleChange(i, 'name', e.target.value)} />
          {errors[i]?.name && <span>{errors[i].name}</span>}
          <select value={c.relation} onChange={(e) => handleChange(i, 'relation', e.target.value)}>
            <option value="">--Relation--</option>
            {relations.map((r, idx) => <option key={idx}>{r}</option>)}
          </select>
          {errors[i]?.relation && <span>{errors[i].relation}</span>}
          <input placeholder="Phone" value={c.phone} onChange={(e) => handleChange(i, 'phone', e.target.value)} />
          {errors[i]?.phone && <span>{errors[i].phone}</span>}
          <button onClick={() => removeContact(i)}>Remove</button>
        </div>
      ))}
      <button onClick={addContact}>Add Contact</button>
      <button onClick={onBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step4_EmergencyContacts;