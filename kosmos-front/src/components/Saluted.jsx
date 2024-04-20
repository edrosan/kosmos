import { format } from "@formkit/tempo"

export const Saluted = () => {
    const date = new Date();

    console.log(format(date, { time: "short" }))

    const saluted = () => {
        let saludo = "¡Buen día, kósmonauta!";
        let hora = date.getHours();

        if (hora >= 12 && hora < 19) {
            saludo = "¡Buenas tardes, kósmonauta!";
        } else if (hora >= 19) {
            saludo = "¡Buenas noches, kósmonauta!";
        }

        return saludo;
    }
    
    return (
        <div className=" p-4 flex flex-col flex-2 gap-2 items-center justify-between rounded-2xl bg-white">
            <h2 className="w-full text-2xl text-gray-700 text-center">{saluted()}</h2>
            <h3 className="w-full text-2xl text-gray-700 text-center">{format(date, { time: "short" })} hora estelar</h3>
        </div>
    )
}