import Cards from "../components/Cards/Card";
import Carrossel from "../components/Carousel/Carrossel";

const Produtos = () => {
  return (
    <div>
      <Carrossel></Carrossel>

      <h2 style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>Produtos</h2>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Produtos;
