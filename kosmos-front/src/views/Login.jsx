import { CardLogin } from "../components/CardLogin";
import { LoginSVG } from "../img/undraw/Login";
import { FormLogin } from "../components/FormLogin";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useLocation } from "wouter";

export const Login = () => {
  const [location, setLocation] = useLocation();
  const auth = useAuth();

  useEffect(() => {
    if(auth.isLogged()) {
      setLocation("/agency")
    }
  }, [auth.getUser()]);

  return (
    <div className="w-full flex items-center justify-center p-8 bg-transparent ">
      <CardLogin>
        <Title>Inicia sesión</Title>

        <div className="w-full flex gap-4">
          <div className="w-[400px] flex flex-col gap-4">
            <FormLogin />

            <div className="w-full flex items-center justify-center">
              <span className="font-medium">o</span>
            </div>

            {/* <FormGoogle /> */}
          </div>

          <div className="w-full overflow-hidden">
            <LoginSVG />
          </div>
        </div>
      </CardLogin>
    </div>
  );
};

const Title = ({ children }) => {
  return <h2 className="max-w-[500px] text-3xl text-gray-900">{children}</h2>;
};
