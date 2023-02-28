import React from "react";
import AddSubCategroies from "../../../../components/admin/AddSubCategroies";
import AdminPrivate from "../../../../components/auth/adminPrivate";
import Layout from "../../../../components/Layout";
import { useRouter } from "next/router";
import LefCategries from "../../../../components/admin/LefCategroies";
// Add subCategoriey in categories
export default function AddSubCategies() {
  return (
    <>
      <div>
        <Layout>
          <AdminPrivate>
            <LefCategries />
          </AdminPrivate>
        </Layout>
      </div>
    </>
  );
}
