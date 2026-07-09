import styles from "./styles.module.css";
export function ForgetForm({ goToLogin }) {
  function handleSubmit(e) {
    e.preventDefaut();

    const email = e.target.email.value;
    const user = JSON.parse(localStorage.getltem("user"));

    if (!user || user.email !== email) {
      alert("Email não encontrado");
      return;
    }

    const newPassword = prompt("Nova senha");
    user.password = newPassword;
    localStorage.setltem("user", JSON.stringify(user));
    alert("Senha alterada");
    goToLogin();
  }

  return (
    <form className={styles.form}onSubmit={handleSubmit} >
      <div className={styles.header}>
        <h1>Recuperar senha</h1>
        <p>Informe seu email</p>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" placeholder="Digite seu e-mail" />
      </div>

      <button type="submit" className={styles.button}>
        Enviar
      </button>

      <div className={styles.links}>
        <a href="#" className={styles.link}>
          <span className={styles.footer}>Voltar</span>
        </a>
      </div>
    </form>
  );
}
