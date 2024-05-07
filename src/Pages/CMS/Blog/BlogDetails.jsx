import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../../Api/Functions/Queries/comments.api";
import { blogImg } from "../../../Api/Axios/axiosInstance";
import { blogDetails } from "../../../Api/Functions/Queries/blogDetails.api";
import { Oval } from "react-loader-spinner";
import { Grid } from "@mui/material";
export default function BlogDetails() {
  const { id } = useParams();
  const { data: singleBlog, isLoading } = useQuery({
    queryKey: ["blogdetails"],
    queryFn: async () => {
      try {
        const result = await blogDetails(id);
        return result;
      } catch (error) {
        throw new Error(error);
      }
    },
  });
  const { data: comments } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      try {
        const result = await getComments(id);
        return result;
      } catch (error) {
        throw new Error(error);
      }
    },
  });

  const [limit, setLimit] = useState(300);
  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="flex justify-center flex-col min-h-screen">
      <div className="flex items-center">
        <Link to={"/blog"}>
          <button className="px-4 text-black w-15 text-lg">⬅️ Back</button>
        </Link>
        <h1 className="text-center w-full  my-10 underline">Single Blog</h1>
      </div>
      <div className="flex items-start h-auto w-[1380px] my-20 gap-5 mx-auto">
        <div className="w-3/5 flex items-start h-full ">
          {isLoading ? (
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
            <img
              src={blogImg(id)}
              alt=""
              className="object-contain w-full h-[400px]"
            />
          )}
        </div>
        <div className="w-2/5 flex flex-col gap-4 justify-around items-start  ">
          <h1
            className="font-semibold "
            dangerouslySetInnerHTML={{
              __html: singleBlog?.title,
            }}
          ></h1>
          <p
            dangerouslySetInnerHTML={{
              __html: truncateText(singleBlog?.postText, limit),
            }}
            className="h-auto my-0"
          ></p>

          {limit === singleBlog?.postText?.length ? (
            <span
              className="cursor-pointer underline"
              onClick={() => setLimit(300)}
            >
              see less
            </span>
          ) : (
            <span
              className="cursor-pointer underline "
              onClick={() => setLimit(singleBlog?.postText?.length)}
            >
              see more
            </span>
          )}
          <div className="flex gap-3">
            {" "}
            <p className="font-bold">likes: {singleBlog?.likes}</p>
            <p className="font-bold">unlikes: {singleBlog?.unlikes}</p>
          </div>
          <div>
            <p>Comments: {comments?.length}</p>
            <Link to={`/create-comment/${id}`}>
              {" "}
              <button className="mb-4 bg-slate-800 text-white px-3 py-2">
                Add a comment
              </button>
            </Link>{" "}
          </div>
        </div>
      </div>
      <Grid container maxWidth={"lg"} mx={"auto"} spacing={3}>
        {comments &&
          comments?.map((comment) => (
            <Grid
              xs={6}
              className="shadow-md p-2 rounded-md "
              key={comment._id}
            >
              <p className="text-sm italic">{comment?.email}</p>
              <p className="font-bold">Name: {comment?.name}</p>
              <p>Comment: {comment?.comment}</p>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
