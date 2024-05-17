import BttLoginCad from "../form/buttons"
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

function EnviarDados(evento){
    evento.preventDefault();
    
    if(email === "" || senha === "" || phone === "" || nome === ""){
        alert("Preencha todos os campos")
        return;
    }
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
            <form onSubmit={EnviarDados}>
                <label>Type your Name:</label>
                <input type="text" name="nome" value={nome} onChange={(evento) => setNome(evento.target.value)}></input>
                <label>Type your Phone:</label>
                <input type="text" name="phone" value={phone} onChange={(evento) => setPhone(evento.target.value)}></input>
                <label>Type your Email:</label>
                <input type="email" name="email" value={email} onChange={(evento) => setEmail(evento.target.value)}></input>
                <label>Type your password:</label>
                <input type="password" name="senha" value={senha} onChange={(evento) => setSenha(evento.target.value)}></input>
                <BttLoginCad />
            </form>
        </section>
        </div> 
        </motion.div>
    )
}
export default Register