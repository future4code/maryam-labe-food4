import React from "react";
import { goToSignUp } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
      <div>
        <button onClick={() => goToSignUp(history)}>
          Não possui cadastro? Clique aqui
        </button>
      </div>
    </div>
  );
};

export default Login;
