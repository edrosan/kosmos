import { useState } from "react";
import { Tasks } from "../components/Tasks";
import { Tips } from "../components/Tips";
import { Week } from "../components/Week";
import { Saluted } from "../components/Saluted";
import { Profile } from "../components/Profile";
import { Weather } from "../components/Weather";
import { useAuth } from "../hooks/useAuth";

export const Agency = () => {
  const [day, setDay] = useState({es:"Domingo", en:"sunday"});
  

  return (
    <div className="mx-16 p-4 flex flex-col flex-1 gap-4 items-center  ">

      <div className="w-full flex-1 h-full flex  gap-4">
        <div className="flex-1 flex flex-col gap-4">
          <Week setDay={setDay}/>
          <Tips />
          <Tasks day={day} setDay={setDay}/>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <Saluted />
          <Profile />
          <Weather />
        </div>
      </div>
    </div>
  );
};
