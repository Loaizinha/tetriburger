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