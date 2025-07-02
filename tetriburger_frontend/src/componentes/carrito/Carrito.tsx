import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type CarritoItem = {
  idCarritoItem: number;
  cantidad: number;
  total: number;
  producto: {
    precio: number;
    // add other fields as needed
  };
  // add other fields as needed
};

type CarritoContextType = {
  items: CarritoItem[];
  setItems: (items: CarritoItem[]) => void;
  addItem: (item: CarritoItem) => void;
  removeItem: (idCarritoItem: number) => void;
  updateCantidad: (idCarritoItem: number, cantidad: number) => void;
};

export const CarritoContext = createContext<CarritoContextType>({
  items: [],
  setItems: () => {},
  addItem: () => {},
  removeItem: () => {},
  updateCantidad: () => {},
});

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CarritoItem[]>([]);

  const addItem = (item: CarritoItem) => setItems((prev) => [...prev, item]);
  const removeItem = (idCarritoItem: number) =>
    setItems((prev) => prev.filter((i) => i.idCarritoItem !== idCarritoItem));
  const updateCantidad = (idCarritoItem: number, cantidad: number) =>
    setItems((prev) =>
      prev.map((i) =>
        i.idCarritoItem === idCarritoItem
          ? { ...i, cantidad, total: cantidad * i.producto.precio }
          : i
      )
    );

  return (
    <CarritoContext.Provider value={{ items, setItems, addItem, removeItem, updateCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
}

export const useCarrito = () => useContext(CarritoContext);