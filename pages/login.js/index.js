import React from "react";
import Login from "../../components/auth/Login";
import Layout from "../../components/Layout";

export default function index() {
  return (
    <>
      <div>
        <Layout>
          <Login />
        </Layout>
      </div>
    </>
  );
}
