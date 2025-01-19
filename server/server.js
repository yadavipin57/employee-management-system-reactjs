import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
const port = 2025;

app.use(express.json());
app.use(cors());

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee",
});

// Get all emp data

app.get("/empdata", (req, res) => {
  // req and res is object
  const sqlQuerry =
    "SELECT * FROM employee_details";
  dbConnection.query(sqlQuerry, (error, data) => {
    // This call back takes two para, "error" and "data" from database
    if (error) return res.json(error);
    res.json(data);
  });
});

app.get("/", (req, res) => {
  return res.send("Hello from server");
});

// This is post emp data

app.post("/postEmpData", (req, res) => {
  const sqlQuerry =
    "INSERT INTO employee_details (fullName, dob, gender, nationality, city, state, contact, dept, position) VALUES (?)";
  const values = [
    req.body.fullName,
    req.body.dob,
    req.body.gender,
    req.body.nationality,
    req.body.city,
    req.body.state,
    req.body.contact,
    req.body.dept,
    req.body.position,
  ];
  console.log("POST Data:", values);
  dbConnection.query(sqlQuerry, [values], (error, data) => {
    if (error) return res.json(error);
    res.status(200).send("Data inserted successfully");
  });
});

// This is Update

app.put("/updateData", (req, res) => {
  const sqlQuerry =
    "UPDATE employee_details SET fullName = ?, dob = ?, gender = ?, nationality = ?, city = ?, state = ?, contact = ?, dept = ?, position = ? WHERE empId = ?";
  const values = [
    req.body.fullName,
    req.body.dob,
    req.body.gender,
    req.body.nationality,
    req.body.city,
    req.body.state,
    req.body.contact,
    req.body.dept,
    req.body.position,
    req.body.empId,
  ];
  console.log("PUT Data:", values);
  dbConnection.query(sqlQuerry, values, (error, data) => {
    if (error) return res.json(error);
    res.status(200).send("Data updated successfully");
  });
});

// This is Delete

app.delete("/deleteData", (req, res) => {
  const sqlQuerry = `DELETE FROM employee_details WHERE empId = ${req.body.empId}`;
  dbConnection.query(sqlQuerry, (error, data) => {
    if (error) return res.json(error);
    res.status(200).send("Data deleted successfully");
  });
});

// This is sorting

app.get("/sortData", (req, res) => {
  const { column, order = "asc" } = req.query; // Access query params

  if (!column) {
    return res.status(400).send("Column parameter is required");
  }

  const sqlQuerry = `SELECT * FROM employee_details ORDER BY ${column} ${order.toUpperCase()}`;

  dbConnection.query(sqlQuerry, (error, data) => {
    if (error) return res.json(error);
    res.json(data);
  });
});

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
