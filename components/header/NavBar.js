import React, { useEffect, useState } from "react";
import { logOut, isAuth } from "../../actions/authActions";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();

  const [hydrated, setHydrated] = React.useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <>
      <div className="header_container">
        <div className="Brand_logo_box">Logo</div>
        <div className="Search_bar_box">search Bar</div>
        <div className="menu_box">
          {!isAuth() && (
            <>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => router.replace("/login")}
              >
                Login
              </div>
            </>
          )}

          {isAuth() && (
            <>
              <div>{isAuth().fullName}</div>
              {isAuth() && isAuth().role === "admin" && (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push("/admin")}
                >
                  Admin DashBoard
                </div>
              )}

              {isAuth() && isAuth().role === "user" && (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push("/user")}
                >
                  User DashBoard
                </div>
              )}

              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  logOut(() => {
                    router.replace("/login");
                  })
                }
              >
                Log Out
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
