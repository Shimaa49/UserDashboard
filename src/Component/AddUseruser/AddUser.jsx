import React, { useState } from "react";

export default function AddUser({ onAdded }) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ id: "", name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === "id" ? Number(value) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const created = {
      ...form,
      id: form.id || Date.now(),
      status: "active",
    };

    onAdded(created);
    setMessage(`User "${created.name}" added ✅`);
    setTimeout(() => setMessage(""), 3000);

    setForm({ id: "", name: "", email: "", phone: "" });
    setShow(false);
  };

  return (
    <div className="container">
      <div className="add-user my-3 d-flex flex-column">
        {message && <div className="alert alert-success text-center">{message}</div>}

        <button className="btn btn-primary mb-3" onClick={() => setShow(true)}>
          Add User
        </button>

        {show && (
          <div className="card p-3 shadow-sm">
            <h5 className="mb-3">Add User</h5>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">ID</label>
                <input
                  type="number"
                  name="id"
                  className="form-control"
                  placeholder="Enter ID (optional)"
                  value={form.id}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter full name"
                  value={form.name}
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
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success">Add</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
