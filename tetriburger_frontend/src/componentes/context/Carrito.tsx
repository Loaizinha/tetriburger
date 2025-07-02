import { createContext, useContext, useState } from "react";

export const CarritoContext = createContext({
  items: [],
  setItems: (items: any[]) => {},
  addItem: (item: any) => {},
  removeItem: (idCarritoItem: number) => {},
  updateCantidad: (idCarritoItem: number, cantidad: number) => {},
});

export function CarritoProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<any[]>([]);

  const addItem = (item: any) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (idCarritoItem: number) => {
    setItems((prev) => prev.filter((i) => i.idCarritoItem !== idCarritoItem));
  };

  const updateCantidad = (idCarritoItem: number, cantidad: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.idCarritoItem === idCarritoItem ? { ...i, cantidad, total: cantidad * i.producto.precio } : i
      )
    );
  };

  return (
    <CarritoContext.Provider value={{ items, setItems, addItem, removeItem, updateCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
}

export const useCarrito = () => useContext(CarritoContext);

import { useCarrito } from "../context/Carrito";

export default function ProductoCard({ producto }) {
  const { addItem } = useCarrito();

  const handleAgregar = () => {
    addItem({
      idCarritoItem: Date.now(),
      producto,
      cantidad: 1,
      total: producto.precio,
    });
  };

  return (
    <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16, margin: 8 }}>
      <h4>{producto.nombre}</h4>
      <p>${producto.precio}</p>
      <button
        onClick={handleAgregar}
        style={{
          background: "#e63946",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "8px 16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
}