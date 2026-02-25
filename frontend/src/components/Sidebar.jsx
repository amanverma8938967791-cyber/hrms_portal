import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Calendar } from "lucide-react";

function Sidebar() {
  return (
    <div className="sidebar-premium">

      <div className="sidebar-top">
        <div className="sidebar-logo">
          <h2>HRMS PORTAL</h2>
          <span>PORTAL V2</span>
        </div>

        <nav className="sidebar-menu">
          <NavLink to="/" end>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/employees">
            <Users size={18} />
            <span>Employees</span>
          </NavLink>

          <NavLink to="/attendance">
            <Calendar size={18} />
            <span>Attendance</span>
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-user">
        <div className="user-avatar">A</div>
        <div>
          <strong>Admin</strong>
          <p>admin@hrms.com</p>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;