import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../Api/Functions/Queries/showallcategory.api";
import { getBlogs } from "../../../Api/Functions/Queries/allBlog.api";
import { getrecentBlogs } from "../../../Api/Functions/Queries/recentBlogs.api";
import { blogImg } from "../../../Api/Axios/axiosInstance";
import { productdetails } from "../../../Api/Functions/Queries/search.api";
import { Oval } from "react-loader-spinner";

export default function Blog() {
  const [input, setInput] = useState("");
  const [AllBlogs, setAllBlogs] = useState([]);

  const { data: blogs ,isLoading:blogsLoading} = useQuery({
    queryKey: ["getBlogs"],
    queryFn: getBlogs,
  });
   useEffect(() => {
     if (blogs) {
       setAllBlogs(blogs);
     }
   }, [blogs]);
  const { data: categories } = useQuery({
    queryKey: ["getCategories"],
    queryFn: getCategories,
  });
  const { data: recentBlogs } = useQuery({
    queryKey: ["recentBlogs"],
    queryFn: getrecentBlogs,
  });
  const { mutateAsync,isPending } = useMutation({
      mutationKey:"details",
      mutationFn: productdetails,
    onSuccess: (data) => {
        if (data.length < 1) {
        alert("no data found")
        }
      setAllBlogs(data);
      setInput("");
      },
    });
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await mutateAsync(input);
    } catch (error) {
      console.error(error);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  if (blogsLoading) {
    return (
      <div className="h-screen w-full justify-center flex items-center">
        <Oval
          visible={true}
          height="50"
          width="50"
          color="#7C4700"
          secondaryColor="#7C4700"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
    return (
      <div>
        <div className="row max-w-[1380px] mx-auto">
          <div className="flex mx-auto justify-around ">
            <div className="product max-w-[950px]">
              <h1 className="text-2xl font-semibold my-4 text-center">
                Products
              </h1>
              <div className="flex items-center justify-start gap-5 px-4"></div>
              {isPending ? (
                <div className="h-full w-full justify-center flex items-center">
                  <Oval
                    visible={true}
                    height="50"
                    width="50"
                    color="#7C4700"
                    secondaryColor="#7C4700"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                <ul className="list-none flex flex-wrap gap-6">
                  {AllBlogs &&
                    AllBlogs.map((blog) => (
                      <div
                        key={blog._id}
                        className="w-full mx-auto flex flex-col items-center gap-4 border-2 border-b-slate-400 py-4"
                      >
                        <img
                          src={blogImg(blog._id)}
                          alt=""
                          className="object-cover object-center w-full h-full"
                          s
                        />
                        <li className="px-2 tex-center font-semibold">
                          {blog.title}
                        </li>
                        <li
                          className="px-4 text-justify "
                          dangerouslySetInnerHTML={{
                            __html: truncateText(blog.postText, 500),
                          }}
                        ></li>
                        <Link to={`/blog/${blog._id}`}>
                          <button className="bg-blue-500 px-4 text-white">
                            Details
                          </button>
                        </Link>
                      </div>
                    ))}
                </ul>
              )}
            </div>

            <div className="categories">
              <h1 className="text-2xl font-semibold my-4">Categories</h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="search"
                  className="bg-white border-2 py-1 px-2 mb-3 mx-1"
                  name="search"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Search</button>
              </form>
              <ul className="list-none">
                {categories &&
                  categories.map((category) => (
                    <li
                      key={category._id}
                      className="cursor-pointer"
                      onClick={() => mutateAsync(category.category)}
                    >
                      {category.category}
                    </li>
                  ))}
              </ul>
              <h1 className="text-2xl font-semibold my-4">Recent Blogs</h1>
              <div className="flex flex-col gap-3">
                {recentBlogs &&
                  recentBlogs.map((blog) => (
                    <div className="flex gap-3" key={blog._id}>
                      {" "}
                      <img src={blogImg(blog._id)} alt="" className="w-24" />
                      <p className="w-64">{blog.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
