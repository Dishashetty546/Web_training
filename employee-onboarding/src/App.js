import PersonalDetails from "./forms/PersonalDetails";
import JobDetails from "./forms/JobDetails";
import BankDetails from "./forms/BankDetails"
import EmergencyContacts from "./forms/EmergencyContact"
import UploadDocuments from "./forms/UploadDocuments";
import ReviewSubmit from "./forms/ReviewDocuments"
import { FormProvider } from "./context/FormContext";
import { useState } from "react";
function App() {
  const [step, setStep] = useState(1);

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => prev - 1);

  return (
    <FormProvider>
      <div className="App">
        <h1>Employee Onboarding System</h1>
        {step === 1 && <PersonalDetails onNext={goNext} />}
        {step === 2 && <JobDetails onNext={goNext} onBack={goBack} />}
        {step === 3 && <BankDetails onNext={goNext} onBack={goBack} />}
        {step === 4 && <EmergencyContacts onNext={goNext} onBack={goBack} />}
        {step === 5 && <UploadDocuments onNext={goNext} onBack={goBack} />}
        {step === 6 && <ReviewSubmit onBack={goBack} />}
      </div>
    </FormProvider>
  );
}
export default App;