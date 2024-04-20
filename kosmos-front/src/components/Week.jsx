import { useState } from "react";

export const Week = ({setDay}) => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [{ es: "Domingo", en: "sunday" },{ es: "Lunes", en: "monday" }, { es: "Martes", en: "tuesday" }, { es: "Miercoles", en: "wednesday" }, { es: "Jueves", en: "thursday" }, { es: "Viernes", en: "friday" }, { es: "Sabado", en: "saturday" }];

  const handleDay = (id) => () => {
    setActiveDay(id);
    setDay(days[id]);
    console.log("hola", id);
  }


  return (
    <div className=" p-4 flex gap-2 items-center justify-between rounded-2xl bg-white">
      <Day
        title="Domingo"
        id={0}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        onClick={handleDay}>
        D
      </Day>
      <Day
        title="Lunes"
        id={1}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        onClick={handleDay}>
        L
      </Day>
      <Day
        title="Martes"
        id={2}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        onClick={handleDay}>
        M
      </Day>
      <Day
        title="Miercoles"
        id={3}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        onClick={handleDay}>
        M
      </Day>
      <Day
        title="Jueves"
        id={4}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        onClick={handleDay}>
        J
      </Day>
      <Day
        title="Viernes"
        id={5}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        onClick={handleDay}>
        V
      </Day>
      <Day
        title="Sabado"
        id={6}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        onClick={handleDay}>
        S
      </Day>


    </div>
  );
}

const Day = ({ children, title, id, activeDay, onClick }) => {

  const active = activeDay == id;

  return (
    <button type="button"
      onClick={onClick(id)}
      className={`w-12 h-12 flex items-center justify-center rounded-full ${active ? "bg-yellow-200" : "hover:bg-yellow-100"} transition-colors `}>
      {children}
    </button>
  )
}