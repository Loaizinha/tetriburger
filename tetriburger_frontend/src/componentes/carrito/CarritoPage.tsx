import { useCarrito } from "../context/Carrito";

export default function CarritoPage() {
  const { items, removeItem, updateCantidad } = useCarrito();

  const totalCarrito = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px #0002", padding: 32 }}>
      <h2>Mi Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.idCarritoItem}>
                <td>{item.producto.nombre}</td>
                <td>
                  <input
                    type="number"
                    min={1}
                    value={item.cantidad}
                    onChange={e => updateCantidad(item.idCarritoItem, Number(e.target.value))}
                    style={{ width: 50 }}
                  />
                </td>
                <td>${item.producto.precio}</td>
                <td>${item.total}</td>
                <td>
                  <button
                    onClick={() => removeItem(item.idCarritoItem)}
                    style={{ color: "#e63946", border: "none", background: "none", cursor: "pointer" }}
                  >
                    Quitar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3 style={{ textAlign: "right", marginTop: 24 }}>Total: ${totalCarrito}</h3>
    </div>
  );
}