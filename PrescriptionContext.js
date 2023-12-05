import React, { createContext, useState, useContext } from 'react';

const PrescriptionContext = createContext();

export const usePrescription = () => useContext(PrescriptionContext);

export const PrescriptionProvider = ({ children }) => {
  const [currentPrescription, setCurrentPrescription] = useState('Yasmin');

  const setPrescription = (prescription) => {
    setCurrentPrescription(prescription);
  };

  return (
    <PrescriptionContext.Provider value={{ currentPrescription, setPrescription }}>
      {children}
    </PrescriptionContext.Provider>
  );
};
