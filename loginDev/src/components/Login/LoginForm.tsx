import styles from './styles.module.css';

export function LoginForm() {
    
    return (
       <form className={styles.form}>
        <div className={styles.header}>
            <h1>Entrar</h1>
            <p>Acesse sua conta para continuar</p>
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

        <button type="submit" className={styles.button}>
            Entrar
        </button>

       <div className={styles.links}>
         <a href="#" className={styles.link}>
            <span className={styles.footer}>
                Esqueceu sua senha?
            </span>
        </a>

        <a href="#" className={styles.link}>
            <span className={styles.footer}>
                Criar nova conta
            </span>
        </a>
       </div>
       </form>
    );
}