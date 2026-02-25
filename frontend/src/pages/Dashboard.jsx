import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import API from "../services/api";

function Dashboard() {
  const [data, setData] = useState(null);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dash = await API.get("dashboard/");
      const emp = await API.get("employees/");

      setData(dash.data);

      const employeeList = Array.isArray(emp.data)
        ? emp.data
        : emp.data.results || [];

      setEmployees(employeeList.slice(0, 4));

    } catch (err) {
      console.error("Dashboard error", err);
    }
  };

  if (!data) {
    return (
      <Layout>
        <div className="page-container">
          <p>Loading dashboard...</p>
        </div>
      </Layout>
    );
  }

  const attendanceRate =
    data.total_employees > 0
      ? Math.round((data.today_present / data.total_employees) * 100)
      : 0;

  return (
    <Layout>
      <div className="page-container">

        {/* HERO */}
        <div className="hero-section">
          <div>
            <h2>Welcome back, Admin 👋</h2>
            <p>{new Date().toDateString()}</p>

            <div className="hero-progress">
              <div
                className="hero-progress-fill"
                style={{ width: `${attendanceRate}%` }}
              />
            </div>
          </div>

          <div>
            <h1>{attendanceRate}%</h1>
            <p>Attendance Rate Today</p>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-row">
          <div className="stat-box">
            <h2>{data.total_employees}</h2>
            <p>Total Employees</p>
          </div>

          <div className="stat-box green">
            <h2>{data.today_present}</h2>
            <p>Present Today</p>
          </div>

          <div className="stat-box red">
            <h2>{data.total_employees - data.today_present}</h2>
            <p>Absent Today</p>
          </div>

          <div className="stat-box">
            <h2>{data.total_attendance}</h2>
            <p>Total Records</p>
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="dashboard-grid">

          {/* RECENT EMPLOYEES */}
          <div className="card">
            <h3 style={{ marginBottom: "20px" }}>
              Recent Employees
            </h3>

            {employees.length === 0 ? (
              <p>No employees found.</p>
            ) : (
              employees.map(emp => (
                <div key={emp.id} className="list-item">
                  <div>
                    <strong>{emp.full_name}</strong>
                    <p>{emp.department}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* QUICK ACTIONS */}
          <div className="card">
            <h3 style={{ marginBottom: "20px" }}>
              Quick Actions
            </h3>

            <button
              className="btn-primary"
              onClick={() => navigate("/employees")}
            >
              Manage Employees
            </button>

            <button
              className="btn-primary"
              style={{ marginTop: "15px" }}
              onClick={() => navigate("/attendance")}
            >
              Mark Attendance
            </button>

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;