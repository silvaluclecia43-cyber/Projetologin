import styles from "./styles.module.css";

export function CreateUserForm({irParaLogin}) {
  function enviar(evento: any){
    evento.preventDefault()

    const user = {
      nome: evento.target.nome.value,
      email: evento.target.email.value,
      senha: evento.target.senha.value,
    }
    localStorage.setItem("user", JSON.stringify(user) )

    alert("cadastro criado")

    irParaLogin()
  }
  return (
    <>
      <form className={styles.form} onSubmit={enviar}>
        <div className={styles.header}>
          <h1> Novo Cadastro</h1>
        </div>

        <div className={styles.field}>
         <label htmlFor="Nome">Nome</label>
            <input 
            id="Nome"
            name="nome"
            type="text"
            placeholder="Digite seu Nome"
            />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
            <input 
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            />
        </div>

        <div className={styles.field}>
           <label htmlFor="password">Senha</label>
            <input
            id="password" 
            name="senha"
            type="password"
            placeholder="digite sua senha"
            />        
        </div>

        <div>
          <button className={styles.button}>
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
