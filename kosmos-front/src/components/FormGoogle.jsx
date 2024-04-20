import GoogleLogin from "react-google-login";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { gapi } from "gapi-script";

export const FormGoogle = () => {
  const auth = useAuth();

  const clientId =
    "980208723320-auhotins61raggfl9ni1qc2qv2bh42n3.apps.googleusercontent.com";

  const onSuccess = (response) => {
    auth.login(response.profileObj);
  };
  
  const onFailure = (response) => {
    console.log(response);
  };

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        client_id: clientId,
      });
    };

    gapi.load("auth2", start);
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        // cookiePolicy="single_host_origin"
        buttonText="Iniciar sesión con Google"
        theme="dark"
        isSignedIn={true}
      />
    </div>
  );
};
