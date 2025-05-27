import { Link } from 'react-router-dom';

export default function Navegador() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/">Home</Link> | <Link to="/registro">Registrarse</Link> | <Link to="/login">Iniciar sesión</Link>
    </nav>
  );
}
