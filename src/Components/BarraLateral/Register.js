import stylebtt from "../../styles/Button.module.css"
import styles from "../../styles/Layout.module.css"
import fundologcad from "../../images/FundoLogCad.jpg"

import { useState } from "react";
import { motion } from "framer-motion"
function Register(){
    const Fundo = fundologcad;

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [phone, setPhone] = useState("");
    const [nome, setNome] = useState("");
    
  
    async function EnviarDados(evento) {
      evento.preventDefault();
      const phoneValue = phone.replace(/\D/g, '');
      if (email === "" || senha === "" ||  phoneValue === "" || nome === "") {
        alert("Preencha todos os campos");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:5000/api/usuarios/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: nome, email, telefone: phone, senha }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert("Registro bem-sucedido");
          
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Erro ao fazer registro:", error);
      }
    }
    function handlePhoneChange(event) {
        const phoneValue = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        let formattedPhone = '';
      
        if (phoneValue.length > 0) {
          formattedPhone = `(${phoneValue.slice(0, 2)})`;
          if (phoneValue.length > 2) {
            formattedPhone += ` ${phoneValue.slice(2, 7)}`;
          }
          if (phoneValue.length > 7) {
            formattedPhone += `-${phoneValue.slice(7, 11)}`;
          }
        }
      
        setPhone(formattedPhone);
      }
   

    return(

        <motion.div
    initial={{
      opacity: 0,
      x: -10
    }}
    animate={{
      opacity: 1,
      x: 0,
      transition: { delay: 0.1, duration: 0.5 }
    }}
    exit={{
      opacity: 0,
      x: 30,
      transition: { duration: 0.1 }
    }}
>
        <div className={styles.LayoutLogin}>
        <img src={Fundo} alt=""></img>
            <section>
                <h1>Register</h1>
                <p>Welcome again, fill in the credentials to log in</p>
            <form>
                <label>Type your Name:</label>
                <input type="text" name="nome" value={nome} onChange={(evento) => setNome(evento.target.value)}></input>
                <label>Type your Phone:</label>
                <input type="text" name="phone" value={phone} onChange={handlePhoneChange}></input>
                <label>Type your Email:</label>
                <input type="email" name="email" value={email} onChange={(evento) => setEmail(evento.target.value)}></input>
                <label>Type your password:</label>
                <input type="password" name="senha" value={senha} onChange={(evento) => setSenha(evento.target.value)}></input>
                <button className={stylebtt.BttLayout} onClick={EnviarDados} type="submit">Login</button>
            </form>
        </section>
        </div> 
        </motion.div>
    )
}
export default Register