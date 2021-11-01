import React from "react";
import useForm from "../../hooks/useForm";
import { loginData } from "../../services/user";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    loginData(form, clear);
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <h1>Rappi4</h1>
        <h3>Entrar</h3>

        <input
          type="email"
          placeholder="Email"
          name={"email"}
          value={form.email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Senha"
          name={"password"}
          value={form.password}
          onChange={onChange}
        />

        <button type={"submit"}>Criar</button>
      </form>
    </div>
  );
};

export default LoginForm;
