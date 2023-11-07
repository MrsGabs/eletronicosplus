const Cadastro = () => {
  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Cadastro de Novo Usuário</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Nome:</label>
        <input type="text" style={styles.input} name="nome" />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input type="email" style={styles.input} name="email" />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Senha:</label>
        <input type="password" style={styles.input} name="senha" />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Confirmar Senha:</label>
        <input type="password" style={styles.input} name="confirmarSenha" />
      </div>
      <button type="submit" style={styles.submitButton}>Cadastrar</button>
    </div>
  );
};

const styles = {
  formContainer: {
    marginLeft: '450px',
    marginTop: '50px',
    marginBottom: '50px',
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

export default Cadastro;
