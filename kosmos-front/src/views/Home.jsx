import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { KosmosHome } from "../img/svg/KosmosHome";

export const Home = () => {



  return (
    <div className="h-full flex flex-col gap-8 flex-1">
        <div className="w-full flex items-center justify-center">
          <h1 className="my-4 text-8xl text-slate-700 font-marck">kósmos</h1>
        </div>


        <div className="mx-4 sm:flex gap-4 items-center">
          <div className="flex-1 h-[300px]">
            <KosmosHome />
          </div>
          <div className="mt-8 sm:mt-0 flex-1 ">
            <p className="text-xl sm:text-2xl text-slate-700">Con cada momento bien empleado, te acercas un paso más a tus metas y sueños.
              Administra tu tiempo con Kósmos</p>
          </div>
        </div>
      <div>
      </div>
    </div>
  )
};
