import { Link } from "wouter";
import { useAuth } from "../hooks/useAuth";

export const NavBar = () => {
  const auth = useAuth();

  console.log(auth.isLogged());

  return (
    <div className="hidden p-4 sm:flex gap-4 items-center justify-between ">
      <div className="flex gap-2 items-center">
        <img src="/img/logo.png" alt="Kosmos" className="w-12 h-12" />
        <div>
          <span className="font-marck text-3xl">kósmos</span>
        </div>
      </div>

      <div className="flex gap-4">
        <LinkTo to="/">Inicio</LinkTo>
        <LinkAnchor to="https://developers.notion.com/">API Notion</LinkAnchor>
        <LinkTo to="/about">Nosotros</LinkTo>

        {auth.isLogged() ? (
          <>
          <LinkTo to="/logros">Logros</LinkTo>
            <LinkTo to="/agency">Agenda</LinkTo>
            <LinkLogout onClick={auth.logout}>Cerrar sesión</LinkLogout>
          </>
        ) : (
          <LinkLogin to="/login">Iniciar sesión</LinkLogin>
        )}
      </div>
    </div>
  );
};

const LinkTo = ({ to, children }) => {
  return (
    <Link
      href={to}
      className={
        "px-4 py-2 rounded-lg transition-colors hover:bg-yellow-50 hover:text-yellow-950"
      }
    >
      {children}
    </Link>
  );
};

const LinkLogin = ({ to, children }) => {
  return (
    <Link
      href={to}
      className={
        "px-4 py-2 rounded-3xl transition-colors  bg-yellow-200 text-yellow-950 hover:bg-yellow-300"
      }
    >
      {children}
    </Link>
  );
};

const LinkAnchor = ({ to, children }) => {
  return (
    <a
      href={to}
      target="__blank"
      className={
        "px-4 py-2 rounded-lg transition-colors hover:bg-yellow-50 hover:text-yellow-950"
      }
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

const LinkLogout = ({ to, children }) => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="px-4 py-2 rounded-3xl text-rose-950 bg-rose-200"
    >
      {children}
    </button>
  );
};
