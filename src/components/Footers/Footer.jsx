import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.centralizar}>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
              <p>&copy; 2023 Eletrônicos Plus. Todos os direitos reservados.</p>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="/">Página Inicial</a>
                </li>
                <Link to="/cadastro">
                  <li>Cadastrar</li>
                </Link>
                <Link to="/login">
                  <li>Logar</li>
                </Link>
              </ul>
              <br />
              <div className={styles.contato}>
                <h4>Contato</h4>
                <p>Telefone: (11) 97175-9237</p>
                <p>
                  Email: <a href="">seuemail@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
