import { Oval } from "react-loader-spinner";
import { teamMemeber_pic } from "../../../Api/Axios/axiosInstance";
import { getTeam } from "../../../Api/Functions/Queries/team.api";
import {  useQuery } from "@tanstack/react-query";

export default function About() {
   const { data: team ,isLoading} = useQuery({
     queryKey: ["team"],
     queryFn: getTeam,
   }); 
  return (
    <div>
      <div className="max-w-[1380px] mx-auto">
        <div className="banner flex gap-5 m-5 h-[500px]">
          <img
            src="https://images.pexels.com/photos/1231230/pexels-photo-1231230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-full "
          />
          <div className="flex  flex-col h-full justify-center">
            {" "}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              repudiandae quod necessitatibus nulla reprehenderit? Dignissimos
              nihil dolore ullam voluptatem quos!
            </p>
            <h1>Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              repudiandae quod necessitatibus nulla reprehenderit? Dignissimos
              nihil dolore ullam voluptatem quos!
            </p>
            <h1>Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              repudiandae quod necessitatibus nulla reprehenderit? Dignissimos
              nihil dolore ullam voluptatem quos!
            </p>
          </div>
        </div>
        <div className="teams mb-5">
          <h1 className="text-3xl my-4 text-center font-bold">Our Teams</h1>
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
            <div className="flex flex-wrap gap-10 justify-center">
              {team &&
                team.map((member) => (
                  <div
                    className="shadow-md rounded-lg overflow-hidden"
                    key={member._id}
                  >
                    <img
                      src={teamMemeber_pic(member._id)}
                      alt="member"
                      className="h-[350px]"
                    />
                    <h1 className="text-xl mt-1 font-semibold text-center">
                      {member.name}
                    </h1>
                    <p className="text-center">{member.possession}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
