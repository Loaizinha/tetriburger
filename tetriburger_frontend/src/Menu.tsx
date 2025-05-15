import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/registro">Registrarse</Link> | <Link to="/login">Iniciar sesión</Link>
    </nav>
  );
}
