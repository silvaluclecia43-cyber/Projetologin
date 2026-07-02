import { useEffect, useState } from "react";
import { CreateUserForm } from "./CreateUserForm";
import { ForgetForm } from "./ForgetForm";
import { LoginForm } from "./LoginForm";

export function PageLogin() {
  const [usuario, setUsuario] = useState("login");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setUsuario("cadastro");
    }
  }, []);

  function carregarTela() {
    switch (usuario) {
      case "cadastro":
        return <CreateUserForm irParaLogin={() => setUsuario("login")} />;

      case "esqueceu":
        return <ForgetForm />;

      default:
        return <LoginForm />;
    }
  }

  return carregarTela();
}
