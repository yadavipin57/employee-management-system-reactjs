import CloseIcon from "@mui/icons-material/Close";

const EmpDetails = ({
  singleEmpData,
  setSingleEmpData,
  isEmpDetailsOpen,
  setIsEmpDetailsOpen,
}) => {
  console.log(singleEmpData);

  const handleCLose = () => {
    setIsEmpDetailsOpen(false);
    // setSingleEmpData(null);
  };

  return (
    <div
      className={`w-screen ${
        isEmpDetailsOpen ? "scale-100" : "scale-0"
      } flex duration-300 h-screen bg-black bg-opacity-50 fixed top-0 left-0 items-center justify-center`}
    >
      <div className="px-3 py-2 w-[800px] rounded-lg border bg-slate-100">
        <div className="m-3 flex items-center justify-between">
          <h1 className="text-2xl ">Employee Details</h1>
          <div
            className="cursor-pointer hover:bg-gray-300 rounded-full"
            onClick={handleCLose}
          >
            <CloseIcon />
          </div>
        </div>
        <div>
          <div className="mx-6 mb-4 flex items-baseline justify-between">
            <h2>
              Employee ID:{" "}
              <span className="text-3xl font-bold">{singleEmpData?.empId}</span>
            </h2>
            <h1 className="text-3xl font-bold">{singleEmpData?.fullName}</h1>
            <p>
              Performance:{" "}
              <span className="text-xl">{singleEmpData?.rating} ⭐</span>
            </p>
          </div>
          <div className="mx-6 flex items-center">
            <div className="w-1/2">
              <div title="DD-MM-YYYY">Date of Birth: {singleEmpData?.dob}</div>
              <div>
                Address: {singleEmpData?.city}, {singleEmpData?.state},{" "}
                {singleEmpData?.nationality}
              </div>
              <div>Contact No.: {singleEmpData?.contact}</div>
              <div>Position: {singleEmpData?.position}</div>
              <div>Employee Type: {singleEmpData?.empType}</div>
            </div>
            <div className="w-1/2">
              <div title="DD-MM-YYYY">
                Date of joining: {singleEmpData?.doj}
              </div>
              <div>Total Experience: {singleEmpData?.experience}</div>
              <div>Salary: &#8377; {singleEmpData?.salary}/month</div>
              <div>
                Highest Qualification: {singleEmpData?.highestQualification}
              </div>
              <div>Status: {singleEmpData?.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDetails;
