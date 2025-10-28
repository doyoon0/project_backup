import React from "react";
import { getAuth, logoutApi } from "../../api/auth";
import { useHistory } from "react-router-dom";
import "../Page.css";

export default function AdminDashboard() {
  const auth = getAuth();
  const history = useHistory();
  if (!auth || auth.role !== "admin") {
    history.push("/login");
    return null;
  }
  const logout = () => {
    logoutApi();
    history.push("/");
  };
  return (
    <div className="auth-wrap">
      <h1 className="page-title">관리자 대시보드</h1>
      <div className="card-simple">
        <div>관리자: {auth.email}</div>
        <button className="btn-secondary" onClick={logout}>로그아웃</button>
      </div>
    </div>
  );
}
