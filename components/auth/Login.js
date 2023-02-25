import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { logInAdminAccount } from "../../actions/authActions";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [susessMsg, setSusessMsg] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const formSubmition = async (value) => {
    try {
      setLoading(true);
      const data = await logInAdminAccount(value);
      console.log(data);
      setSusessMsg(data.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loginForm = () => {
    return (
      <form onSubmit={handleSubmit(formSubmition)}>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter your E-mail"
            {...register("email", {
              required: "E-mial is required",
            })}
          />
          <small id="emailHelp" className="form-text text-danger">
            {errors.email && <p>{errors.email.message}</p>}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            aria-describedby="passwordHelp"
            placeholder="Full Name"
            {...register("password", {
              required: "E-mial is required",

              minLength: {
                value: 8,
                message: "At leas 8 Cracters Required in Password",
              },
            })}
          />
          <small id="passwordHelp" className="form-text text-danger">
            {errors.password && <p>{errors.password.message}</p>}
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    );
  };

  return (
    <>
      <div className="container mt-5">
        {susessMsg ? <h1> {susessMsg} </h1> : " "}
        {loading ? <h1>loading......</h1> : <h1>Login Form</h1>}

        {loginForm()}
      </div>
    </>
  );
}
