import Header from "./Components/Header.jsx";
import EmpDataContainer from "./Components/EmpDataContainer.jsx";
import EmpForm from "./Components/EmpForm.jsx";
import { useState } from "react";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [refresh, setRefresh] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [singleEmpData, setSingleEmpData] = useState(null);

  const commonProps = {
    isFormOpen,
    setIsFormOpen,
    isUpdate,
    setIsUpdate,
    refresh,
    setRefresh,
    singleEmpData,
    setSingleEmpData,
  };

  return (
    <>
      <Header {...commonProps} />
      <EmpDataContainer {...commonProps} />
      <EmpForm {...commonProps} />
    </>
  );
};

export default App;
