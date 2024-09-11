import { useEffect, useState } from "react";
import { clientUrl } from "../utilities/constants.js";
import moment from "moment";

const useEmpForm = (
    setIsFormOpen,
    setRefresh,
    singleEmpData,setSingleEmpData) => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [nationality, setNationality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [contact, setContact] = useState("");
  const [dept, setDept] = useState("");
  const [position, setPosition] = useState("");
  const [empId, setEmpId] = useState(0);

  

  useEffect(() => {
    console.log(singleEmpData);
    
    if (!singleEmpData) return;

    setFullName(singleEmpData.fullName);
    setEmpId(singleEmpData.empId);
    setGender(singleEmpData.gender);
    setDob(moment(singleEmpData.dob, "DD-MM-YYYY").format("YYYY-MM-DD"));
    setNationality(singleEmpData.nationality);
    setCity(singleEmpData.city);
    setState(singleEmpData.state);
    setContact(singleEmpData.contact);
    setDept(singleEmpData.dept);
    setPosition(singleEmpData.position);
  }, [singleEmpData]);

  const handleFormClose = () => {
    setIsFormOpen(false);
    setFullName("");
    setDob("");
    setNationality("");
    setCity("");
    setState("");
    setContact("");
    setDept("");
    setPosition("");
    setGender("Male");
    setSingleEmpData(null)
  };

  const postEmpData = {
    fullName,
    dob: moment(dob, "YYYY-MM-DD").format("DD-MM-YYYY"),
    gender,
    nationality,
    city,
    state,
    contact,
    dept,
    position,
    // key value pair dont need to be written here only if Key and Value pair have same names
  };

  const handleAddEmpData = async (e) => {
    e.preventDefault();
    console.log(postEmpData);
    try {
      const response = await fetch(`${clientUrl}/postEmpData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postEmpData),
      });

      // Wait for the response and parse it as text (or json if the server responds with JSON)
      const result = await response.text();

      console.log(result); // This will log "Data inserted successfully..." or the error message
      // alert(result); // Display the response message in an alert box
      handleFormClose();
      const random = Math.random();
      setRefresh(random);
    } catch (error) {
      console.log("Unable to insert data ", error);
    }
  };

  const handleUpdateEmpData = async (e) => {
    e.preventDefault();
    console.log("SEFdskjSEXY");

    try {
      const response = await fetch(`${clientUrl}/updateData`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...postEmpData, empId }),
      });
      const res = await response.text();
      const random = Math.random();
      setRefresh(random);
      handleFormClose();
    } catch (error) {
      console.log(`Unable to update data...`);
    }
  };

  const exportEmpDataToEmpForm = {
    fullName,
    dob,
    gender,
    nationality,
    city,
    state,
    contact,
    dept,
    position,
    setFullName,
    setDob,
    setNationality,
    setCity,
    setState,
    setContact,
    setDept,
    setPosition,
    setGender,
    handleAddEmpData,
    handleUpdateEmpData,
    handleFormClose,
  };
  return {...exportEmpDataToEmpForm};
};

export default useEmpForm;
