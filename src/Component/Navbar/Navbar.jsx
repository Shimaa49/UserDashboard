import React from "react";

export default function Navbar({ onSearch }) {
  return (
    <nav className="topnav py-3">
      <div className="container-fluid">
        <div className="row align-items-center g-3">
          <div className="col-12 col-lg-8">
            <div className="search-info d-flex align-items-center position-relative">
              <input
                type="search"
                placeholder="Search"
                className="search-input form-control rounded-5 ps-5"
                onChange={(e) => onSearch?.(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </div>
          </div>

          {/* الإشعارات */}
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center justify-content-between justify-content-lg-end">
              <button className="btn p-0 notification-btn" aria-label="Notifications">
                <i className="fa-solid fa-bell"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
