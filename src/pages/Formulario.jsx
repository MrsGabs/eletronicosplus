
const Formulario = () => {
  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Adicionar Novo Produto</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Descrição:</label>
        <input type="text" style={styles.input} name="descricao" />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Marca:</label>
        <input type="text" style={styles.input} name="marca" />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Data de Fabricação:</label>
        <input type="date" style={styles.input} name="dataFabricacao" />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Anos de Garantia:</label>
        <input type="number" style={styles.input} name="anosGarantia" />
      </div>
      <button type="submit" style={styles.submitButton}>Adicionar Produto</button>
    </div>
  );
};

const styles = {
  formContainer: {
    marginLeft: '450px',
    marginTop:'90px',
    marginBottom:'90px',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  formTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '1rem',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Formulario;
