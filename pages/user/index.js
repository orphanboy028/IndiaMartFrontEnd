import React from "react";
import Layout from "../../components/Layout";
import Private from "../../components/auth/private";

export default function UserIndex() {
  return (
    <>
      <div>
        <Layout>
          <Private>User DashBoard</Private>
        </Layout>
      </div>
    </>
  );
}
