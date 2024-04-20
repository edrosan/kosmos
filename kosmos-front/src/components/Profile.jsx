import { Start } from "../../public/img/icons/Start";
import { useAuth } from "../hooks/useAuth";

export const Profile = () => {
    const auth = useAuth();
    const user = auth.getUser();

    console.log(user);


    return (
        <div className=" p-4 flex flex-col flex-1 gap-2 items-center  rounded-2xl bg-white">
            <div className="w-full flex flex-col items-center">
                <div className="">
                    <img src={"/img/kosmonauta.jpeg"} alt="profile" className="rounded-full w-28 h-28" />
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl">{user?.name} kósmonauta</h2>
                    <p className="text-gray-400"></p>
                </div>
            </div>


            <div className="w-full flex flex-col gap-2 items-center justify-center">
                <div title="Estrellas recolectadas" className="w-full items-center justify-center flex gap-2">
                    <Start />
                    <p>8 </p>
                </div>
                <div className="w-full h-auto">
                    <img src={"/img/progreso.jpeg"} alt="star" className="w-full" />
                </div>
            </div>

            
       </div>
    )
}