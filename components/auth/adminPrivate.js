import React, { useEffect } from "react";
import { isAuth } from "../../actions/authActions";
import { useRouter } from "next/router";

export default function AdminPrivate({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuth()) {
      router.push("/login");
    } else if (isAuth().role !== "admin") {
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
}
