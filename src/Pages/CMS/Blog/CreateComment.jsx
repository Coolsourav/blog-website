import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createcomment } from "../../../Api/Functions/Queries/createComment.api";
import { toast } from "react-toastify";

export default function CreateComment() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
    const mutation = useMutation({
      mutationFn: createcomment,
      onSuccess: (data) => {
        toast.success(data.message);
      },
    });
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      name: user.name,
      email: user.email,
      comment: user.comment,
    };
     try {
      await mutation.mutateAsync({ id, payload: data });
    } catch (error) {
      console.error(error);
    }
    setUser({
      name: "",
      email: "",
      comment: "",
    });
  };

  return (
    <>
      {" "}
      <div className="flex items-center">
        <Link to={`/blog/${id}`}>
          <button className="px-4 mt-2 text-black w-15 text-lg">⬅️ Back</button>
        </Link>
      </div>
      <div className="border-b border-gray-900/10 pb-12 max-w-[380px] h-[80vh] flex justify-center items-center mx-auto my-4 flex-col ">
        <form onSubmit={handleSubmit}>
          <p className="mt-1 text-xl leading-6 text-gray-600 text-center capitalize ">
            add your comment below
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Comment
              </label>
              <div className="mt-2 ">
                <input
                  type="text"
                  name="comment"
                  value={user.comment}
                  onChange={handleChange}
                  id="comment"
                  autoComplete="comment"
                  className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white px-2"
                />
              </div>
            </div>

            <div className="col-span-full">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
