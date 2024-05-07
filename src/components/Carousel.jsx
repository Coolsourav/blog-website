import React from "react";
import { Carousel } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { Banner } from "../Api/Functions/Queries/banner.api";
import { banner_pic } from "../Api/Axios/axiosInstance";
import { Oval } from "react-loader-spinner";
export default function CustomCarousel() {
 const { data :banners,isLoading} = useQuery({
   queryKey: ["banners"],
   queryFn: Banner,

 }); 


  return (
    <div>
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
        <Carousel className="h-screen w-full" fade>
          {banners &&
            banners.map((banner) => (
              <Carousel.Item className="w-full h-full" key={banner._id}>
                <img
                  className="block w-full h-full object-cover"
                  src={banner_pic(banner._id)}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{banner.title}</h3>
                  <p>{banner.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      )}
    </div>
  );
       
}
