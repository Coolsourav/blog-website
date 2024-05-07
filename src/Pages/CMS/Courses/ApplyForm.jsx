import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { purchesApi } from "../../../Api/Functions/Queries/courseApply.api";
import { toast } from "react-toastify";

export default function ApplyForm() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    qualification: "",
    programing_knowledge: "",
    experiance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const mutation = useMutation({
    mutationFn: purchesApi,
    onSuccess: (data) => {
      toast.success(data.message);
      setUser({
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        qualification: "",
        programing_knowledge: "",
        experiance: "",
      });
    },
  });
  const handleSubmit = async(e) => {
      e.preventDefault();
     const data = {
       name: user.name,
       email: user.email,
       phone: user.phone,
       city: user.city,
       address: user.address,
       qualification: user.qualification,
       programing_knowledge: user.programing_knowledge,
       experiance: user.experiance,
    };
     try {
      await mutation.mutateAsync({ id, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-b border-gray-900/10 pb-12 max-w-[380px] mx-auto my-4">
      <form onSubmit={handleSubmit}>
        <p className="mt-1 text-sm leading-6 text-gray-600 text-center">
          Please Enter your details{" "}
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
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white px-2"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                value={user.city}
                onChange={handleChange}
                id="city"
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white px-2"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                id="address"
                autoComplete="address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white px-2"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="qualification"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Qualification
            </label>
            <div className="mt-2">
              <select
                id="qualification"
                name="qualification"
                value={user.qualification}
                onChange={handleChange}
                autoComplete="qualification"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white px-2"
              >
                <option value="" disabled>
                  Choose
                </option>
                <option value="10th Pass">10th Pass</option>
                <option value="12th Pass">12th Pass</option>
                <option value="Under Graduate">Under Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="programing_knowledge"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Programming Knowledge
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="programing_knowledge"
                value={user.programing_knowledge}
                onChange={handleChange}
                id="programing_knowledge"
                autoComplete="off"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white px-2"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="experiance"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Experience
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="experiance"
                value={user.experiance}
                onChange={handleChange}
                id="experiance"
                autoComplete="off"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white px-2"
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
  );
}
