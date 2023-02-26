import React from "react";
import CategoriesHome from "../../../components/admin/CategoriesHome";
import AdminPrivate from "../../../components/auth/adminPrivate";
import Layout from "../../../components/Layout";

export default function CategoriesIndex() {
  return (
    <>
      <div>
        <Layout>
          <AdminPrivate>
            <CategoriesHome />
          </AdminPrivate>
        </Layout>
      </div>
    </>
  );
}
