import { useState, type ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
}

function FormComp() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>User Form !!</h2>
      <input
        placeholder='Enter name'
        name='name'
        value={form.name}
        onChange={handleChange}
      /> <br />
      <input
        placeholder='Enter email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormComp;
