import { useEffect, useState } from "react"
import { fetchKosmos } from "../functions/fetch"
import { KOSMOS_API, LOCAL_API } from "../constants/api"
import { useAuth } from "../hooks/useAuth"
import { KosmosMilkyway } from "../img/svg/KosmosMilkyway"

export const Tasks = ({ day }) => {
  const [showModal, setShowModal] = useState(false)
  const [kosmos, setKosmos] = useState([])
  const [tasks, setTasks] = useState([])
  const [horas, setHoras] = useState([])
  const [refresh, setRefresh] = useState(null)

  const auth = useAuth();
  const user = auth.getUser();


  const handleShowModal = () => {
    setShowModal(prev => !prev)
  }


  useEffect(() => {
    fetch(`${LOCAL_API}/tasks/${day?.en}`)
      .then(res => res.json())
      .then(data => {
        const dataBad = data?.kosmos

        const filteredData = dataBad?.map(kosmo => {
          const usuario = kosmo?.usuario?.split("\n").join("")
          const newKosmo = { ...kosmo, usuario: usuario }

          return newKosmo
        })

        setKosmos(filteredData)
      })

  }, [refresh, day])

  useEffect(() => {
    setHoras([])

    for (let i = 0; i < 24; i++) {
      setHoras(prev => [...prev, { hora: i, ocupado: false }])
    }
  }, [])


  const handleCheckBox = (e) => {
    const id = e.target.id
    const checked = e.target.checked

    console.log(id, checked)

    const newKosmos = kosmos?.map(kosmo => {


      if (kosmo?.id === id) {
        const newKosmo = { ...kosmo, completado: checked + "" }

        fetch(`${LOCAL_API}/tasks/${day?.en}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newKosmo)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })

        return { ...kosmo, completado: checked+"" }
      }
      return kosmo
    })

    console.log(newKosmos)

    setKosmos(newKosmos)

    
  
  }




  useEffect(() => {
  }, [tasks])

  return (
    <div className="relative h-full bottom-0 p-4  flex flex-col flex-1 items-center bg-white rounded-2xl">
      <h2 className="text-2xl text-gray-700">{day?.es}</h2>

      <div className="w-full">
        <ul className="z-20 relative mx-32 flex flex-col gap-4">
          {
            kosmos?.map(kosmo => (
              <li key={crypto.randomUUID()} className={`p-4 flex gap-4 items-center  justify-between overflow-auto  rounded-md ${kosmo?.completado == "true" ? "bg-gray-300" : "backdrop-blur-sm bg-white/30"}`}>
                <div>
                  <div>
                    <span className="text-xl">{kosmo?.tarea}</span>
                  </div>

                  <div className="flex gap-2">

                    <span>{kosmo?.hora}</span>
                    <span>{kosmo?.duracion} min</span>
                  </div>
                </div>
                <div>
                  <input id={kosmo?.id} checked={kosmo?.completado == "true" ? true : false} type="checkbox" onChange={handleCheckBox} />
                </div>

              </li>
            ))
          }
        </ul>

      </div>

      <div>
        <button onClick={handleShowModal} className="absolute bottom-0 right-0 w-12 h-12 m-4 flex items-center justify-center rounded-full  bg-yellow-300 text-yellow-950 shadow-md">+</button>

      </div>
        <div className="absolute z-10 bottom-0 left-0">
          <KosmosMilkyway />
        </div>

      <Modal isOpen={showModal} handleShow={handleShowModal} day={day} setRefresh={setRefresh}></Modal>
    </div>
  )
}


const Modal = ({ children, isOpen, handleShow, day, setRefresh }) => {
  const auth = useAuth();
  const user = auth.getUser();
  const [hora, setHora] = useState(0)
  const [actividad, setActividad] = useState("")
  const [duracion, setDuracion] = useState(0)
  const [newTask, setNewTask] = useState({
    "id": crypto.randomUUID(),
    "usuario": user?.id+"",
    "tarea": actividad+"",
    "completado": "false"+"",
    "hora": hora+"",
    "duracion": duracion +""
  })



  const handleTime = (e) => {
    const time = e.target.value
    setHora(time.split(":")[0]+"")
  }

  const handleActividad = (e) => {
    setActividad(e.target.value +"")
  }

  const handleSelect = (e) => {
    setDuracion(e.target.value +"")
  }


  const handleSave = () => {
    fetch(`${LOCAL_API}/tasks/${day?.en}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "id": crypto.randomUUID(),
        "usuario": user?.id,
        "tarea": actividad,
        "completado": "false",
        "hora": hora + "",
        "duracion": duracion
      })
    })
      .then(res => res.json())
      .then(data => {
        setRefresh(crypto.randomUUID())
        console.log(data)
      
        handleShow()
      })
  }

  useEffect(() => {
    setHora(0)
    setActividad("")
    setDuracion(0)
  }, [handleShow])

  return (
    <div className={`absolute z-50 min-w-[300px] flex flex-col gap-4 bottom-0 right-0 mb-8 mr-20 p-4 ${isOpen ? "flex " : "hidden"} bg-white animate-jump-in border shadow-md rounded-2xl`}>

      <div className="w-full flex gap-4 items-center justify-between">
        <div>
          <h2 className="text-gray-700">Nueva actividad</h2>
        </div>
        <div>
          <button type="button" onClick={handleShow} className="text-red-500">X</button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label>Actividad:</label>
          <input type="text" onChange={handleActividad} className="p-2 bg-gray-100 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Hora:</label>
          <input type="time" onChange={handleTime} className="p-2 bg-gray-100 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Duración:</label>
          <select name="select" onChange={handleSelect}>
            <option value="0">0 min</option>
            <option value="30">30 min</option>
            <option value="60">60 min</option>
          </select>
        </div>
        <div className="w-full">
          <button onClick={handleSave} className="w-full px-4 py-2 bg-green-500 text-white rounded-md">Guardar</button>
        </div>
      </div>
    </div>
  )
}