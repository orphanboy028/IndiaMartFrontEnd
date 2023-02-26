import React, { useEffect } from "react";
import { isAuth } from "../../actions/authActions";
import { useRouter } from "next/router";

export default function Private({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuth()) {
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
}
