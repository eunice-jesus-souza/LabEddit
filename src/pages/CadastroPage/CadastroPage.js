import React from "react";
import axios from "axios";


const CadastroPage = () => {
  const [inputValues, setInputValues] = React.useState({
    usuario: "",
    email: "",
    senha: "",
  });

  const handleInput = (event) => {
    setInputValues({
        ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const registraUsuario = async (event) => {
    event.preventDefault()
    const url = 'https://labeddit.herokuapp.com/users/signup'
    const body = {
        username: inputValues.usuario,
        email: inputValues.email,
        password: inputValues.senha
    }
    const headers = {
        headers: {
        
        "Content-Type": "application/json"
        }
    }

    let response
    try{
        response = await axios.post(url, body, headers)
    } catch (err){
        alert('usuario ou senha incorretas')
    } finally{
         console.log(response, inputValues.usuario, inputValues.email, inputValues.senha )
    }
  }

  return (
    <div>
      <form onSubmit={registraUsuario}>
        <input
          name="usuario"
          required
          onChange={handleInput}
          type="text"
          placeholder="Nome do Usuário"
        />

        <input
          name="email"
          required
          onChange={handleInput}
          type="email"
          placeholder="Email"
        />

        <input
          name="senha"
          required
          onChange={handleInput}
          type="password"
          placeholder="Senha"
        />

        <button  type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroPage;
