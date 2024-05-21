import BttLoginCad from "../form/buttons";
import styles from "../../styles/Layout.module.css";
import fundologcad from "../../images/FundoLogCad.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const Fundo = fundologcad;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function EnviarDados(evento) {
    evento.preventDefault();
    if (email === "" || senha === "") {
      alert("Preencha todos os campos");
      
    }else{

    try {
      const response = await fetch("http://localhost:5000/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      alert("Buscando...");
      if (response.ok) {
        alert("Login bem-sucedido");
        navigate("/Dashboard");
        localStorage.setItem('token', data.token);
        return;
      } else {
        alert(data.message);
        alert("Erro no Login");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }
}
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.1, duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        x: 30,
        transition: { duration: 0.1 },
      }}
    >
      <div className={styles.LayoutLogin}>
        <img src={Fundo} alt=""></img>
        <section>
          <h1>Login</h1>
          <p>Welcome again, fill in the credentials to log in</p>
          <form onSubmit={EnviarDados}>
            <label>Type your Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            ></input>
            <label>Type your password:</label>
            <input
              type="password"
              name="senha"
              value={senha}
              onChange={(evento) => setSenha(evento.target.value)}
            ></input>
            <a href="/">Forgot password?</a>
            <BttLoginCad />
          </form>
        </section>
      </div>
    </motion.div>
  );
}
export default Login;
