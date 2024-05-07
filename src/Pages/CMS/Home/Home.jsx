import React from "react";
import Card from "../../../components/Card";
import CustomCarousel from "../../../components/Carousel";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../../Api/Functions/Queries/service.api";


export default function Home() {
 const { data: services } = useQuery({
   queryKey: ["services"],
   queryFn: getServices,
 }); 
  return (
    <>
      <section className="max-h-[93vh] overflow-hidden">
        <CustomCarousel />
      </section>
      <section className="container h-auto max-w-[1380px] mx-auto pb-3">
        <div className="flex h-40 my-10 gap-20 items-center justify-between">
          <h1 className="text-2xl">Featured Products</h1>
          <p className="w-3/5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            harum dicta sapiente saepe consequuntur tenetur magnam at quae quam,
            quia omnis laboriosam, dolores provident veritatis distinctio modi
            quaerat repudiandae doloremque qui adipisci! Veniam vitae magnam a
            ex magni quos nobis accusantium maiores, reiciendis consectetur sed
            perspiciatis natus recusandae qui vel harum aperiam iure aut quod
            blanditiis accusamus totam fugiat. Perferendis sunt tenetur suscipit
            repellendus neque aut totam enim, fugiat deserunt?
          </p>
        </div>
        <div className="my-5">
          <h1 className="text-center text-2xl font-bold uppercase my-5">
            Services
          </h1>
          <div className="flex flex-wrap gap-10 justify-center">
            {services &&
              services.data.map((service) => (
                <div className="w-80 border-2 p-3" key={service._id}>
                  <h1 className="text-center text-2xl">{service.name}</h1>
                  <p>{service.details}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-center text-2xl font-bold uppercase my-5">
            Testimonials
          </h1>
          <div>
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}
