import React from "react";
import AdminPrivate from "../../components/auth/adminPrivate";
import Layout from "../../components/Layout";

export default function AdminIndex() {
  return (
    <>
      <div>
        <Layout>
          <AdminPrivate>Admin DashBoard</AdminPrivate>
        </Layout>
      </div>
    </>
  );
}
