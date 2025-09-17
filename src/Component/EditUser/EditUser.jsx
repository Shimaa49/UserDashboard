import React, { useEffect, useState } from "react";

export default function EditUser({ user, onSave, onCancel }) {
  const [form, setForm] = useState(user);


  useEffect(() => setForm(user), [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form); 
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,.4)" }}
      tabIndex="-1"
      role="dialog"
      onClick={onCancel}
    >
      <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Edit User</h5>
              <button type="button" className="btn-close" onClick={onCancel} />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">ID</label>
                <input className="form-control" value={form.id} disabled />
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  className="form-control"
                  value={form.name || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  name="phone"
                  className="form-control"
                  value={form.phone || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onCancel}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
