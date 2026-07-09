import styles from "./styles.module.css";

export function LoginForm({ goToForget, goToRegister }) {
  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.passord.value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.email === email && user?.password === password) {
      alert("Login realizado");
    } else {
      alert("Credenciais inválidas");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1>Entrar</h1>
        <p>Acesse sua conta para continuar</p>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" placeholder="Digite seu e-mail" />
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" placeholder="digite sua senha" />
      </div>

      <button type="submit" className={styles.button}>
        Entrar
      </button>

      <div className={styles.links}>
        <button type="button" onClick={goToForget}>
          Esqueceu a senha?
        </button>

        <button type="button" onClick={goToRegister}>
          Criar nova conta
        </button>
      </div>
    </form>
  );
}
