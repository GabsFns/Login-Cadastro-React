import BttLoginCad from "../form/buttons";
import styles from "../../styles/Layout.module.css";
import fundologcad from "../../images/FundoLogCad.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

function Login() {
  const Fundo = fundologcad;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function EnviarDados(evento) {
    evento.preventDefault();
    if (email === "" || senha === "") {
      alert("Preencha todos os campos");
      return;
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
