import { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';

function Step5_UploadDocuments({ onNext, onBack }) {
  const { formData, setFormData } = useContext(FormContext);
  const [files, setFiles] = useState(formData.documents || []);

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files);
    if (selected.length + files.length > 5) return alert('Max 5 files allowed');
    setFiles([...files, ...selected]);
  };

  const removeFile = (index) => setFiles(files.filter((_, i) => i !== index));

  const handleNext = () => {
    setFormData({ ...formData, documents: files });
    onNext();
  };

  return (
    <div>
      <h2>Step 5: Upload Documents</h2>
      <input type="file" accept="application/jpg" multiple onChange={handleFiles} />
      <ul>
        {files.map((file, i) => (
          <li key={i}>{file.name} <button onClick={() => removeFile(i)}>Remove</button></li>
        ))}
      </ul>
      <button onClick={onBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step5_UploadDocuments;