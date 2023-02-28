import React from "react";
import AddSubCategroies from "../../../../components/admin/AddSubCategroies";
import AdminPrivate from "../../../../components/auth/adminPrivate";
import Layout from "../../../../components/Layout";
import { useRouter } from "next/router";
// Add subCategoriey in categories
export default function AddSubCategies() {
  return (
    <>
      <div>
        <Layout>
          <AdminPrivate>
            <AddSubCategroies />
          </AdminPrivate>
        </Layout>
      </div>
    </>
  );
}
