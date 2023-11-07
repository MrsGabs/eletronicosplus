import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css'

function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
      <img className={styles.imgCarrossel} src='/src/assets/carrossel1.jpg' alt='celular'/>
        <Carousel.Caption>
          <h3>Celular IPhone</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={styles.imgCarrossel} src='/src/assets/carrossel2.jpg' alt='celular'/>
        <Carousel.Caption>
          <h3>Notebook</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={styles.imgCarrossel} src='/src/assets/carrossel3.jpg' alt='celular'/>
        <Carousel.Caption>
          <h3>SmartWatch</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;