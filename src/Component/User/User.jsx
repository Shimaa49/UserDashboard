import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Table from "../Table/Table";
import EditUser from "../EditUser/EditUser";
import AddUser from "../AddUseruser/AddUser";
import Navbar from "../Navbar/Navbar"
import PaginationBar from "../PaginationBar/PaginationBar"

export default function User() {
  const [user, setUser] = useState([]);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState("");

  // ✅ state للباجينيشن
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const userState = response.data.map((user, index) => {
          let status = index % 2 === 0 ? "active" : "inactive";
          return { ...user, status };
        });
        setUser(userState);
      } catch (error) {
        setErro(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleAdded = (created) => setUser((prev) => [...prev, created]);

  const handleEdit = (row) => setEditing(row);

  const handleSave = (updated) => {
    setUser((prev) =>
      prev.map((u) => (u.id === updated.id ? { ...u, ...updated } : u))
    );
    setEditing(null);
  };

  const totalUser = user.length;
  const activeUsers = user.filter((u) => u.status === "active").length;
  const inactiveUsers = user.filter((u) => u.status === "inactive").length;

  // ✅ البحث
  const filteredUsers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return user;
    return user.filter((u) => {
      const name = (u.name || "").toLowerCase();
      const email = (u.email || "").toLowerCase();
      const phone = (u.phone || "").toLowerCase();
      return name.includes(q) || email.includes(q) || phone.includes(q);
    });
  }, [user, query]);

  // ✅ الباجينيشن
  const totalItems = filteredUsers.length;
  const startIndex = (page - 1) * pageSize;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (erro) return <p className="m-4 text-danger">{erro}</p>;

  return (
    <>
      <Navbar onSearch={setQuery} />
      <div className="user">
        <div className="container">
          <div className="user-home d-flex justify-content-between align-items-center">
            <h1 className="py-4 text-black">Home</h1>
          </div>

          <div className="user-all">
            <div className="row ">
              <div className="col-md-4">
                <div className="card1 ">
                  <div className="info-user">
                    <h2>Total Users</h2>
                    <i className="fa-solid fa-users fa-2x text-primary"></i>
                  </div>
                  <h3 className="text-black">{totalUser}</h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card2">
                  <div className="info-user">
                    <h2>Active Users</h2>
                    <i className="fa-solid fa-user-check fa-2x text-success"></i>
                  </div>
                  <h3 className="text-black">{activeUsers}</h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card3">
                  <div className="info-user">
                    <h2>Inactive Users</h2>
                    <i className="fa-solid fa-user-xmark fa-2x text-danger"></i>
                  </div>
                  <h3 className="text-black">{inactiveUsers}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-dark m-4">Users Table</h2>

        {/* ✅ نعرض الجدول بالبيانات المصفّحة */}
        <Table rows={paginatedUsers} onEdit={handleEdit} />

        {/* ✅ كومبوننت الباجينيشن */}
        <PaginationBar
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />

        {/* ✅ Add User */}
        <AddUser onAdded={handleAdded} />

        {/* ✅ Edit User */}
        {editing && (
          <EditUser
            user={editing}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
          />
        )}
      </div>
    </>
  );
}
