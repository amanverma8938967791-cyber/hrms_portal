import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: ""
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("employees/");

      const list = Array.isArray(res.data)
        ? res.data
        : res.data.results || [];

      setEmployees(list);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // clear old errors

    try {
      await API.post("employees/", form);

      // reset form
      setForm({
        employee_id: "",
        full_name: "",
        email: "",
        department: ""
      });

      fetchEmployees();

    } catch (err) {
      if (err.response && err.response.data) {
        setErrors(err.response.data);
      } else {
        console.error("Unexpected error", err);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`employees/${id}/`);
      fetchEmployees();
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  return (
    <Layout>
      <div className="page-container">

        <h1 style={{ marginBottom: "25px" }}>
          Employee Management
        </h1>

        <div className="card">
          <h3>Add New Employee</h3>

          <form className="form-grid" onSubmit={handleSubmit}>

            {/* Employee ID */}
            <div>
              <input
                placeholder="Employee ID"
                value={form.employee_id}
                onChange={(e) =>
                  setForm({ ...form, employee_id: e.target.value })
                }
              />
              {errors.employee_id && (
                <p className="error-text">
                  {Array.isArray(errors.employee_id)
                    ? errors.employee_id[0]
                    : errors.employee_id}
                </p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <input
                placeholder="Full Name"
                value={form.full_name}
                onChange={(e) =>
                  setForm({ ...form, full_name: e.target.value })
                }
              />
              {errors.full_name && (
                <p className="error-text">
                  {Array.isArray(errors.full_name)
                    ? errors.full_name[0]
                    : errors.full_name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="error-text">
                  {Array.isArray(errors.email)
                    ? errors.email[0]
                    : errors.email}
                </p>
              )}
            </div>

            {/* Department */}
            <div>
              <input
                placeholder="Department"
                value={form.department}
                onChange={(e) =>
                  setForm({ ...form, department: e.target.value })
                }
              />
              {errors.department && (
                <p className="error-text">
                  {Array.isArray(errors.department)
                    ? errors.department[0]
                    : errors.department}
                </p>
              )}
            </div>

            <button className="btn-primary">
              Add Employee
            </button>

          </form>
        </div>

        {/* Employee List */}
        {employees.map(emp => (
          <div key={emp.id} className="list-item">
            <div>
              <strong>{emp.full_name}</strong>
              <p>{emp.department}</p>
              <small>{emp.email}</small>
            </div>

            <button
              className="btn-danger"
              onClick={() => handleDelete(emp.id)}
            >
              Delete
            </button>
          </div>
        ))}

      </div>
    </Layout>
  );
}

export default Employees;