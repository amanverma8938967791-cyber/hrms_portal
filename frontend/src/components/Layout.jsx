import { useState } from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="layout-modern">
      
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content Area */}
      <div className="main-section">
        
        {/* Top Header */}
        <div className="topbar">
          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          <div className="topbar-right">
            <span className="admin-text">Admin</span>
            
          </div>
        </div>

        {/* Page Content */}
        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Layout;
