import React from "react";
import SingUp from "../../components/auth/SingUp";
import Layout from "../../components/Layout";

export default function index() {
  return (
    <>
      <div>
        <Layout>
          <SingUp />
        </Layout>
      </div>
    </>
  );
}
