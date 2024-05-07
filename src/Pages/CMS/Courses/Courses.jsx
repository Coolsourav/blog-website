import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../../Api/Functions/Queries/course.api";
import { course_pic } from "../../../Api/Axios/axiosInstance";
import { Oval } from "react-loader-spinner";

export default function Courses() {
    const { data: courses ,isLoading} = useQuery({
      queryKey: ["courses"],
      queryFn: getCourses,
    });

  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-4">Our Courses</h1>
      {isLoading ? (
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
      ) : (
        <div className="max-w-[1380px] flex justify-center flex-wrap gap-8 my-5 mx-auto">
          {courses &&
            courses.map((course) => (
              <div
                className=" w-[350px] rounded-xl max-h-[450px] shadow-xl overflow-hidden"
                key={course._id}
              >
                <figure>
                  <img
                    src={course_pic(course._id)}
                    alt="img"
                    className="h-[200px] w-full "
                  />
                </figure>
                <div className=" text-center h-[170px] p-2">
                  <h2 className=" my-0 text-center text-xl">{course.name}</h2>
                  <p className="my-0 font-bold">
                    Course Fees:{" "}
                    <span className="text-red-600 font-bold">
                      {course.fees}
                    </span>{" "}
                  </p>
                  <p className="my-0 font-semibold">
                    Pre-requisites: {course.requirement}{" "}
                  </p>
                  <p className="my-0 font-bold">
                    Course Duration:{" "}
                    <span className="text-red-600 font-bold">
                      {course.duration}
                    </span>{" "}
                  </p>
                </div>
                <Link to={`/application/${course._id}`}>
                  {" "}
                  <button className="bg-base-300 text-white px-3 py-2 w-full h-14 hover:bg-base-100 hover:scale-110 ease-in duration-100 ">
                    Buy Course
                  </button>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
