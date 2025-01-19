import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import useEmpForm from "../Hooks/useEmpForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmpForm = ({
  isFormOpen,
  setIsFormOpen,
  setRefresh,
  singleEmpData,
  setSingleEmpData,
  isUpdate,
}) => {
  const {
    fullName,
    dob,
    gender,
    nationality,
    city,
    state,
    contact,
    dept,
    position,
    rating,
    empType,
    doj,
    experience,
    salary,
    highestQualification,
    status,
    setFullName,
    setDob,
    setNationality,
    setCity,
    setState,
    setContact,
    setDept,
    setPosition,
    setGender,
    setRating,
    setEmpType,
    setDoj,
    setExperience,
    setSalary,
    setHighestsQualification,
    setStatus,
    handleAddEmpData,
    handleUpdateEmpData,
    handleFormClose,
  } = useEmpForm(setIsFormOpen, setRefresh, singleEmpData, setSingleEmpData);

  return (
    <div
      className={`w-screen ${
        isFormOpen ? "scale-100" : "scale-0"
      } flex duration-300 h-screen bg-black bg-opacity-50 fixed top-0 left-0 items-center justify-center`}
    >
      <div className="px-3 py-2 max-w-[700px] rounded-lg border bg-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="py-3 font-bold text-xl">
            {isUpdate ? "Update Employee Details" : "Add Employee Details"}
          </h3>
          <div className="cursor-pointer hover:bg-gray-300 rounded-full" onClick={handleFormClose}>
            <CloseIcon />
          </div>
          {/* className="" can also be used above */}
        </div>
        <form
          onSubmit={isUpdate ? handleUpdateEmpData : handleAddEmpData}
          className="py-2 flex flex-wrap gap-3 justify-evenly"
        >
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <DatePicker
            selected={dob ? new Date(dob) : null}
            onChange={(date) => setDob(date.toISOString().split("T")[0])}
            className="px-3 py-1 border border-black outline-none w-[300px]"
            dateFormat="dd/MM/yyyy"
            placeholderText="Date of birth: Type DD/MM/YYYY"
          />
          <div className="w-[300px] flex items-center gap-1">
            <label htmlFor="">Gender</label>
            <select
              className="border border-black"
              name="Gender"
              id=""
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Department"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          {/* <DatePicker
            selected={doj ? new Date(doj) : null}
            onChange={(date) =>
              setDoj(date ? date.toISOString().split("T")[0] : "")
            } // Set the value only if the date is valid
            className="px-3 py-1 border border-black outline-none w-[300px]"
            dateFormat="dd/MM/yyyy"
            placeholderText="Date of joining: Type DD/MM/YYYY"
          /> */}
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Date of joining"
            value={doj}
            onChange={(e) => setDoj(e.target.value)}
          />

          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Employee type"
            value={empType}
            onChange={(e) => setEmpType(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Highest Qualification"
            value={highestQualification}
            onChange={(e) => setHighestsQualification(e.target.value)}
          />
          <input
            className="px-3 py-1 border border-black outline-none w-[300px]"
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 py-1 bg-green-700 text-white font-bold border border-black outline-none w-[300px]"
          >
            {isUpdate ? (
              <span>
                <CreateIcon /> Update
              </span>
            ) : (
              <span>
                <AddIcon /> Add
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmpForm;
