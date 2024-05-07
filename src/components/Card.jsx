import React from "react";
import { getTestimonial } from "../Api/Functions/Queries/testimonial.api";
import { useQuery } from "@tanstack/react-query";
import { testimonial_pic } from "../Api/Axios/axiosInstance";


export default function Card() {
   const { data: testimonials } = useQuery({
     queryKey: ["testimonials"],
     queryFn: getTestimonial,
   }); 
console.log(testimonials)
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {testimonials ?
        testimonials.map((testimonial) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={testimonial._id}>
            <figure>
              <img src={testimonial_pic(testimonial._id)} alt="img" className="h-[350px] w-full"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{testimonial.name}</h2>
              <p className="h-2">Position: {testimonial.position}</p>
              <p>Slug: {testimonial.slug}</p>
            </div>
          </div>
        ))
        :"loading"}
    </div>
  );
}
