const Login = () => {
  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Login de Usuário</h2>
      <label style={styles.label}>
        <span>Email</span>
        <input type="email" style={styles.input} required />
      </label>
      <label style={styles.label}>
        <span>Senha</span>
        <input type="password" style={styles.input} required />
      </label>
      <button type="submit" style={styles.submitButton}>Entrar</button>
    </div>
  );
};

const styles = {
  formContainer: {
    marginLeft: '450px',
    marginTop: '130px',
    marginBottom: '130px',
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
  label: {
    display: 'block',
    fontSize: '1rem',
    marginBottom: '10px',
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

export default Login;
