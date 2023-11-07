import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Card.module.css"

const Cards = () => {
  return (
    <>
    <div className={styles.CardGroup}>
      <Card className={styles.Cards}>
        <Card.Img className={styles.imgProduto} variant="top" src="/src/assets/produtoCelular.jpg" />
        <Card.Body>
          <Card.Title>Produto Celular</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default Cards;
