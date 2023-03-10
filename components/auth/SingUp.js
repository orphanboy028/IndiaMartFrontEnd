import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { singUpAdminAccount, isAuth } from "../../actions/authActions";
import { useRouter } from "next/router";

export default function SingUp() {
  const [loading, setLoading] = useState(false);
  const [susessMsg, setSusessMsg] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const pass = watch("password");
  // This function triger on form submit
  const formSubmition = async (value) => {
    try {
      const jsonData = JSON.stringify(value);
      setLoading(true);
      const data = await singUpAdminAccount(value);

      setLoading(false);
      console.log(data);
      // console.log(data.data.message);
      // setSusessMsg(data.data.message);
    } catch (error) {
      console.log(error);

      // setSusessMsg(error.response.message);
      setLoading(false);
    }
  };

  const RegisterForm = () => {
    return (
      <form onSubmit={handleSubmit(formSubmition)}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            aria-describedby="NameHelp"
            placeholder="Full Name"
            {...register("fullName", {
              required: "Full Name is Required",
              minLength: {
                value: 3,
                message: "At leas 3 Cracters Required in Full Name",
              },
              maxLength: {
                value: 20,
                message: "Less Then 20 careaters are allow in full name",
              },
            })}
          />
          <small id="NameHelp" className="form-text text-danger">
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </small>
        </div>
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

        <div className="form-group">
          <label htmlFor="passwordConfirm"> confirm password</label>
          <input
            type="text"
            className="form-control"
            id="passwordConfirm"
            name="passwordConfirm"
            aria-describedby="passwordConfirmHelp"
            placeholder="Enter your password"
            {...register("passwordConfirm", {
              required: "plase Re-Enter your same password",
              validate: (value) => {
                return (
                  value === pass ||
                  "Your Confiram Password didn't match with password"
                );
              },
            })}
          />
          <small id="passwordConfirmHelp" className="form-text text-danger">
            {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    );
  };

  // Re-direct user if they o=authanticated
  useEffect(() => {
    isAuth() && router.push("/");
  }, []);

  return (
    <>
      <div className="container mt-5">
        {susessMsg ? <h1> {susessMsg} </h1> : " "}
        {loading ? <h1>loading......</h1> : <h1>Resistration</h1>}
        {RegisterForm()}
      </div>
    </>
  );
}
