import styles from "./styles.module.css";

export function CreateUserForm() {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.header}>
          <h1> Novo Cadastro</h1>
        </div>

        <div className={styles.field}>
         <label htmlFor="Nome">Nome</label>
            <input 
            id="Nome"
            type="text"
            placeholder="Digite seu Nome"
            />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
            <input 
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            />
        </div>

        <div className={styles.field}>
           <label htmlFor="password">Senha</label>
            <input
            id="password" 
            type="password"
            placeholder="digite sua senha"
            />        
        </div>

        <div>
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
