import React from "react";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { signUpData } from "../../services/user";

const SignUpForm = () => {
  const history = useHistory();

  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUpData(form, clear, history);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <h1>Rappi4</h1>
        <h3>Cadastrar</h3>

        <input
          type="text"
          placeholder="Nome"
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <input
          type="number"
          placeholder="CPF"
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Confirmar senha "
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
        />

        <button type={"submit"}>Criar</button>
      </form>
    </div>
  );
};

export default SignUpForm;
