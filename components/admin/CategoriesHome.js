import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createMainCategroies, getCategeoies } from "../../actions/categories";
import { isAuth, getCookies } from "../../actions/authActions";
import Link from "next/link";

export default function CategoriesHome() {
  const [categiesList, setcategiesList] = useState([]);
  const [newCategroies, setnewCategroies] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const token = getCookies("token");

  const formSubmition = async (inputVal) => {
    console.log(inputVal);
    try {
      const data = await createMainCategroies(inputVal, token);
      console.log(data);
      const { categoryName } = data.data.newCategory;
      setnewCategroies(categoryName);
    } catch (error) {}
  };

  useEffect(() => {
    getAllCategoies();
  }, [newCategroies]);

  const getAllCategoies = async () => {
    try {
      const res = await getCategeoies();
      const { allCategories } = res.data;
      setcategiesList(allCategories);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(categiesList);

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
              placeholder="Enter your Categres"
              {...register("categoryName", {
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

  const renderCategroiesLst = () => {
    return (
      <>
        {categiesList.map((el, i) => {
          return (
            <div key={i}>
              <div className="mt-5 categroies_container" id={el._id}>
                <div className="cateBox">S.No</div>
                <div className="cateBox">{el.categoryName}</div>
                <div className="cateBox">
                  {" "}
                  <Link href={`category/subCategory/${el.slug}`}>
                    Go To Categroies{" "}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container mt-5">
        <div>{categoryForm()}</div>
        <div className="mt-5 categroies_container">
          <div className="cateBox">S.No</div>
          <div className="cateBox">Categoies Name</div>
          <div className="cateBox">Go To Categroies</div>
        </div>
        {renderCategroiesLst()}
      </div>
    </>
  );
}
