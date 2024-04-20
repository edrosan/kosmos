import { CircleLoader } from "react-spinners";


export const  KosmosLoading = ({loading}) => {
    return (
      <div className={`${loading ? "flex" : "hidden"} fixed z-50 top-0 w-full min-h-screen  flex-col gap-8 items-center justify-center bg-slate-50 animate-fade animate-duration-[5000ms]`}>
        <h1 className="text-6xl text-slate-700 font-marck">kósmos</h1>
  
        <CircleLoader color="#334155" />
      </div>
    );
  };