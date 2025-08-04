// context/FormContext.js
import { createContext, useState } from "react";
export const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    profilePhoto: null,
    // Step 2
    empId: "",
    department: "",
    role: "",
    joiningDate: "",
    workLocation: "",
    // Step 3
    bankAcc: "",
    ifsc: "",
    pan: "",
    upi: "",
    // Step 4
    emergencyContacts: [],
    // Step 5
    documents: [],
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
