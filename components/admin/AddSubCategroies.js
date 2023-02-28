import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  createSubCategroies,
  getsubCategories,
} from "../../actions/categories";
import { isAuth, getCookies } from "../../actions/authActions";

export default function AddSubCategroies() {
  const [subCategriesList, setsubCategriesList] = useState([]);
  const [newSubCateroies, setnewSubCateroies] = useState([]);
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
      // console.log(inputVal);
      // createSubCategroies(inputVal, token, slug);
      const res = await createSubCategroies(inputVal, token, slug);

      const { subCategory } = res.data;
      console.log(subCategory);
      setnewSubCateroies(subCategory.subCategoryName);
    } catch (error) {}
  };

  useEffect(() => {
    getAllSubCategoies();
  }, [newSubCateroies]);

  const getAllSubCategoies = async () => {
    try {
      const res = await getsubCategories(token, slug);
      const { getAllSubCategories } = res.data.data;
      setsubCategriesList(getAllSubCategories);
      console.log(getAllSubCategories);
    } catch (error) {
      console.log(error);
    }
  };

  const subCategoryForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit(formSubmition)}>
          <div className="form-group">
            <label htmlFor="subCategoryName">Add New Categories</label>
            <input
              type="text"
              className="form-control"
              id="subCategoryName"
              name="subCategoryName"
              aria-describedby="cateHelp"
              placeholder="Enter your Sub Categroies"
              {...register("subCategoryName", {
                required: "Categorey is required",
              })}
            />
            <small id="cateHelp" className="form-text text-danger">
              {errors.subCategoryName && (
                <p>{errors.subCategoryName.message}</p>
              )}
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Category
          </button>
        </form>
      </>
    );
  };

  const renderSubCategroiesLst = () => {
    return (
      <>
        {subCategriesList.map((el, i) => {
          return (
            <div key={i}>
              <div className="mt-5 categroies_container" id={el._id}>
                <div className="cateBox">{i + 1}</div>
                <div className="cateBox">{el.subCategoryName}</div>
                <div className="cateBox">
                  {" "}
                  <Link href={`admin/category/leaf-category/${el.slug}`}>
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
          <p>Categproies :- sub categories {slug}</p>
        </div>
        <div>{subCategoryForm()}</div>
        <div className="mt-5">{renderSubCategroiesLst()}</div>
      </div>
    </>
  );
}
