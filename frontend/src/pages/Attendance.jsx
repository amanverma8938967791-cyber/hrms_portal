import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present"
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const emp = await API.get("employees/");
    const att = await API.get("attendance/");
    setEmployees(emp.data);
    setAttendance(att.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("attendance/", form);
    fetchData();
  };

  return (
    <Layout>
      <div className="page-container">

        <h1 style={{ marginBottom: "25px" }}>Attendance Management</h1>

        <div className="card">
          <h3>Mark Attendance</h3>

          <form className="form-grid" onSubmit={handleSubmit}>
            <select
              value={form.employee}
              onChange={(e) =>
                setForm({ ...form, employee: e.target.value })
              }
            >
              <option value="">Select Employee</option>
              {employees.map(emp => (
                <option key={emp.id} value={emp.id}>
                  {emp.full_name}
                </option>
              ))}
            </select>

            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>

            <button className="btn-primary">
              Mark Attendance
            </button>
          </form>
        </div>

        {attendance.map(record => (
          <div key={record.id} className="list-item">
            <div>
              <strong>{record.date}</strong>
              <p>Employee ID: {record.employee}</p>
            </div>

            <span className={`badge ${record.status.toLowerCase()}`}>
              {record.status}
            </span>
          </div>
        ))}

      </div>
    </Layout>
  );
}

export default Attendance;