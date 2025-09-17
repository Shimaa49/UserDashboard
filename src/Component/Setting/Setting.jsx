import React, { useState } from "react";

export default function Setting() {
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert("✅ Settings saved successfully!");
  };

  return (
    <div className="user">
      <div className="container">
        <h2 className="py-3 text-black">Settings</h2>

        <form onSubmit={handleSave} className="bg-white p-4 rounded shadow-sm">
      
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

      
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <label className="form-check-label">Enable Notifications</label>
          </div>

          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
}
