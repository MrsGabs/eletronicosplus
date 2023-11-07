import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.fundo}>
        <h1>Eletrônicos Plus</h1>
        <img src="src/assets/circuit.png" alt="" />
      </div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/produtos">Eletrônicos Plus</Navbar.Brand>
          <Nav className={styles.Container}>
            <NavLink className={styles.link} to="/produtos">Produtos</NavLink>
            <NavLink className={styles.link} to="/formulario">Adicionar Produto</NavLink>
            <NavLink className={styles.link} to="/login">Login</NavLink>
            <NavLink className={styles.link} to="/cadastro">Cadastro</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
