import { useEffect, useState } from "react"
import { Bell } from "../img/icons/Bell"
import { LOCAL_API } from "../constants/api"
import { Brain } from "../../public/img/icons/Brain"

export const Tips = () => {

  const [recomendacion, setRecomendacion] = useState('')

  useEffect (() => {
    fetch(`${LOCAL_API}/ia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "message": "dame solo un deporte que se pueda hacer en casa"
      })
    })
    .then(res => res.json())
    .then(data => setRecomendacion(data?.kosmos)  )
  }, [])

  return (
    <div className="w-full p-4 flex flex-col  gap-4 bg-white rounded-2xl" >
      <div className="flex items-center gap-4">

        <Bell />
        <p className="text-gray-800">No recomendable salir, altas temperaturas registradas</p>
      </div>
      <div>

      <div className="flex items-center gap-4">
          <Brain />
        <p className="text-gray-800">Recomendación hacer {recomendacion}</p>
        </div>

        <p></p>
      </div>
    </div>
  )
}