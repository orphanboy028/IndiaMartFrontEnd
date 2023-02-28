import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  createLefCategroies,
  getLefCategories,
} from "../../actions/categories";
import { isAuth, getCookies } from "../../actions/authActions";

export default function LefCategries() {
  const [lefCategriesList, setlefCategriesList] = useState([]);
  const [newlefCateroies, setnewLefCateroies] = useState([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const token = getCookies("token");
  const { slug } = router.query;
  console.log(slug);

  const formSubmition = async (inputVal) => {
    try {
      const res = await createLefCategroies(inputVal, token, slug);
      console.log(res);
      const { createLefCategory } = res.data;
    } catch (error) {}
  };

  useEffect(() => {
    getAllSubCategoies();
  }, [newlefCateroies]);

  const getAllSubCategoies = async () => {
    try {
      const res = await getLefCategories(token, slug);
      const { getAll } = res.data;
      setlefCategriesList(getAll);
    } catch (error) {
      console.log(error);
    }
  };

  const subCategoryForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit(formSubmition)}>
          <div className="form-group">
            <label htmlFor="lefCategoryName">Add New Categories</label>
            <input
              type="text"
              className="form-control"
              id="lefCategoryName"
              name="lefCategoryName"
              aria-describedby="cateHelp"
              placeholder="Enter your Sub Categroies"
              {...register("lefCategoryName", {
                required: "Categorey is required",
              })}
            />
            <small id="cateHelp" className="form-text text-danger">
              {errors.lefCategoryName && (
                <p>{errors.lefCategoryName.message}</p>
              )}
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Lef Category
          </button>
        </form>
      </>
    );
  };

  const renderLefCategroiesLst = () => {
    return (
      <>
        {lefCategriesList.map((el, i) => {
          return (
            <div key={i}>
              <div className="mt-5 categroies_container" id={el._id}>
                <div className="cateBox">{i + 1}</div>
                <div className="cateBox">{el.lefCategoryName}</div>
                <div className="cateBox">
                  {" "}
                  <Link href={`admin/category/${el.slug}`} passHref>
                    Add Lef Catogery
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
        <div>
          <p>Categproies :- Lef categories {slug}</p>
        </div>
        <div>{subCategoryForm()}</div>
        <div className="mt-5">{renderLefCategroiesLst()}</div>
      </div>
    </>
  );
}
