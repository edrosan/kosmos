import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const FormLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    auth.login(user);
  }


  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-gray-950">
      <div className="flex flex-col gap-2">
        <label>Correo:</label>
        <input
          className="p-2 bg-slate-100 rounded-md"
          name="email"
          type="email"
          onChange={handleChange}
          required
          placeholder="correo@correo.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Contraseña:</label>
        <input
          name="password"
          required
          type="password"
          onChange={handleChange}
          className="p-2 bg-slate-100 rounded-md"
          placeholder="********"
        />
      </div>

      <div className="w-full">
        <button type="submit" className="w-full px-4 py-2 bg-yellow-300 text-yellow-950 rounded-md hover:bg-yellow-400">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};
