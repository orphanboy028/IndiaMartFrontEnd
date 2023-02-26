import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CategoriesHome() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const formSubmition = () => {};

  const categoryForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit(formSubmition)}>
          <div className="form-group">
            <label htmlFor="categoryName">Add New Categories</label>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              name="categoryName"
              aria-describedby="cateHelp"
              placeholder="Enter your E-mail"
              {...register("cateHelp", {
                required: "Categorey is required",
              })}
            />
            <small id="cateHelp" className="form-text text-danger">
              {errors.categoryName && <p>{errors.categoryName.message}</p>}
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Category
          </button>
        </form>
      </>
    );
  };

  return (
    <>
      <div className="container mt-5">
        <div>{categoryForm()}</div>
      </div>
    </>
  );
}
